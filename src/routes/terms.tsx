import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, DraftNotice, LegalSection } from "@/components/site/PageLayout";
import { CONTACT_ROUTING_STATUS } from "@/lib/stellaris";

const TITLE = "Terms (draft) — Stellaris";
const DESC =
  "Draft terms for use of the Stellaris corporate website, prepared for internal review during private preview. Not final or enforceable as written.";

export const Route = createFileRoute("/terms")({
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
      <PageHero eyebrow="Terms — draft" title="Website terms" />
      <section className="container-x max-w-3xl pb-24">
        <DraftNotice page="terms" />

        <LegalSection heading="Scope">
          <p>
            This draft concerns use of this corporate website. Use of any Stellaris product
            would be governed by that product's own terms, which are not covered here.
          </p>
        </LegalSection>

        <LegalSection heading="Informational content">
          <p>
            Content on this site is provided for information during private preview. It
            describes intent and direction, and does not form an offer, a commitment to
            deliver, or a service level of any kind.
          </p>
        </LegalSection>

        <LegalSection heading="Forward-looking statements">
          <p>
            Statements about products in development or planned describe current thinking.
            Scope, timing, and availability may change.
          </p>
        </LegalSection>

        <LegalSection heading="Intellectual property">
          <p>
            Stellaris names, product names, text, and design on this site belong to Stellaris
            unless stated otherwise. Specific licence terms are pending review.
          </p>
        </LegalSection>

        <LegalSection heading="Acceptable use">
          <p>
            Do not attempt to disrupt this site, access it other than as intended, or use it
            to distribute unlawful material.
          </p>
        </LegalSection>

        <LegalSection heading="Liability, governing law, and changes">
          <p>
            Limitation of liability, warranty disclaimers, governing law, dispute resolution,
            and change-notification provisions are pending legal review and are deliberately
            not stated in this draft.
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
