import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import {
  INQUIRY_TYPES,
  CONTACT_ROUTING_ACTIVE,
  CONTACT_ROUTING_STATUS,
  CONTACT_ROUTING_INTERNAL,
} from "@/lib/stellaris";

const TITLE = "Contact Stellaris";
const DESC =
  "How Stellaris intends to route inquiries about product interest, licensing, partnerships, pilots, privacy and trust, and support. Contact routing is not active during private preview.";

export const Route = createFileRoute("/contact")({
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
  const [inquiry, setInquiry] = useState<string>(INQUIRY_TYPES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Inquiry routing, shown before it is switched on."
        lede="This corporate site is in private preview. The form below is a design prototype: it cannot send an inquiry, and Stellaris publishes no public inquiry addresses yet."
      />

      <section className="container-x pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-gold/50 bg-gold/8 p-5">
              <p className="eyebrow">Prototype only — no inquiry can be delivered</p>
              <p className="mt-2 text-sm text-ink-soft">
                {CONTACT_ROUTING_STATUS} Nothing you type here is sent, stored, emailed, or
                queued anywhere, and the submit control stays disabled until routing exists.
              </p>
            </div>

            <form
              className="mt-8 space-y-6"
              aria-describedby="contact-unavailable"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <p id="contact-unavailable" className="text-sm text-ink-soft">
                Fields are shown to illustrate the intended inquiry model. Submission is
                unavailable during private preview.
              </p>

              <fieldset>
                <legend className="eyebrow">Inquiry type</legend>
                <div className="mt-4 flex flex-wrap gap-2" role="group">
                  {INQUIRY_TYPES.map((t) => {
                    const active = inquiry === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setInquiry(t)}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                          active
                            ? "border-ink bg-ink text-primary-foreground"
                            : "border-line text-ink hover:bg-surface"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-sm text-ink-soft">
                  These are the inquiry types Stellaris intends to route once contact
                  channels are established.
                </p>
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-3 w-full rounded-lg border border-line bg-background px-4 py-3 text-ink placeholder:text-ink-soft"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-3 w-full rounded-lg border border-line bg-background px-4 py-3 text-ink placeholder:text-ink-soft"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-3 w-full rounded-lg border border-line bg-background px-4 py-3 text-ink placeholder:text-ink-soft"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={!CONTACT_ROUTING_ACTIVE}
                  aria-describedby="submit-help"
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Submission unavailable
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() =>
                    setNotice(
                      `Nothing was sent. This is a prototype: a “${inquiry}” inquiry cannot be delivered during private preview.`,
                    )
                  }
                >
                  Why can't I send this?
                </button>
              </div>

              <p id="submit-help" className="text-sm text-ink-soft">
                The submit control is disabled on purpose. There is no form handler, no
                inbox, and no stored record behind this page.
              </p>

              <p aria-live="polite" role="status" className="text-sm text-ink-soft">
                {notice}
              </p>
            </form>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="rounded-2xl border border-line bg-surface p-7">
              <h2 className="eyebrow">Intended routing model</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-ink">
                    General, product, licensing, partnership, pilots
                  </dt>
                  <dd className="mt-1 text-ink-soft">
                    Planned as a single portfolio-level intake reviewed by Stellaris
                    Portfolio HQ. No address is published yet.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Privacy or trust</dt>
                  <dd className="mt-1 text-ink-soft">
                    Planned as a separate route so privacy and trust questions are handled
                    distinctly. No address is published yet.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Support routing</dt>
                  <dd className="mt-1 text-ink-soft">
                    Product support is expected to live inside each product experience
                    rather than on this corporate site.
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-xs text-ink-soft">{CONTACT_ROUTING_INTERNAL}</p>
              <p className="mt-4 text-xs text-ink-soft">
                See the{" "}
                <Link to="/trust" className="text-ink underline">
                  trust center
                </Link>{" "}
                for how we handle privacy and claim transparency.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
