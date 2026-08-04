# GeniusGarage

Practice monorepo built as an implementation of Vercel Academy's [Production Monorepos](https://vercel.com/academy/production-monorepos) course. It applies the course's concepts for managing monorepos in production: workspaces with pnpm, task orchestration with Turborepo, package versioning and publishing with Changesets, and shared packages (UI, ESLint/TypeScript config, utilities, database access) consumed by multiple apps.

**Structure:**
- `apps/` — the monorepo's applications (`web`, `docs`, `snippet-manager`)
- `packages/` — shared packages (`ui`, `db`, `utils`, `eslint-config`, `typescript-config`)

**Deployments:**

Live Vercel deployments for each app in this monorepo:
- WEB: main marketing/demo app
    https://geniusgarage-web-phi.vercel.app/
- SNIPPET MANAGER: app for saving and organizing code snippets, backed by the `db` package
    https://geniusgarage-snippet-manager-two.vercel.app/
- DOCS: documentation app
    https://geniusgarage-docs-lac.vercel.app/

## Commands

### TURBOREPO ————————————————————

pnpm turbo run build
pnpm turbo run build —filter=web
pnpm turbo --version
pnpm turbo run build --dry-run

pnpm list --depth 0 -r
npx turbo ls


# run lint and tests:
pnpm run lint
pnpm run test
pnpm --filter @geniusgarage/ui test


# build and run
pnpm dev                            —> run all
pnpm turbo run build         —> build all
 


# Disable remote caching (if needed)
# Disable for single command
pnpm turbo build --no-cache
# Disable permanently (remove config)
rm .turbo/config.json



### VITEST ———————————————————

pnpm --filter @geniusgarage/ui test                              —> run test
pnpm --filter @geniusgarage/ui test -- --coverage      —> run with coverage
pnpm --filter @geniusgarage/ui dev:test                       —> run test watch mode
