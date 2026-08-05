# Governance — Stellaris Corporate Website

- **Canonical capability:** Stellaris Corporate Website
- **Governed project:** Stellaris Portfolio HQ
- **Stable identifier:** STELLARIS-PORTFOLIO-HQ
- **Authority:** Stellaris Portfolio Operating Baseline — July 24, 2026

## 1. Product boundaries

Canonical portfolio:

1. Stellaris Career — Resume Engine (one project; "Career" and "Resume Engine" are not separate)
2. Stellaris Family Manager
3. CookingPlanIt

Stellaris Corporate is a portfolio-level capability within Stellaris Portfolio HQ, not a separate project. Stellaris Portfolio HQ is a governance layer, not a consumer product, and is never presented as one.

This website is responsible for:

- explaining Stellaris as the parent portfolio
- introducing and routing visitors to the three product projects
- supporting organization, licensing, partnership, and general inquiries
- establishing trust through transparent privacy, security, accessibility, AI-use, and data-practice content

It is explicitly **not** responsible for detailed product requirements, feature catalogs, or implementation evidence. Those remain in the product repositories.

## 2. Evidence-based claim rules

- Planned, discussed, or designed capabilities are never presented as implemented.
- Available, in development, planned, and exploratory capabilities are clearly distinguished.
- No invented customer counts, testimonials, performance claims, security certifications, partnerships, pricing, or availability dates.
- Status language is centralized in `src/lib/stellaris.ts`. Permitted product status labels: `In development`, `Private preview`, `Product program`.
- Current recorded statuses: Stellaris Career — In development; Stellaris Family Manager — In development; CookingPlanIt — Product program (portfolio-level description only; implementation evidence not yet reconciled).
- "Private preview" refers to the state of this corporate website, not automatically to every product.
- Lifecycle states used across Stellaris: IDEA, PROPOSED, APPROVED, SPECIFIED, IN_DEVELOPMENT, CODE_COMPLETE, TESTED, DEPLOYED, VALIDATED, DEPRECATED. Work is never described as built without evidence.

## 3. Private-preview safeguards

These are product requirements, not preferences:

- The project stays private and unpublished until QA and explicit approval.
- No production domain is connected.
- No secrets, credentials, tokens, or environment values are committed.
- No backend, database, or production data dependency is added without explicit authorization.
- No analytics or third-party tracking.
- `public/robots.txt` disallows all crawling; global metadata sets `noindex, nofollow`.
- No sitemap and no canonical URLs are emitted; `/sitemap.xml` returns an explanatory non-production response. SEO signals are restored only after a production domain is approved.
- Contact routing is not active. `CONTACT_ROUTING_ACTIVE = false`; the contact page is a non-submitting prototype with a disabled submit control and **no** `mailto:` links or placeholder addresses.
- Legal pages (Privacy, Terms, Cookies, Accessibility) are labeled drafts pending legal review.
- Mobile, tablet, desktop, accessibility, SEO-readiness, and error-state quality are maintained.

## 4. Documentation discipline

Every material change updates the affected documentation, records material product/architecture/security/privacy/data/brand/naming decisions, keeps acceptance criteria and tests in sync, and preserves rejected ideas and open questions in the backlog rather than deleting them.

## 5. Unresolved launch blockers

1. Real contact routing (addresses, inbox ownership, response process).
2. Legal review and approval of the draft Privacy, Terms, Cookies, and Accessibility pages.
3. CookingPlanIt evidence reconciliation and status confirmation.
4. Production domain assignment and approval.
5. SEO restoration (robots, sitemap, canonical, indexable metadata) after domain approval.
6. Independent accessibility audit.
7. Corporate/legal entity details (registered name, address, jurisdiction) for legal and trust pages.
