# GeniusGarage

## TURBOREPO ————————————————————

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



## VITEST ———————————————————

pnpm --filter @geniusgarage/ui test                              —> run test
pnpm --filter @geniusgarage/ui test -- --coverage      —> run with coverage
pnpm --filter @geniusgarage/ui dev:test                       —> run test watch mode
