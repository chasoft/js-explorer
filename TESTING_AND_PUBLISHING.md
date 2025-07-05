# Testing and Publishing Guide for js-explorer (chasoft CLI)

## TESTING

This section provides instructions for testing the `chasoft` CLI locally before publishing a new version.

### 1. Build the Project

First, build the project to compile the TypeScript source code into JavaScript.

```bash
bun run build
```

### 2. Link the Package for Global Use

To use the CLI globally on your local machine as if it were installed from npm, create a symbolic link.

```bash
npm link
```

This will make the `chasoft` command available in your terminal.

### 3. Run Test Cases

Now you can test the different functionalities of the CLI.

#### Test Case 1: Create a `js-plain` project

```bash
chasoft -e -t js-plain -n test-js-plain
```

Verify that the `test-js-plain` directory is created with the correct files.

#### Test Case 2: Create a `js-ts` project

```bash
chasoft -e -t js-ts -n test-js-ts
```

Verify that the `test-js-ts` directory is created with the correct files for a TypeScript project.

#### Test Case 3: Test the `--empty` flag

Create a project with empty files.

```bash
chasoft -e -t js-plain -n test-empty --empty
```

Check the `test-empty` directory to ensure that `index.html` has an empty body, and `index.js` and `style.css` are empty files.

### 4. Clean Up

After testing, you can remove the test directories.

```bash
rm -rf test-js-plain test-js-ts test-empty
```

### 5. Unlink the Package

When you are done with local testing, you can remove the global symbolic link.

```bash
npm unlink
```

---

## PUBLISHING

This section provides a checklist for publishing the `chasoft` CLI to npm.

### Prerequisites
1. Make sure you have an npm account: https://www.npmjs.com/signup
2. Login to npm: `npm login`
3. Verify your identity if required

### Publishing Steps

#### 1. Login to npm
```bash
npm login
```

#### 2. Verify package is ready
```bash
npm run build
npm pack --dry-run  # Check what will be published
```

#### 3. Publish to npm
```bash
npm publish
```

#### 4. Test installation from npm
```bash
# Test global install
npm install -g chasoft

# Test bunx usage
bunx chasoft -e -t js-plain -n test-project
```

### After Publishing

Users worldwide can now use your CLI in two ways:

#### Method 1: Using bunx (no installation needed)
```bash
bunx chasoft -e -t js-plain -n my-project
```

#### Method 2: Global installation
```bash
# Install globally
npm install -g chasoft
# or with bun
bun install -g chasoft

# Then use directly
chasoft -e -t js-plain -n my-project
```

### Version Updates

To publish updates:
1. Update version in package.json: `npm version patch` (or minor/major)
2. Build: `npm run build`
3. Publish: `npm publish`

### Package Information
- Package name: `chasoft`
- Current version: 1.0.0
- Binary name: `chasoft`
- Repository: https://github.com/chasoft/js-explorer

### Verification
After publishing, verify at: https://www.npmjs.com/package/chasoft
