import { Link } from "@tanstack/react-router";
import { PRODUCTS, NAV, LEGAL_NAV, PORTFOLIO_NAME, CONTACT_ROUTING_SHORT } from "@/lib/stellaris";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rotate-45 bg-ink" aria-hidden />
            <span className="font-display text-xl text-ink">Stellaris</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">
            A portfolio of practical AI systems for the work and decisions that shape
            everyday life. Governed as one portfolio under {PORTFOLIO_NAME}.
          </p>
          <p className="mt-4 text-xs text-ink-soft">
            Private preview. Content on this site is under review and may change.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow">Products</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <Link
                  to="/products/$productSlug"
                  params={{ productSlug: p.slug }}
                  className="text-ink hover:underline"
                >
                  {p.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="eyebrow">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {LEGAL_NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Stellaris</span>
        <span>
          Legal pages are drafts pending review. {CONTACT_ROUTING_SHORT}
        </span>
      </div>
    </footer>
  );
}
