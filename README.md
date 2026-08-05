# Stellaris Corporate Website

- **Canonical capability:** Stellaris Corporate Website
- **Governed project:** Stellaris Portfolio HQ
- **Stable identifier:** STELLARIS-PORTFOLIO-HQ
- **Authority:** Stellaris Portfolio Operating Baseline — July 24, 2026

This repository becomes the authoritative source for the Stellaris corporate portfolio website after the reconciliation pull request is merged. It is no longer a deprecated or legacy repository.

## Status

The site remains **private preview**:

- unpublished
- no production domain
- no backend
- no analytics
- no public contact routing

Crawling is disallowed (`robots.txt`) and all pages carry `noindex, nofollow`. Deployment and production-domain changes require explicit approval.

## Canonical portfolio

1. Stellaris Career — Resume Engine
2. Stellaris Family Manager
3. CookingPlanIt

Stellaris Corporate is a portfolio-level capability within Stellaris Portfolio HQ, not a separate project. This website explains Stellaris as the parent portfolio, routes visitors to the product projects, and carries trust, privacy, security, accessibility, and AI-use content. It does not duplicate detailed product requirements or feature catalogs.

## Governance

- [docs/GOVERNANCE.md](docs/GOVERNANCE.md) — authority, evidence rules, product boundaries, private-preview safeguards, launch blockers
- [docs/reconciliation/](docs/reconciliation) — source reconciliation records

## Tech stack

TanStack Start (v1) · React 19 · TypeScript · Vite 7 · Tailwind CSS v4

## Development

```sh
bun install
bun run dev
```

Typecheck:

```sh
bunx tsgo --noEmit
```

## Known gaps

See the launch blockers in [docs/GOVERNANCE.md](docs/GOVERNANCE.md). In short: real contact routing, legal review of draft legal pages, CookingPlanIt evidence/status confirmation, production domain, SEO restoration after domain approval, independent accessibility audit, and corporate/legal entity details.
