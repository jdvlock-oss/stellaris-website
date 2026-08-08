import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { BUILD_PRINCIPLES, PORTFOLIO_NAME } from "@/lib/stellaris";

const TITLE = "How We Build — Stellaris operating principles";
const DESC =
  "The operating principles behind the Stellaris portfolio: start with the real workflow, preserve truth and user control, separate verified from planned, and design for privacy.";

export const Route = createFileRoute("/how-we-build")({
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

function Page() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="How we build"
        title="Six principles we apply to every product."
        lede="These are constraints, not slogans. They decide what we build, what we refuse to claim, and when a capability is allowed to be described as real."
      />

      <section className="container-x pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BUILD_PRINCIPLES.map((p) => (
            <article key={p.n} className="flex flex-col rounded-2xl border border-line bg-surface p-7">
              <span className="font-display text-3xl text-ink-soft">{p.n}</span>
              <h2 className="mt-4 font-display text-xl text-ink">{p.title}</h2>
              <p className="mt-2 text-ink-soft">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="eyebrow">Verified vs planned</h2>
            <p className="mt-4 text-3xl md:text-4xl">A claim has to trace back to something.</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-line">
              {[
                ["Verified", "Built, tested, and recorded as working. Only this may be described as available."],
                ["In development", "Actively being built. Scope may change; nothing is promised."],
                ["Planned", "Decided in direction, not yet built."],
                ["Exploratory", "Under consideration. May never ship."],
              ].map(([label, body]) => (
                <li key={label} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8">
                  <span className="w-40 shrink-0 font-medium text-ink">{label}</span>
                  <span className="text-ink-soft">{body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="eyebrow">Governance</h2>
            <p className="mt-4 text-3xl md:text-4xl">{PORTFOLIO_NAME}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-ink-soft">
              {PORTFOLIO_NAME} is the governance layer of the company, not a product people
              buy. It holds the portfolio's requirements, decisions, status records, and
              review practices, and it is where a capability is confirmed before anyone is
              allowed to describe it publicly.
            </p>
            <p className="mt-4 text-lg text-ink-soft">
              Each product team keeps its own detailed implementation evidence. The
              portfolio layer keeps the record of what has been decided and what has been
              demonstrated.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/trust" className="btn-ghost">
                Trust center
              </Link>
              <Link to="/products" className="btn-ghost">
                See the products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
