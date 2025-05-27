dev:
	exec pnpm dev

preview:
	pnpm exec vite preview

build:
	pnpm build

check:
	pnpm exec biome check --write .

compile: check
	pnpm exec tsc
