# Stellaris Website Repository

## Status: legacy and not authoritative

This repository is retained for historical reference. It is **not** the current source of truth for the Stellaris corporate website and should not be deployed as production without a formal reconciliation.

The current corporate website experience is maintained in the private Lovable project:

- Project: `Stellaris: Own Your Career Win`
- Lovable project ID: `097995db-dac6-4f02-a73e-7d80eb1282c0`
- Publication state as of 2026-07-23: private preview, not published

The current Career application is maintained separately:

- GitHub: `jdvlock-oss/stellaris-career-craft`
- Lovable project ID: `cc804c96-077f-43d1-83c1-611c16b5c15f`

The Family product is maintained separately:

- GitHub: `jdvlock-oss/stellaris-family-hub`
- Lovable project ID: `41faa27a-2226-4943-9b35-68ecc93c5f49`

## Repository decision

Do not add new corporate-site features here until one of the following is approved:

1. Rebuild this repository from the current Lovable corporate project and make it the authoritative corporate source, or
2. Archive this repository and formally designate another repository or monorepo package as the corporate source.

Until that decision is executed, this repository is classified as `DEPRECATED` for delivery purposes.

## Production safeguards

- Do not connect this repository to the production Stellaris domain.
- Do not assume legacy privacy, terms, contact, analytics, SEO, or deployment files are current.
- Legal text requires counsel review before production use.
- Any future source synchronization must exclude credentials, `.env` values, tokens, private data, and generated build output.

## Historical note

Earlier versions contained static and Next.js launch-site experiments. Those files do not establish the current product architecture or release state.