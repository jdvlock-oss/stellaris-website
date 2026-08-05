import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { PRODUCTS, PORTFOLIO_NAME } from "@/lib/stellaris";

const TITLE = "About Stellaris — a portfolio company";
const DESC =
  "Why Stellaris exists, how the portfolio model works, and why we focus on complex personal workflows rather than novelty.";

export const Route = createFileRoute("/about")({
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
        eyebrow="About"
        title="A company built around the parts of life that software keeps skipping."
        lede="Stellaris exists because the most demanding coordination people do — for their careers, their households, their weeks — is still handled with fragments: threads, notes, screenshots, memory."
      />

      <section className="container-x pb-4">
        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Why Stellaris exists</h2>
          <div className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-ink-soft">
            <p>
              Recent AI systems are good at producing plausible material. That is not what
              these situations need. What they need is a system that organises real
              information faithfully, keeps track of what matters, and helps a person decide
              — without inventing anything to fill a gap.
            </p>
            <p>
              We build for the moments where being wrong is expensive: a career step, a
              child's week, a household's plan. Usefulness in those moments is the whole
              measure.
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">The portfolio model</h2>
          <div className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-ink-soft">
            <p>
              Stellaris is a portfolio company. Each product is developed as its own system
              with its own scope, so it can be built and corrected without destabilising the
              others. What they share is an approach, a design language, and a governance
              standard.
            </p>
            <ul className="space-y-2 text-base">
              {PRODUCTS.map((p) => (
                <li key={p.id} className="flex gap-3">
                  <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${p.accent.dot}`} aria-hidden />
                  <Link
                    to="/products/$productSlug"
                    params={{ productSlug: p.slug }}
                    className="text-ink hover:underline"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Complex personal workflows</h2>
          <div className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-ink-soft">
            <p>
              The workflows we choose have a common shape: information arrives from many
              places, a person has to reconcile it, and the outcome matters. That shape is
              where structure and careful assistance earn their keep.
            </p>
            <p>
              It also sets our limits. We do not build for problems we do not understand
              well enough to be genuinely useful in.
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Utility over novelty</h2>
          <div className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-ink-soft">
            <p>
              A capability ships when it reduces real effort in a real workflow. Being
              first, or being impressive, is not a reason. This is also why our public
              claims stay narrow: we would rather describe less than overstate.
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-b border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Parent company and product teams</h2>
          <div className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-ink-soft">
            <p>
              {PORTFOLIO_NAME} is the governance layer: it holds portfolio requirements,
              decisions, status records, and review practice. It is not a product offered to
              the public.
            </p>
            <p>
              Product teams own their own scope, implementation, and detailed evidence. The
              parent company decides what may be claimed and holds the standard those claims
              are measured against.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl">What this page deliberately omits</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            We are not publishing team details, founding history, location, funding, or
            corporate registration information during private preview. When those details
            are confirmed and approved, they will appear here.
          </p>
          <Link to="/contact" className="btn-primary mt-7">
            Ask us directly
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
