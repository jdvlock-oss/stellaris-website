# Reconciliation Record — Corporate Website Source

**Date:** 2026-08-05
**Authority:** Stellaris Portfolio Operating Baseline — July 24, 2026
**Governed project:** Stellaris Portfolio HQ (STELLARIS-PORTFOLIO-HQ)

## Identifiers

| Item | Value |
| --- | --- |
| Source Lovable project ID | `097995db-dac6-4f02-a73e-7d80eb1282c0` |
| Final Lovable source commit | `6aef8665136d557ae699effef792a63a43ba0f53` |
| Prior GitHub head (`main`) | `98e3d5a55644974663049f870b1fac6281c41a09` |
| Reconciliation branch | `reconcile/corporate-portfolio-preview` |

The prior GitHub head was verified against `main` before any work began and had not moved.

## What was replaced

The legacy/deprecated repository working tree was replaced in full by the current approved private-preview Lovable source:

- Application source: `src/` (routes, components, hooks, lib, styles, router/server entries, generated `src/routeTree.gen.ts`)
- Information architecture: Home, Products (index + per-product detail), For Organizations, How We Build, About, Trust, Contact, and draft legal pages (Privacy, Terms, Cookies, Accessibility)
- Centralized content model and status language: `src/lib/stellaris.ts`
- Configuration and tooling: `package.json`, `bun.lock`, `vite.config.ts`, `tsconfig.json`, `eslint.config.js`, `components.json`, `bunfig.toml`, `.prettierrc`, `.prettierignore`, `.gitignore`, `.lovable/project.json`, `AGENTS.md`
- Public assets: `public/robots.txt` (disallow all), `public/favicon.ico`
- Documentation: rewritten `README.md`, new `docs/GOVERNANCE.md`, this reconciliation record

The previous README labeling this repository as deprecated/legacy was replaced.

## What was preserved

- Full existing Git history. No force-push, no history rewrite, no branch or repository deletion.
- `main` remains untouched; only the reconciliation branch was pushed.
- Nothing was published or deployed; no domain was connected.

## What was excluded from the commit

Secrets, environment values, credentials and tokens, `node_modules`, build output (`dist`, `.output`, `.vinxi`, `.tanstack`, `.nitro`, `.wrangler`), local caches, temporary browser screenshots, logs, and generated runtime artifacts.

## QA evidence

- TypeScript: clean (`tsgo --noEmit`, 0 errors) on the reconciled source prior to commit.
- Route checks across mobile (390x844), tablet (768x1024), and desktop (1440x1000): all current routes render and respond 200.
- No horizontal overflow at any of the three viewports.
- Obsolete routes (`/solutions`, `/how-it-works`, `/principles`) return 404 through the root not-found component.
- Contact form is a non-submitting prototype: submit control uses disabled-state semantics, status is announced via `role="status"` / `aria-live`.
- No `mailto:` links and no placeholder email addresses anywhere in the source.
- Global `noindex, nofollow` metadata; `robots.txt` disallows all crawling; no sitemap or canonical URLs emitted.
- Project remains unpublished, with no backend, analytics, or production data dependency.

### Limitations

- QA evidence above was produced against the Lovable preview runtime for the reconciled source; it was not re-executed inside CI on the GitHub branch.
- Accessibility verification was manual (keyboard traversal, focus visibility, skip link, mobile menu). No independent third-party audit has been performed.
- No production build artifact was published or deployed as part of this reconciliation.

## Unresolved launch blockers

1. Real contact routing (addresses, inbox ownership, response process).
2. Legal review and approval of the draft legal pages.
3. CookingPlanIt evidence reconciliation and status confirmation.
4. Production domain assignment and approval.
5. SEO restoration after domain approval.
6. Independent accessibility audit.
7. Corporate/legal entity details for legal and trust pages.
