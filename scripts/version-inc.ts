
import { promises as fs } from 'fs';
import path from 'path';

const packageJsonPath = path.join(process.cwd(), 'package.json');
const cliIndexPath = path.join(process.cwd(), 'cli', 'index.ts');

async function incrementVersion() {
  try {
    // Read package.json
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    const currentVersion = packageJson.version;

    // Increment patch version
    const versionParts = currentVersion.split('.').map(Number);
    versionParts[2] += 1;
    const newVersion = versionParts.join('.');

    console.log(`Updating version from ${currentVersion} to ${newVersion}`);

    // Update package.json
    packageJson.version = newVersion;
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

    // Update cli/index.ts
    let cliIndexContent = await fs.readFile(cliIndexPath, 'utf-8');
    const versionRegex = /\.version\("(\d+\.\d+\.\d+)"/;
    cliIndexContent = cliIndexContent.replace(versionRegex, `.version("${newVersion}"`);
    await fs.writeFile(cliIndexPath, cliIndexContent);

  } catch (error) {
    console.error('Error incrementing version:', error);
    process.exit(1);
  }
}

incrementVersion();
