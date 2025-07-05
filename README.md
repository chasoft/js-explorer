# Chasoft JS Explorer

A professional CLI tool for quickly setting up JavaScript/TypeScript experimental projects, designed to be an alternative to online playgrounds like JSFiddle but with local development power and AI assistance.

## Features

- 🚀 **Quick Setup**: Initialize experimental projects in seconds
- 📝 **TypeScript Support**: Full TypeScript templates with type safety
- 🎨 **Professional Templates**: Beautiful, ready-to-use HTML/CSS/JS templates
- 🔧 **VS Code Integration**: Pre-configured debugging and development setup
- 📦 **Bun Powered**: Fast package management and execution
- 🎯 **Variable Substitution**: Customize templates with your own variables
- 💡 **AI-Friendly**: Perfect for experimenting with AI assistance

## Installation

## Prerequisites

Before installing Chasoft JS Explorer, you must have Bun installed on your system.

### Install Bun
```bash
# macOS and Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

For more installation options, visit [bun.sh](https://bun.sh/docs/installation)

### Global Installation (recommended)
```bash
bun install -g chasoft
```

### Use with bunx
```bash
bunx chasoft -e -t js-plain -n my-experiment
```

## Usage

### Basic Usage
```bash
# Create a plain JavaScript project
chasoft -e -t js-plain -n my-project

# Create a TypeScript project with dependencies installed
chasoft -e -t js-ts -n my-ts-project --install

# List available templates
chasoft templates

# Use custom variables
chasoft -e -t js-plain -n my-project -v author="Your Name" -v year=2025
```

### Available Options

- `-e, --explorer` (required): Use js-explorer (boolean flag, always sets explorer to "js-explorer")
- `-t, --template <name>` (required): Template name (`js-plain`, `js-ts`)
- `-n, --name <project-name>`: Project folder name (default: current directory)
- `-i, --install`: Install dependencies automatically
- `-u, --update`: Update an existing project with the selected template
- `-o, --overwrite`: Overwrite files without prompting
- `-v, --var <key=value>`: Set custom template variables (can be used multiple times)

### Examples

```bash
# Quick JavaScript experiment
chasoft -e -t js-plain -n quick-test

# TypeScript project with auto-install
chasoft -e -t js-ts -n typescript-experiment --install

# List available templates
chasoft templates

# Custom variables
chasoft -e -t js-plain -n my-app -v author="John Doe" -v description="My awesome app"

# Update existing project (with confirmation)
chasoft -e -t js-ts --update

# Force overwrite without prompts
chasoft -e -t js-plain --update --overwrite
```

## Templates

### `js-plain` - Plain JavaScript
- Modern JavaScript (ES2022+)
- HTML5 + CSS3
- Interactive demo
- Bun development server
- VS Code debugging configuration

### `js-ts` - TypeScript
- Full TypeScript support
- Type-safe DOM manipulation
- Generic functions and interfaces
- TypeScript configuration
- Enhanced VS Code debugging

## Development Workflow

After creating a project:

### Terminal
```bash
cd your-project
bun dev          # Start development server with hot reload
bun start        # Run once
bun type-check   # TypeScript type checking (TS projects only)
```

### VS Code
1. Open the project in VS Code
2. Go to "Run and Debug" tab (Ctrl+Shift+D)
3. Select a configuration and click play

## Project Structure

Each template creates:
```
your-project/
├── index.html          # Main HTML file
├── index.js/.ts        # JavaScript/TypeScript entry point
├── style.css           # Styling
├── package.json        # Project configuration
├── tsconfig.json       # TypeScript config (TS projects only)
├── README.md           # Project-specific documentation
└── .vscode/
    └── launch.json     # VS Code debugging configuration
```

## Variable Substitution

Templates support variable substitution using `{{variableName}}` syntax:

- `{{projectName}}`: Automatically set to project name
- Custom variables via `-v key=value`

Templates will prompt for any undefined variables found in template files.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add new templates in the `templates/` directory
4. Update documentation
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Why Chasoft JS Explorer?

- **Local Development**: Full power of your local environment
- **AI Integration**: Perfect for AI-assisted coding sessions
- **Professional Setup**: Production-ready project structure
- **Fast Iteration**: Bun-powered development for speed
- **Type Safety**: Optional TypeScript for better code quality
- **VS Code Ready**: Instant debugging and development setup

Start experimenting today! 🚀

Happy Coding ♥️ Brian Cao