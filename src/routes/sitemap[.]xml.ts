import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * Private preview: no sitemap is published.
 *
 * The site is unpublished, has no production origin, and robots.txt disallows
 * crawling. Emitting relative <loc> values (or a guessed production domain)
 * would be an invalid, dishonest production signal, so this route responds with
 * an explanatory 404 instead. Restore a real sitemap when a production domain
 * is authorized.
 */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const body = [
          "No sitemap is published for this site.",
          "",
          "Stellaris corporate website — private preview.",
          "The site is unpublished, crawling is disallowed in robots.txt, and no",
          "production domain has been authorized, so there is no canonical origin",
          "from which to generate valid sitemap URLs.",
        ].join("\n");

        return new Response(body, {
          status: 404,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "X-Robots-Tag": "noindex, nofollow",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
