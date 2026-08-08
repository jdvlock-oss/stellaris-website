import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, DraftNotice, LegalSection } from "@/components/site/PageLayout";
import { CONTACT_ROUTING_STATUS } from "@/lib/stellaris";

const TITLE = "Cookies (draft) — Stellaris";
const DESC =
  "Draft cookie and local storage notice for the Stellaris corporate website, prepared for internal review during private preview.";

export const Route = createFileRoute("/cookies")({
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
      <PageHero eyebrow="Cookies — draft" title="Cookies and local storage" />
      <section className="container-x max-w-3xl pb-24">
        <DraftNotice page="cookies" />

        <LegalSection heading="Current position">
          <p>
            This website is built to run without analytics, advertising, or profiling
            cookies. During private preview we do not set cookies for measurement or
            marketing purposes, and there is no consent banner because there is nothing to
            consent to.
          </p>
        </LegalSection>

        <LegalSection heading="Third-party requests">
          <p>
            Web fonts are requested from a third-party font service. Those requests are
            handled by that provider under its own terms. Removing this dependency by
            self-hosting fonts is an open item for review before public launch.
          </p>
        </LegalSection>

        <LegalSection heading="If this changes">
          <p>
            If we later introduce any non-essential cookie or similar technology, this page
            will be updated and appropriate consent will be requested before it is used.
          </p>
        </LegalSection>

        <LegalSection heading="Product experiences">
          <p>
            Stellaris products are separate applications and will publish their own cookie
            and storage notices.
          </p>
        </LegalSection>

        <LegalSection heading="Contact">
          <p>
{CONTACT_ROUTING_STATUS}
          </p>
        </LegalSection>
      </section>
    </PageLayout>
  );
}
