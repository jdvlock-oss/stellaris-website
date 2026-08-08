import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero, DraftNotice, LegalSection } from "@/components/site/PageLayout";
import { CONTACT_ROUTING_STATUS } from "@/lib/stellaris";

const TITLE = "Accessibility (draft) — Stellaris";
const DESC =
  "Draft accessibility statement for the Stellaris corporate website, prepared for internal review during private preview. No audited conformance is claimed.";

export const Route = createFileRoute("/accessibility")({
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
      <PageHero eyebrow="Accessibility — draft" title="Accessibility statement" />
      <section className="container-x max-w-3xl pb-24">
        <DraftNotice page="accessibility" />

        <LegalSection heading="Our target">
          <p>
            We aim to meet WCAG 2.2 AA as a working standard for this site and for Stellaris
            products. We treat accessibility defects as defects, not as enhancements.
          </p>
        </LegalSection>

        <LegalSection heading="What this site does today">
          <p>
            The site is built with semantic headings and landmarks, a skip link to main
            content, keyboard-operable navigation with visible focus indicators, text
            contrast intended to meet AA, layouts that reflow to mobile and tablet widths,
            and respect for the reduced-motion system preference.
          </p>
        </LegalSection>

        <LegalSection heading="Known limitations">
          <p>
            Conformance has not been independently audited or verified with assistive
            technology testing across platforms. Until that work is complete we make no
            conformance claim. A formal evaluation is an open item before public launch.
          </p>
        </LegalSection>

        <LegalSection heading="Feedback">
          <p>
            If something on this site is difficult or impossible to use, we want to know.
            {" "}{CONTACT_ROUTING_STATUS} The inquiry model is outlined on the{" "}
            <Link to="/contact" className="text-ink underline">
              contact page
            </Link>
            . Describe the page and what happened, and we will follow up.
          </p>
        </LegalSection>
      </section>
    </PageLayout>
  );
}
