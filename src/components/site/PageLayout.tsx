import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-ink">
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pt-16 pb-12 md:pt-24 md:pb-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] md:text-6xl">
        {title}
      </h1>
      {lede && <p className="mt-6 max-w-2xl text-lg text-ink-soft">{lede}</p>}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

export function DraftNotice({ page }: { page: string }) {
  return (
    <div className="rounded-2xl border border-gold/50 bg-gold/8 p-6">
      <p className="eyebrow">Draft — requires legal review</p>
      <p className="mt-3 text-sm text-ink-soft">
        This {page} page is structured draft content prepared for internal review during
        private preview. It is not legal advice, not a final policy, and not enforceable
        as written. It must be reviewed and approved before any public launch.
      </p>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line py-8">
      <h2 className="font-display text-2xl text-ink">{heading}</h2>
      <div className="mt-3 space-y-3 text-ink-soft">{children}</div>
    </section>
  );
}
