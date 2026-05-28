# NuxtPortfolio Agent Instructions

## Objective
Keep this boilerplate production-ready, consistent, and recruiter-friendly for Brazilian market expectations.

## Architecture and source-of-truth rules
- Use `locales/*.json` as the only translation source of truth.
- Do not duplicate i18n messages in `nuxt.config.ts`, components, or extra config files.
- Keep route composition in `pages/`, reusable UI in `components/`, state in `stores/`, and content in `content/`.
- Prefer extending existing patterns instead of creating parallel ones.

## Coding standards
- Use TypeScript-first APIs and avoid `any`.
- Keep components small and focused; extract reusable logic to composables/helpers.
- Follow existing naming patterns and folder organization.
- Keep code and copy bilingual-friendly (`pt-BR`, `en`) whenever user-facing.

## Required quality checks
Before considering a task complete, always run:
1. `npm run lint`
2. `npm run type-check`
3. `npm run build`

## Unit test policy (mandatory)
- Every new behavior or business rule must include unit tests.
- Every bugfix must include a regression test.
- Tests should validate real behavior, not implementation details.
- Do not merge feature work without test coverage for changed logic.

## Best practices expected by Brazilian companies
- Ensure accessibility basics (semantic tags, keyboard usage, readable labels).
- Preserve performance (avoid unnecessary client payloads and heavy runtime work).
- Keep clear documentation and maintainable structure.
- Protect privacy and security by default (no hardcoded secrets, no sensitive data exposure, LGPD-aware decisions).
- Prioritize code clarity, maintainability, and predictable delivery over shortcuts.
