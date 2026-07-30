# GeniusGarage

## TURBOREPO ————————————————————

pnpm turbo --version

pnpm list --depth 0 -r

npx turbo ls

# run all

pnpm dev

# build all

pnpm turbo run build
pnpm turbo run build —filter=web
pnpm turbo run build --dry-run

## VITEST ———————————————————

# run test

pnpm --filter @geniusgarage/ui test

# run with coverage

pnpm --filter @geniusgarage/ui test -- --coverage
cd packages/ui && pnpm test --coverage

# run test watch mode

pnpm --filter @geniusgarage/ui dev:test

## VsCode ———————————————————————

TypeScript: Restart TS Server
# Test CI
