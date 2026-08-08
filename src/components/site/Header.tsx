import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { NAV } from "@/lib/stellaris";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/85 backdrop-blur">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Stellaris home">
          <span className="inline-block h-2.5 w-2.5 rotate-45 bg-ink" aria-hidden />
          <span className="font-display text-xl tracking-tight text-ink">Stellaris</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-sm text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/products" className="btn-primary">
            Explore products
          </Link>
        </div>

        <button
          type="button"
          className="btn-ghost lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-line lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-3" aria-label="Primary mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-1 py-2.5 text-sm text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
