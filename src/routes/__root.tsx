import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-ink">
      <div className="container-x flex flex-1 flex-col justify-center py-24">
        <p className="eyebrow">404 — page not found</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">
          That page isn't here.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          The link may be out of date. This site was recently restructured around the
          Stellaris product portfolio, so some older addresses no longer exist.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              { to: "/", label: "Home", body: "What Stellaris is and where to go next" },
              { to: "/products", label: "Products", body: "The three products in the portfolio" },
              {
                to: "/for-organizations",
                label: "For organizations",
                body: "Licensing, partnerships, pilots",
              },
              { to: "/how-we-build", label: "How we build", body: "Our operating principles" },
              { to: "/trust", label: "Trust center", body: "Privacy, security, responsible AI" },
              { to: "/contact", label: "Contact", body: "Reach the right part of Stellaris" },
            ] as const
          ).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:bg-background"
            >
              <span className="font-display text-lg text-ink">{item.label}</span>
              <span className="mt-1 block text-sm text-ink-soft">{item.body}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Stellaris" },
      // Private preview: this site is unpublished and must not be indexed.
      { name: "robots", content: "noindex, nofollow" },
      { name: "googlebot", content: "noindex, nofollow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Stellaris" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
