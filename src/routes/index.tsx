import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PRODUCTS, APPROACH, PORTFOLIO_NAME } from "@/lib/stellaris";

const TITLE = "Stellaris — Intelligent systems for everyday decisions";
const DESC =
  "Stellaris builds practical AI platforms for career development, family coordination, and everyday planning. One portfolio, three distinct products, governed for truthfulness and privacy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Stellaris",
          description: DESC,
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="container-x pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Stellaris — a portfolio company</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.06] md:text-6xl lg:text-[4.25rem]">
              Intelligent systems for the work and decisions that shape everyday life.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Stellaris builds practical AI platforms for career development, family
              coordination, and everyday planning. Three products, related in approach and
              distinct in purpose — each designed around a workflow people already carry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">
                Explore products
              </Link>
              <Link to="/for-organizations" className="btn-ghost">
                For organizations
              </Link>
            </div>
            <p className="mt-10 flex items-start gap-3 text-xs text-ink-soft">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              <span>
                This corporate site is in private preview. Product status is stated per
                product, and planned work is never presented as delivered.
              </span>
            </p>
          </div>

          {/* Portfolio representation — stacked editorial index, not a card grid */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-surface">
              <div className="border-b border-line px-6 py-4">
                <p className="eyebrow">The portfolio</p>
              </div>
              <ul>
                {PRODUCTS.map((p, i) => (
                  <li key={p.id} className={i > 0 ? "border-t border-line" : undefined}>
                    <Link
                      to="/products/$productSlug"
                      params={{ productSlug: p.slug }}
                      className="group block px-6 py-5 transition-colors hover:bg-background"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${p.accent.dot}`} aria-hidden />
                        <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
                          {p.domain}
                        </span>
                      </div>
                      <div className="mt-2 font-display text-xl text-ink group-hover:underline">
                        {p.shortName}
                      </div>
                      <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
                      <p className="mt-3 text-xs text-ink-soft">{p.status}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problems addressed */}
      <section className="border-y border-line bg-surface">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What we work on</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Complex, high-consequence parts of ordinary life.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-ink-soft">
              Some of the hardest coordination people do has no software behind it worth
              the name: preparing for a career step, running a household week, keeping a
              family fed through a busy month. The work is fragmented, repetitive, and
              costly to get wrong.
            </p>
            <p className="mt-4 text-lg text-ink-soft">
              Stellaris builds systems for exactly those situations — where the value comes
              from organising real information faithfully, not from producing something
              impressive.
            </p>
          </div>
        </div>
      </section>

      {/* Shared approach */}
      <section className="container-x py-20">
        <p className="eyebrow">The shared Stellaris approach</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
          Useful, truthful, private by design, built around real workflows.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {APPROACH.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line p-6">
              <h3 className="font-display text-xl text-ink">{a.title}</h3>
              <p className="mt-2 text-ink-soft">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/how-we-build" className="btn-ghost">
            How we build
          </Link>
        </div>
      </section>

      {/* Product entry points */}
      <section className="border-t border-line">
        <div className="container-x py-20">
          <p className="eyebrow">Product entry points</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Start where your interest is.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className={`flex flex-col rounded-2xl border p-7 ${p.accent.border} ${p.accent.surface}`}
              >
                <p className={`text-[0.7rem] uppercase tracking-[0.14em] ${p.accent.text}`}>
                  {p.domain}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink">{p.shortName}</h3>
                <p className="mt-3 flex-1 text-sm text-ink-soft">{p.summary}</p>
                <p className="mt-5 text-xs text-ink-soft">Status: {p.status}</p>
                <Link
                  to="/products/$productSlug"
                  params={{ productSlug: p.slug }}
                  className="mt-4 text-sm font-medium text-ink hover:underline"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations + Trust */}
      <section className="container-x pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-8">
            <p className="eyebrow">For organizations</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              Licensing, embedded workflows, and pilots.
            </h2>
            <p className="mt-3 text-ink-soft">
              We are open to conversations with organizations that support people through
              career, household, or planning workflows. These are exploratory discussions,
              not published commercial programs.
            </p>
            <Link to="/for-organizations" className="btn-ghost mt-6">
              Engagement models
            </Link>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <p className="eyebrow">Trust</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              How we handle truth, privacy, and control.
            </h2>
            <p className="mt-3 text-ink-soft">
              Our trust center sets out the privacy and security approach, our responsible
              AI position, and how we separate verified capabilities from planned ones
              across the portfolio.
            </p>
            <Link to="/trust" className="btn-ghost mt-6">
              Visit the trust center
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-ink px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl">
            Have a question about the portfolio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Product interest, licensing, partnerships, pilots, or privacy — {PORTFOLIO_NAME}{" "}
            routes inquiries to the right place.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Contact Stellaris →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
