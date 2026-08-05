import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { getProduct, PRODUCTS, type Product } from "@/lib/stellaris";

export const Route = createFileRoute("/products/$productSlug")({
  loader: ({ params }) => {
    const product = getProduct(params.productSlug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — Stellaris" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.product.name} — Stellaris`;
    const desc = loaderData.product.summary;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: Page,
});

function ProductNotFound() {
  return (
    <PageLayout>
      <div className="container-x py-24">
        <h1 className="font-display text-3xl">We couldn't find that product</h1>
        <p className="mt-3 text-ink-soft">
          It may have been renamed. The full portfolio is on the products page.
        </p>
        <Link to="/products" className="btn-primary mt-6">
          View all products
        </Link>
      </div>
    </PageLayout>
  );
}

function Page() {
  const { product } = Route.useLoaderData() as { product: Product };
  const others = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <PageLayout>
      <section className="container-x pt-16 pb-12 md:pt-24">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <span aria-hidden> / </span>
          <span className="text-ink">{product.shortName}</span>
        </nav>

        <div className="mt-8 flex items-center gap-2.5">
          <span className={`h-1.5 w-1.5 rounded-full ${product.accent.dot}`} aria-hidden />
          <span className={`text-[0.7rem] uppercase tracking-[0.14em] ${product.accent.text}`}>
            {product.domain}
          </span>
        </div>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] md:text-6xl">
          {product.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">{product.tagline}</p>
        <p className="mt-4 text-sm text-ink-soft">Status: {product.status}</p>
      </section>

      <section className="container-x pb-4">
        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">The problem</h2>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-ink-soft">{product.problem}</p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Purpose</h2>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg text-ink-soft">{product.purpose}</p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Capability themes</h2>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-line">
              {product.themes.map((t) => (
                <li key={t.title} className="py-5 first:pt-0">
                  <h3 className="font-medium text-ink">{t.title}</h3>
                  <p className="mt-1 text-ink-soft">{t.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Capability themes describe design intent at portfolio level. They are not a
              list of released features.
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Who it is for</h2>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-3 text-lg text-ink-soft">
              {product.audience.map((a) => (
                <li key={a} className="flex gap-3">
                  <span
                    className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${product.accent.dot}`}
                    aria-hidden
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-10 border-t border-line py-12 md:grid-cols-12">
          <h2 className="eyebrow md:col-span-4">Product status</h2>
          <div className="md:col-span-7 md:col-start-6">
            <div className={`rounded-2xl border p-7 ${product.accent.border} ${product.accent.surface}`}>
              <p className="text-ink-soft">{product.statusNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl">Follow progress or get in touch</h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            We can share more about direction and timing directly. Select “Product interest”
            on the contact page and tell us which product you're asking about.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Contact Stellaris
            </Link>
            <Link to="/trust" className="btn-ghost">
              Trust center
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <h2 className="eyebrow">Elsewhere in the portfolio</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.id}
              to="/products/$productSlug"
              params={{ productSlug: p.slug }}
              className="rounded-2xl border border-line p-6 transition-colors hover:bg-surface"
            >
              <span className={`text-[0.7rem] uppercase tracking-[0.14em] ${p.accent.text}`}>
                {p.domain}
              </span>
              <h3 className="mt-2 font-display text-xl text-ink">{p.shortName}</h3>
              <p className="mt-2 text-sm text-ink-soft">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
