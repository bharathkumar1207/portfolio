# Portfolio

React + TypeScript + Vite + Tailwind CSS.

## Skill usage

This project has three skills installed in `.claude/skills/`. For every prompt involving UI, components, or web design, check whether one applies before writing code — don't default to generic output when a skill fits.

- **frontend-design** — invoke when creating or reshaping any visual UI: new pages, sections, landing content, layout, typography, or color choices. Use it to make deliberate, distinctive design decisions instead of templated defaults (no generic purple gradients, no Inter/Roboto-by-default, no predictable card grids).
- **vercel-react-best-practices** — invoke when writing, reviewing, or refactoring React components: data fetching, state, re-renders, bundle size, or any `.jsx`/`.tsx` change. Apply its performance rules by default, not just when asked to optimize.
- **web-design-guidelines** — invoke when asked to review, audit, or check UI code (accessibility, UX, best-practices compliance), or proactively after finishing a UI feature before calling it done.

Rule of thumb: building new UI → **frontend-design** first for the design decisions, then **vercel-react-best-practices** for how it's implemented, then **web-design-guidelines** to audit the result before finishing.
