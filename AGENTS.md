# AGENTS.md

## Workflow

- Use `master` as the default branch.
- Merge pull requests with squash merge only.
- Commit with `git commit -S`.
- Use Conventional Commits: `<type>[optional scope]: <description>`.
- Add a commit body when the subject cannot explain the why, tradeoff, or verification clearly.

## Commands

- `pnpm install --frozen-lockfile`
- `pnpm format`
- `pnpm lint`
- `pnpm check`
- `pnpm build`

## Scope

- Keep `.phile` content plain text; do not reintroduce Markdown rendering except supported images.
- Keep theme behavior configurable under `src/config/`.
- Keep textmode implementation grouped by feature under `src/modules/textmode/`.
- Do not commit generated build output such as `dist/`, `.astro/`, or `node_modules/`.
