# {{projectName}}

A TypeScript experimental project created with **Chasoft JS Explorer**.

## AI Guide

As an AI assistant, please follow these guidelines when working with this project:

-   **Scope of Changes:** Only make changes to the following files:
    -   `index.html`
    -   `index.ts`
    -   `style.css`
-   **`index.html` Edits:** When editing `index.html`, only modify the content inside the `<body>` tag. Do not change the `<head>` section.

## Getting Started

This project includes:
- `index.html` - The main HTML file with a TypeScript demo
- `index.ts` - TypeScript file for your type-safe experiments
- `style.css` - Styling for your project
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- VS Code debugging configuration with TypeScript support

## Development

### Using Terminal
```bash
bun dev          # Start development server with hot reload (Vite)
bun build        # Build for production
bun preview      # Preview the production build
bun type-check   # Check TypeScript types without compilation
```

### Using VS Code
1. Open the "Run and Debug" tab (Ctrl+Shift+D)
2. Select one of the available configurations:
   - **Launch** - Opens the project in your browser with the dev server running.
   - **Type Check** - Check types without running.
3. Click the play button to start.

## Project Structure

```
{{projectName}}/
├── index.html          # Main HTML file
├── index.ts            # TypeScript experiments
├── style.css           # Styling
├── package.json        # Project configuration
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── .vscode/
    ├── launch.json     # VS Code debug configuration
    └── tasks.json      # VS Code task configuration
```

## TypeScript Features

This template demonstrates:
- **Type Safety**: Interfaces, type annotations, and generics
- **Modern JavaScript**: ES2022+ features with type checking
- **DOM Types**: Full IntelliSense for browser APIs
- **Class-based Architecture**: Object-oriented programming with types
- **Generic Functions**: Reusable code with type parameters

## Experimentation Tips

- Modify the `experiment()` function in `index.ts`
- Try different TypeScript features: interfaces, generics, unions, etc.
- Use the type information displayed in the demo
- Leverage VS Code's IntelliSense for better development experience
- Run `bun type-check` to catch type errors before runtime

## TypeScript Resources

- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bun with TypeScript](https://bun.sh/docs/runtime/typescript)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

Happy experimenting with TypeScript! 🚀
