# TypeScript MCP Server Template

A modern TypeScript MCP server template featuring:

- ⚡️ [fastmcp](https://github.com/punkpeye/fastmcp) - Fast MCP server framework
- 🛡️ [zod](https://github.com/colinhacks/zod) - Type-safe schema validation
- 📦 [tsup](https://github.com/egoist/tsup) - Zero-config TypeScript bundler
- ✨ [@antfu/eslint-config](https://github.com/antfu/eslint-config) - Opinionated ESLint config

## Quick Start

Prerequisites:
- Node.js 18+
- pnpm 8+

1. Install dependencies: `pnpm install`
2. Develop with live reload: `pnpm run dev` (uses tsup watch mode)
3. Build for production: `pnpm run build` (tsup production bundle)
4. Lint your code: `pnpm run lint` (ESLint with @antfu/eslint-config)
