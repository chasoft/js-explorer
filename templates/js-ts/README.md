# {{projectName}}

A TypeScript experimental project created with **JS Explorer**.

## Getting Started

This project includes:
- `index.html` - The main HTML file with a TypeScript demo
- `index.ts` - TypeScript file for your type-safe experiments
- `style.css` - Styling for your project
- `tsconfig.json` - TypeScript configuration
- VS Code debugging configuration with TypeScript support

## Development

### Using Terminal
```bash
bun dev          # Start development server with hot reload
bun start        # Run the project once
bun build        # Build the TypeScript project
bun type-check   # Check TypeScript types without compilation
```

### Using VS Code
1. Open the "Run and Debug" tab (Ctrl+Shift+D)
2. Select one of the available configurations:
   - **Launch TypeScript with Bun** - Run with hot reload
   - **Debug TypeScript** - Debug your TypeScript code
   - **Type Check** - Check types without running
3. Click the play button to start

## Project Structure

```
{{projectName}}/
├── index.html          # Main HTML file
├── index.ts            # TypeScript experiments
├── style.css           # Styling
├── package.json        # Project configuration
├── tsconfig.json       # TypeScript configuration
└── .vscode/
    └── launch.json     # VS Code debug configuration
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

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bun with TypeScript](https://bun.sh/docs/runtime/typescript)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

Happy experimenting with TypeScript! 🚀
