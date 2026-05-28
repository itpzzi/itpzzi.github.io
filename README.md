# Nuxt Portfolio Boilerplate

Lean Nuxt 3 starter for a personal portfolio.

## Stack and dependencies

### Core runtime
- **Nuxt 3**, **Vue 3**, **TypeScript**
- **@nuxt/content**, **@nuxt/image**
- **@nuxtjs/i18n** (source of truth in `locales/*.json`)
- **@nuxtjs/tailwindcss**, **@nuxtjs/color-mode**
- **Pinia**, **@vueuse/nuxt**
- **vee-validate**, **zod**

### Dev tooling
- **ESLint** + Nuxt/Vue/TypeScript configs
- **Prettier**
- **nuxi typecheck** (project type validation)

## Project patterns

- **Single responsibility per layer**:
  - `components/`: reusable UI components
  - `pages/`: route-level composition
  - `stores/`: shared state
  - `locales/`: i18n message source (pt-BR and en)
  - `content/`: markdown/content-driven pages
- **No duplicated source of truth** for translations, constants, or business rules.
- **Prefer composition API and typed utilities** over implicit behavior.
- **Accessibility first**: semantic HTML, keyboard focus, visible labels, contrast-aware color use.

## Quality gates

Run before opening PRs:

1. `npm run lint`
2. `npm run type-check`
3. `npm run build`

## Testing expectation

- Every new business rule must come with unit tests.
- Bugfixes should include a test that reproduces and prevents regression.
- Keep tests close to the feature/module they validate.

> If test tooling is changed, document scripts and conventions in this README.

## Blog i18n fallback

- Blog posts may exist in only one language.
- Frontmatter supports:
  - `lang`: `en` or `pt-BR` (defaults to `en` when omitted)
  - `translationKey`: groups translated variants of the same article
- Fallback strategy:
  - requested locale
  - English (`en`) as default fallback
  - any available variant as last resort

## GitHub Pages static deploy

- Project is configured for static generation (`npm run build` runs `nuxi generate`).
- For GitHub Pages in Actions, base URL is auto-detected from `GITHUB_REPOSITORY`.
- Optional override: set `NUXT_APP_BASE_URL` (example: `/NuxtPortfolio/`).

## Deployment workflow (itpzzi.github.io)

This repository includes [deploy-pages.yml](.github/workflows/deploy-pages.yml) for automated GitHub Pages deployment.

### Target

- Production host: `https://itpzzi.github.io`
- Deployment model: static artifact upload from `.output/public`

### CI pipeline

On each push to `main` (or manual dispatch), the workflow executes:

1. `npm ci`
2. `npm run lint`
3. `npm run type-check`
4. `npm run build` (static generation)
5. Upload artifact via `actions/upload-pages-artifact`
6. Deploy via `actions/deploy-pages`

### Repository settings

- Pages source: **GitHub Actions**
- Workflow triggers: `main` and `master`

### Base URL behavior

- If deploying from a user/org pages repository (`<owner>.github.io`), base URL resolves to `/`.
- If deploying from a project repository, base URL resolves to `/<repo>/`.
- `NUXT_APP_BASE_URL` can still be used to force a specific base path when needed.

## One-repo operations runbook

Production remote topology:

- `origin`: `https://github.com/itpzzi/itpzzi.github.io.git`

### Publish

Standard publish to production branch model:

```powershell
pwsh ./scripts/publish-pages.ps1
```

Push target: `origin/master`

First replacement publish when remote history is non-fast-forward:

```powershell
pwsh ./scripts/publish-pages.ps1 -Force
```

Optional dual-branch publication:

```powershell
pwsh ./scripts/publish-pages.ps1 -PushToMaster -PushToMain
```

### Verify deployment

- Actions repository: `itpzzi/itpzzi.github.io`
- Workflow: `Deploy Portfolio to GitHub Pages`
- Runtime URL: `https://itpzzi.github.io`
