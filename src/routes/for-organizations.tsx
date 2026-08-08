import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";

const TITLE = "For Organizations — Stellaris";
const DESC =
  "Exploratory conversations about licensing, embedded workflows, partnerships, and pilots across the Stellaris portfolio. No published pricing or commercial programs.";

export const Route = createFileRoute("/for-organizations")({
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

const BENEFIT = [
  {
    title: "Institutions supporting career transitions",
    body: "Universities, training providers, and workforce programs where people need help representing their experience truthfully.",
  },
  {
    title: "Employers and people teams",
    body: "Organizations interested in structured, evidence-based preparation rather than volume application tooling.",
  },
  {
    title: "Family, care, and household services",
    body: "Services whose members carry heavy coordination load across schedules, care, and logistics.",
  },
  {
    title: "Platforms with adjacent everyday workflows",
    body: "Products where planning, scheduling, or household organisation sits next to what they already do.",
  },
];

const MODELS = [
  {
    n: "01",
    title: "Licensing",
    body: "Making a Stellaris capability available under an organization's own program, with clear boundaries on data and claims.",
  },
  {
    n: "02",
    title: "Embedded workflows",
    body: "Placing a Stellaris workflow inside an existing product or service journey rather than sending people elsewhere.",
  },
  {
    n: "03",
    title: "Partnerships",
    body: "Working jointly where an organization brings domain depth and Stellaris brings the workflow system.",
  },
  {
    n: "04",
    title: "Pilots",
    body: "A bounded, time-limited engagement designed to test whether the workflow genuinely helps a defined group.",
  },
];

const EVALUATION = [
  "Whether the workflow we would support is one we understand well enough to be useful in.",
  "Whether the people involved keep meaningful control over their own information.",
  "What data would be involved, and whether the arrangement can be kept narrow and separated.",
  "Whether the claims either side would need to make can be supported by evidence.",
  "Whether the product maturity honestly matches the commitment being discussed.",
  "Accessibility and support expectations for the people who would use it.",
];

function Page() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="For organizations"
        title="Conversations, not a commercial catalogue."
        lede="This corporate site is in private preview. We are open to exploratory discussions about licensing, embedded workflows, partnerships, and pilots — described here as possibilities, not as programs already running."
      >
        <Link to="/contact" className="btn-primary">
          Start a conversation
        </Link>
      </PageHero>

      <section className="border-y border-line bg-surface">
        <div className="container-x py-20">
          <h2 className="eyebrow">Who may benefit</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {BENEFIT.map((b) => (
              <div key={b.title} className="rounded-2xl border border-line bg-background p-6">
                <h3 className="font-display text-xl text-ink">{b.title}</h3>
                <p className="mt-2 text-ink-soft">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <h2 className="eyebrow">Types of collaboration</h2>
        <ol className="mt-8 divide-y divide-line">
          {MODELS.map((m) => (
            <li key={m.n} className="grid grid-cols-[auto_1fr] gap-6 py-7">
              <span className="font-display text-2xl text-ink-soft">{m.n}</span>
              <div>
                <h3 className="font-medium text-ink">{m.title}</h3>
                <p className="mt-1 text-ink-soft">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-ink-soft">
          These models describe how we would think about an engagement. Stellaris does not
          publish pricing, and makes no claim about existing clients, contracts, or
          deployments.
        </p>
      </section>

      <section className="border-t border-line">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="eyebrow">What we would evaluate first</h2>
            <p className="mt-4 text-3xl md:text-4xl">
              We would rather decline than overstate readiness.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-4 text-lg text-ink-soft">
              {EVALUATION.map((e) => (
                <li key={e} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-10">
              Contact Stellaris
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
