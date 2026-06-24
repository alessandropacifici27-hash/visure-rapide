import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/tipologie-e-costi", label: "Tipologie e Costi" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <SiteFooter />
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-semibold tracking-tight">
            <span className="brand-gradient-text">Visure</span>
            <span className="text-foreground">Rapide</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-brand" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="/#richiedi"
          className="hidden rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground md:inline-block"
        >
          Richiedi visura
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.14em] text-muted-foreground hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#richiedi"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-brand/50 px-5 py-3 text-center text-xs uppercase tracking-[0.16em] text-brand"
            >
              Richiedi visura
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl">
            <span className="brand-gradient-text">Visure</span>Rapide
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {SITE.tagline}. Servizio professionale per privati e aziende.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-brand">Servizi</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Visure catastali</li>
            <li>Ispezioni ipotecarie</li>
            <li>Visure camerali</li>
            <li>Visure PRA</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-brand">Contatti</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneLandline.replace(/\s/g, "")}`} className="hover:text-brand">
                {SITE.phoneLandline}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brand">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-brand">Scrivici subito</p>
          <div className="flex flex-col gap-2">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-brand hover:text-brand"
            >
              WhatsApp
            </a>
            <a
              href={`https://t.me/+${SITE.telegram}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-brand hover:text-brand"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.domain} — Tutti i diritti riservati
      </div>
    </footer>
  );
}
