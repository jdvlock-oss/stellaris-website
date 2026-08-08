import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero, DraftNotice, LegalSection } from "@/components/site/PageLayout";
import { CONTACT_ROUTING_STATUS } from "@/lib/stellaris";

const TITLE = "Privacy (draft) — Stellaris";
const DESC =
  "Draft privacy notice for the Stellaris corporate website, prepared for internal review during private preview. Not a final policy.";

export const Route = createFileRoute("/privacy")({
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
      <PageHero eyebrow="Privacy — draft" title="Privacy notice" />
      <section className="container-x max-w-3xl pb-24">
        <DraftNotice page="privacy" />

        <LegalSection heading="Scope">
          <p>
            This draft covers the Stellaris corporate website only. Each Stellaris product
            has its own data practices, which will be published with that product.
          </p>
        </LegalSection>

        <LegalSection heading="Information this website collects">
          <p>
            This website is designed to operate without accounts, analytics, advertising
            trackers, or third-party profiling. The contact form is a front-end preview: it
            does not transmit or store what you type.
          </p>
          <p>
            Standard technical request information may be processed by our hosting provider
            in order to serve pages. Web fonts are requested from a third-party font service,
            which will receive the request information needed to deliver them.
          </p>
        </LegalSection>

        <LegalSection heading="How information would be used">
          <p>
            If you email us, we would use your message and contact details only to respond to
            your inquiry and to keep a record of the conversation.
          </p>
        </LegalSection>

        <LegalSection heading="Sharing">
          <p>
            We do not sell personal information. This draft does not describe any current
            data sharing arrangement with a third party beyond the hosting and font services
            required to serve this site.
          </p>
        </LegalSection>

        <LegalSection heading="Retention and your choices">
          <p>
            Retention periods, data subject request handling, and jurisdiction-specific
            rights are pending legal review and are intentionally not stated here. Contact us
            with any request in the meantime.
          </p>
        </LegalSection>

        <LegalSection heading="Contact">
          <p>
            {CONTACT_ROUTING_STATUS} See also our{" "}
            <Link to="/trust" className="text-ink underline">
              trust center
            </Link>
            .
          </p>
        </LegalSection>
      </section>
    </PageLayout>
  );
}
