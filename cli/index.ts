#!/usr/bin/env bun

import chalk from "chalk"
import { Command } from "commander"
import { readdirSync, statSync } from "fs"
import { dirname, join } from "path"
import { JsExplorerCommand } from "./commands/js-explorer.js"
import type { JsExplorerOptions } from "./types.js"

const program = new Command()

program
  .name("chasoft")
  .description(
    "A professional CLI tool for creating experimental JavaScript/TypeScript projects",
  )
  .version("1.0.0")

// Add templates command
program
  .command("templates")
  .description("List available templates")
  .action(() => {
    // Get templates directory relative to project root
    const templatesDir = join(
      dirname(dirname(dirname(import.meta.url.replace("file://", "")))),
      "templates",
    )
    try {
      const templates = readdirSync(templatesDir).filter((item) =>
        statSync(join(templatesDir, item)).isDirectory(),
      )

      console.log(chalk.blue("📋 Available Templates:"))
      console.log()

      templates.forEach((template) => {
        const description =
          template === "js-plain"
            ? "Plain JavaScript with HTML5/CSS3"
            : "TypeScript with type safety and modern features"
        console.log(`  ${chalk.green(template.padEnd(12))} - ${description}`)
      })

      console.log()
      console.log(
        chalk.gray("Usage: chasoft -e -t <template-name> -n <project-name>"),
      )
    } catch (error) {
      console.error(chalk.red("Error listing templates:"), error)
    }
  })

// Handle direct command line arguments (not subcommands)
const args = process.argv.slice(2)
const isSubcommand = args.length > 0 && args[0] && !args[0].startsWith("-")

// Only add main options if it's not a subcommand
if (!isSubcommand) {
  program
    .option(
      "-e, --explorer",
      'Use js-explorer (this flag is always required and sets explorer to "js-explorer")',
    )
    .requiredOption(
      "-t, --template <name>",
      "Template name (e.g., js-plain, js-ts)",
    )
    .option(
      "-n, --name <project-name>",
      "Project folder name (default: current directory)",
    )
    .option("-i, --install", "Install dependencies automatically")
    .option(
      "-u, --update",
      "Update an existing project with the selected template",
    )
    .option("-o, --overwrite", "Overwrite files without prompting")
    .option(
      "-v, --var <key=value>",
      "Set custom template variables (can be used multiple times)",
      (value: string, previous: Record<string, string>) => {
        const vars = previous || {}
        const [key, val] = value.split("=")
        if (!key || val === undefined) {
          throw new Error("Invalid variable format. Use --var key=value")
        }
        vars[key] = val
        return vars
      },
      {} as Record<string, string>,
    )
    .action(async (options: any) => {
      try {
        // Check if -e flag is provided
        if (!options.explorer) {
          console.error(chalk.red("Error: -e flag is required"))
          console.log(
            chalk.gray(
              "Usage: chasoft -e -t <template-name> [-n <project-name>] [other options]",
            ),
          )
          process.exit(1)
        }

        // Transform options to match JsExplorerOptions interface
        const jsExplorerOptions: JsExplorerOptions = {
          explorer: options.explorer, // Boolean flag indicating js-explorer usage
          template: options.template,
          name: options.name,
          install: options.install,
          update: options.update,
          overwrite: options.overwrite,
          var: options.var,
        }

        const jsExplorer = new JsExplorerCommand()
        await jsExplorer.execute(jsExplorerOptions)
      } catch (error) {
        console.error("Error:", error instanceof Error ? error.message : error)
        process.exit(1)
      }
    })
}

// Parse command line arguments
program.parse()
