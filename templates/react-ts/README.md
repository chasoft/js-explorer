# {{projectName}}

A React + TypeScript experimental project created with **Chasoft JS Explorer**.

## AI Guide

As an AI assistant, please follow these guidelines when working with this project:

-   **Scope of Changes:** Only make changes to the following files:
    -   `index.html`
    -   `index.tsx`
    -   `style.css`
-   **`index.html` Edits:** When editing `index.html`, only modify the content inside the `<body>` tag. Do not change the `<head>` section.

## Getting Started

This project includes:
- `index.html` - The main HTML file with a React root
- `index.tsx` - React entry point written in TypeScript
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
bun type-check   # TypeScript type checking
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
├── index.tsx           # React + TypeScript entry
├── style.css           # Styling
├── package.json        # Project configuration
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── .vscode/
    ├── launch.json     # VS Code debug configuration
    └── tasks.json      # VS Code task configuration
```

## React + TypeScript Features

This template demonstrates:
- **Type Safety**: Strong typing for React components
- **Hooks with Types**: Typed `useState`, `useEffect`, etc.
- **Fast Refresh**: Instant updates during development

## Experimentation Tips

- Edit the `App` component in `index.tsx`
- Explore advanced TypeScript features with React
- Use React DevTools and type checking to catch issues early

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bun with TypeScript](https://bun.sh/docs/runtime/typescript)
- [MDN Web Docs](https://developer.mozilla.org/)

Happy experimenting with React and TypeScript! 🚀
