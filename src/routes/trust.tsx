import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { CONTACT_ROUTING_STATUS, PORTFOLIO_NAME } from "@/lib/stellaris";

const TITLE = "Trust Center — Stellaris";
const DESC =
  "How Stellaris approaches privacy, security, responsible AI and human control, data practices, product claim transparency, and accessibility across the portfolio.";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Page,
});

const SECTIONS = [
  {
    id: "privacy",
    heading: "Privacy approach",
    body: [
      "Stellaris products are designed to collect the information a workflow actually needs, and to treat a person's record as belonging to them.",
      "Our operating principles require that personal records stay separated between products by default. Where sharing between products would be useful, it is intended to be an explicit choice a person makes, not a default.",
    ],
  },
  {
    id: "security",
    heading: "Security approach",
    body: [
      "We aim to build on managed platform services with access restricted to what a function requires, and to keep credentials out of application code.",
      "Security review is part of our development practice rather than a launch checklist. We do not claim independent audit, penetration testing results, or certification.",
    ],
  },
  {
    id: "responsible-ai",
    heading: "Responsible AI and human control",
    body: [
      "AI in a Stellaris product proposes; the person decides. Drafts, summaries, and recommendations are intended to be reviewable, editable, and refusable.",
      "Our principles require that systems work from information a person has provided or confirmed. We design against fabricating experience, history, or detail in order to fill a gap.",
      "Where a system is uncertain, the intended behaviour is to say so rather than to present a confident answer.",
    ],
  },
  {
    id: "data",
    heading: "Data practices",
    body: [
      "Our operating principles require a stated purpose for any personal data a product holds, and a path for a person to correct or remove their own record.",
      "This corporate website is designed to run without analytics, advertising trackers, or third-party profiling. Fonts are loaded from a third-party font service; see the cookies draft for detail.",
      "Detailed, product-specific data practices belong in each product's own policies and will be published with those products.",
    ],
  },
  {
    id: "claims",
    heading: "Product claim transparency",
    body: [
      `${PORTFOLIO_NAME} distinguishes verified capabilities from in-development, planned, and exploratory work, and only verified capabilities may be described as available.`,
      "This site publishes no customer counts, testimonials, performance figures, partnerships, pricing, launch dates, or compliance certifications, because none have been established and approved for publication.",
      "If you find a statement on this site that reads as a stronger claim than the evidence supports, tell us and we will correct it.",
    ],
  },
  {
    id: "accessibility",
    heading: "Accessibility commitment",
    body: [
      "We aim to meet WCAG 2.2 AA as a working target across this site and our products: semantic structure, keyboard operability, visible focus, readable contrast, and respect for reduced-motion preferences.",
      "We do not claim conformance has been independently audited. Accessibility issues are treated as defects, and we want to hear about them.",
    ],
  },
];

function Page() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Trust center"
        title="What we commit to, stated no more strongly than we can support."
        lede="This page describes the approach and operating principles behind the Stellaris portfolio during private preview. Where a control is not independently verified, we say “designed to” or “we aim to” and mean it."
      />

      <section className="container-x pb-8">
        <nav aria-label="On this page" className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="eyebrow">On this page</h2>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-ink hover:underline">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="container-x pb-8">
        {SECTIONS.map((s) => (
          <div key={s.id} id={s.id} className="grid gap-8 border-t border-line py-12 md:grid-cols-12">
            <h2 className="font-display text-2xl text-ink md:col-span-4">{s.heading}</h2>
            <div className="md:col-span-7 md:col-start-6 space-y-4 text-ink-soft">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl">Privacy or trust questions</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            {CONTACT_ROUTING_STATUS} The contact page shows the inquiry types we intend to
            route, including “Privacy or trust.”
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Contact Stellaris
            </Link>
            <Link to="/how-we-build" className="btn-ghost">
              How we build
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Our Privacy, Terms, Cookies, and Accessibility pages are drafts under review and
            are not final policies.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
