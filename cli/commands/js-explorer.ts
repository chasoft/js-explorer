import chalk from "chalk"
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "fs"
import { basename, dirname, join } from "path"
import prompts from "prompts"
import { promisify } from "util"
import type { JsExplorerOptions, TemplateVariable } from "../types.js"

export class JsExplorerCommand {
  private readonly templatesDir: string
  private readonly currentDir: string

  constructor() {
    // Get the templates directory relative to the project root
    // When built, the CLI is in dist/cli/ and templates are in templates/
    this.templatesDir = join(
      dirname(dirname(dirname(import.meta.url.replace("file://", "")))),
      "templates",
    )
    this.currentDir = process.cwd()
  }

  async execute(options: JsExplorerOptions): Promise<void> {
    console.log(chalk.blue("🚀 JS Explorer CLI"))
    console.log(chalk.gray("Creating your experimental JavaScript project..."))

    // Validate options
    await this.validateOptions(options)

    // Get template directory
    const templateDir = join(this.templatesDir, options.template)
    if (!existsSync(templateDir)) {
      throw new Error(
        `Template '${options.template}' not found in ${this.templatesDir}`,
      )
    }

    // Determine target directory
    const targetDir = options.name
      ? join(this.currentDir, options.name)
      : this.currentDir

    // Create target directory if it doesn't exist
    if (options.name && !existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true })
    }

    // Check for existing files if not updating
    if (!options.update && !options.overwrite) {
      await this.checkExistingFiles(templateDir, targetDir)
    }

    // Collect template variables
    const variables = await this.collectTemplateVariables(templateDir, options)

    // Copy and process template files
    await this.copyTemplate(templateDir, targetDir, variables, options)

    // Install dependencies if requested
    if (options.install) {
      await this.installDependencies(targetDir)
    }

    // Show completion message
    this.showCompletionMessage(
      options.name || "current directory",
      options.template,
    )
  }

  private async validateOptions(options: JsExplorerOptions): Promise<void> {
    // Validate that explorer flag is set (it's always js-explorer)
    if (!options.explorer) {
      throw new Error("The -e flag is required to use js-explorer")
    }

    const availableTemplates = readdirSync(this.templatesDir).filter((item) =>
      statSync(join(this.templatesDir, item)).isDirectory(),
    )

    if (!availableTemplates.includes(options.template)) {
      throw new Error(
        `Template '${options.template}' not found. Available templates: ${availableTemplates.join(", ")}`,
      )
    }
  }

  private async checkExistingFiles(
    templateDir: string,
    targetDir: string,
  ): Promise<void> {
    const templateFiles = this.getTemplateFiles(templateDir)
    const existingFiles = templateFiles.filter((file) => {
      const targetFile = join(targetDir, file)
      return existsSync(targetFile)
    })

    if (existingFiles.length > 0) {
      console.log(chalk.yellow("⚠️  The following files already exist:"))
      existingFiles.forEach((file) => console.log(chalk.yellow(`  - ${file}`)))

      const response = await prompts({
        type: "confirm",
        name: "overwrite",
        message: "Do you want to overwrite these files?",
        initial: false,
      })

      if (!response.overwrite) {
        console.log(chalk.red("❌ Operation cancelled"))
        process.exit(0)
      }
    }
  }

  private getTemplateFiles(templateDir: string): string[] {
    const files: string[] = []

    const scanDirectory = (dir: string, prefix: string = ""): void => {
      const items = readdirSync(dir)

      for (const item of items) {
        const fullPath = join(dir, item)
        const relativePath = prefix ? join(prefix, item) : item

        if (statSync(fullPath).isDirectory()) {
          scanDirectory(fullPath, relativePath)
        } else {
          files.push(relativePath)
        }
      }
    }

    scanDirectory(templateDir)
    return files
  }

  private async collectTemplateVariables(
    templateDir: string,
    options: JsExplorerOptions,
  ): Promise<Record<string, string>> {
    const variables: Record<string, string> = {
      projectName: options.name || basename(this.currentDir),
      ...(options.var || {}),
    }

    // Scan template files for variables
    const templateFiles = this.getTemplateFiles(templateDir)
    const foundVariables = new Set<string>()

    for (const file of templateFiles) {
      const content = readFileSync(join(templateDir, file), "utf-8")
      const matches = content.match(/\{\{(\w+)\}\}/g)

      if (matches) {
        matches.forEach((match) => {
          const varName = match.slice(2, -2)
          foundVariables.add(varName)
        })
      }
    }

    // Prompt for missing variables
    const missingVariables = Array.from(foundVariables).filter(
      (varName) => !variables[varName],
    )

    if (missingVariables.length > 0) {
      console.log(
        chalk.blue("📝 Please provide values for template variables:"),
      )

      for (const varName of missingVariables) {
        const response = await prompts({
          type: "text",
          name: "value",
          message: `Enter value for ${chalk.cyan(varName)}:`,
          initial: varName === "projectName" ? basename(this.currentDir) : "",
        })

        if (response.value === undefined) {
          console.log(chalk.red("❌ Operation cancelled"))
          process.exit(0)
        }

        variables[varName] = response.value
      }
    }

    return variables
  }

  private async copyTemplate(
    templateDir: string,
    targetDir: string,
    variables: Record<string, string>,
    options: JsExplorerOptions,
  ): Promise<void> {
    const templateFiles = this.getTemplateFiles(templateDir)

    console.log(chalk.blue("📁 Copying template files..."))

    for (const file of templateFiles) {
      const sourcePath = join(templateDir, file)
      const targetPath = join(targetDir, file)

      // Create directory if it doesn't exist
      mkdirSync(dirname(targetPath), { recursive: true })

      // Read file content
      let content = readFileSync(sourcePath, "utf-8")

      // Replace variables
      for (const [key, value] of Object.entries(variables)) {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, "g")
        content = content.replace(regex, value)
      }

      // Write processed content
      writeFileSync(targetPath, content)
      console.log(chalk.green(`  ✓ ${file}`))
    }
  }

  private async installDependencies(targetDir: string): Promise<void> {
    const packageJsonPath = join(targetDir, "package.json")

    if (existsSync(packageJsonPath)) {
      console.log(chalk.blue("📦 Installing dependencies..."))

      const { spawn } = await import("child_process")

      return new Promise((resolve, reject) => {
        const child = spawn("bun", ["install"], {
          cwd: targetDir,
          stdio: "inherit",
        })

        child.on("close", (code) => {
          if (code === 0) {
            console.log(chalk.green("✓ Dependencies installed successfully"))
            resolve()
          } else {
            reject(
              new Error(`Dependency installation failed with code ${code}`),
            )
          }
        })

        child.on("error", (error) => {
          reject(new Error(`Failed to install dependencies: ${error.message}`))
        })
      })
    }
  }

  private showCompletionMessage(
    targetName: string,
    templateName: string,
  ): void {
    console.log()
    console.log(chalk.green("🎉 Project created successfully!"))
    console.log(chalk.blue(`📁 Location: ${targetName}`))
    console.log(chalk.blue(`📋 Template: ${templateName}`))
    console.log()
    console.log(chalk.yellow("Next steps:"))

    if (targetName !== "current directory") {
      console.log(chalk.gray(`  cd ${targetName}`))
    }

    console.log(chalk.gray("  bun dev          # Start development server"))
    console.log(chalk.gray('  # or use VS Code "Run and Debug" tab'))
    console.log()
  }
}
