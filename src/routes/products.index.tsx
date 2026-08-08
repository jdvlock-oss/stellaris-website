import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { PRODUCTS } from "@/lib/stellaris";

const TITLE = "Products — Stellaris portfolio";
const DESC =
  "The Stellaris product portfolio: Stellaris Career — Resume Engine, Stellaris Family Manager, and CookingPlanIt. Portfolio-level overviews with neutral status language.";

export const Route = createFileRoute("/products/")({
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
        eyebrow="Products"
        title="Three products. One way of working."
        lede="Each Stellaris product addresses a different part of everyday life, but they are built the same way: from a real workflow, on information a person has actually provided, with the person deciding what happens next."
      />

      <section className="container-x pb-24">
        <div className="border-t border-line">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="grid gap-8 border-b border-line py-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${p.accent.dot}`} aria-hidden />
                  <span className={`text-[0.7rem] uppercase tracking-[0.14em] ${p.accent.text}`}>
                    {p.domain}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl text-ink md:text-3xl">{p.name}</h2>
                <p className="mt-3 text-ink-soft">{p.tagline}</p>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <div className={`rounded-2xl border p-7 ${p.accent.border} ${p.accent.surface}`}>
                  <p className="text-ink-soft">{p.summary}</p>
                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
                    <div>
                      <dt className="eyebrow">Status</dt>
                      <dd className="mt-1 text-ink">{p.status}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Focus</dt>
                      <dd className="mt-1 text-ink">{p.domain}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/products/$productSlug"
                    params={{ productSlug: p.slug }}
                    className="btn-primary mt-7"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-soft">
          Status labels describe where a product sits in our own development and governance
          records. They are not statements of public availability, and no launch dates,
          pricing, or customer claims are made on this site.
        </p>
      </section>
    </PageLayout>
  );
}
