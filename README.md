# idevify-demo

Minimal React + Vite template with HMR and basic ESLint setup.

[Optionally add badges here: build, node version, license]

## Overview

This repository demonstrates a lightweight React setup using Vite. It includes hot module replacement (HMR) for fast development feedback and a starter ESLint configuration.

Two official Vite React plugins are commonly used:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) — uses Babel for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) — uses SWC for faster builds and refresh.

Choose the plugin that matches your priorities (compatibility vs. build speed).

## Prerequisites

- Node.js 18+ (or the project's required Node version)
- npm, yarn, or pnpm

## Quick start

1. Clone the repo
   ```bash
   git clone https://github.com/are-eb/idevify-demo.git
   cd idevify-demo
   ```

2. Install dependencies (pick one)
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Run the dev server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Open http://localhost:5173 (or the URL printed by Vite).

## Available scripts

Add these to `package.json` if not already present:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write ."
  }
}
```

- `dev` — start the dev server with HMR
- `build` — produce a production build
- `preview` — locally preview the built site
- `lint` — run ESLint
- `format` — run Prettier (if used)

## ESLint / Formatting

This template includes a minimal ESLint setup. Consider adding or documenting:
- An ESLint config file (`.eslintrc.cjs` / `.eslintrc.json`)
- Prettier integration for consistent formatting
- A pre-commit hook with Husky and lint-staged to run lint/format on staged files

## Choosing a React plugin

- Use `@vitejs/plugin-react` if you rely on Babel plugins or transform behavior that SWC doesn't yet support.
- Use `@vitejs/plugin-react-swc` if you want faster compilation time and are okay with SWC's compatibility.

Installation example (Babel plugin):
```bash
npm install -D @vitejs/plugin-react
```
Then in `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```

Installation example (SWC plugin):
```bash
npm install -D @vitejs/plugin-react-swc
```
Then in `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()]
})
```

## Troubleshooting

- If HMR isn't working: check console for plugin errors and ensure the plugin is added to `vite.config.js`.
- If you see build differences across environments: lock Node version and dependency lockfile (package-lock.json / yarn.lock / pnpm-lock.yaml).

## Contributing

Contributions welcome. Please:
- Open an issue to discuss larger changes
- Follow the repo's linting/formatting rules
- Provide a PR with descriptive title and changes

## License

Add a LICENSE file (e.g., MIT) and reference it here.

## Links

- Vite: https://vitejs.dev/
- React: https://reactjs.org/
- @vitejs/plugin-react: https://github.com/vitejs/vite-plugin-react
- @vitejs/plugin-react-swc: https://github.com/vitejs/vite-plugin-react-swc
