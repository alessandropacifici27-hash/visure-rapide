import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import { SITE } from "@/lib/site";
import logoIcon from "@/assets/badge_circolare.png";

/* ── SVG SOCIAL ── */
const WhatsAppSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const TelegramSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const InstagramSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const FacebookSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const TikTokSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp}`, Icon: WhatsAppSvg, comingSoon: false },
  { label: "Telegram", href: `https://t.me/+${SITE.telegram}`, Icon: TelegramSvg, comingSoon: false },
  { label: "Instagram", href: "#", Icon: InstagramSvg, comingSoon: true },
  { label: "Facebook", href: "#", Icon: FacebookSvg, comingSoon: true },
  { label: "TikTok", href: "#", Icon: TikTokSvg, comingSoon: true },
] as const;

/* ── METODI DI PAGAMENTO ── */
const PAYMENT_METHODS = [
  { label: "Visa" },
  { label: "Mastercard" },
  { label: "American Express" },
  { label: "PayPal" },
  { label: "Apple Pay" },
  { label: "Google Pay" },
  { label: "Klarna" },
];

const NAV = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/tipologie-e-costi", label: "Tipologie e Costi" },
  { to: "/contatti", label: "Contatti" },
] as const;

/* ── SCROLL TO TOP AD OGNI CAMBIO PAGINA ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoIcon} alt="VisureRapide" className="h-10 w-10 rounded-full" />
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
                {active && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-brand" />}
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
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">

        {/* COLONNA 1 — Brand + social */}
        <div>
          <p className="font-serif text-2xl">
            <span className="brand-gradient-text">Visure</span>Rapide
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {SITE.tagline}. Servizio professionale per privati e aziende.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.comingSoon ? "#" : s.href}
                target={s.comingSoon ? undefined : "_blank"}
                rel={s.comingSoon ? undefined : "noreferrer"}
                title={s.comingSoon ? `${s.label} — profilo in allestimento` : s.label}
                onClick={s.comingSoon ? (e) => e.preventDefault() : undefined}
                aria-label={s.label}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/40 text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand ${
                  s.comingSoon ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* COLONNA 2 — Servizi */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-brand">Servizi</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Visure catastali</li>
            <li>Ispezioni ipotecarie</li>
            <li>Visure camerali</li>
            <li>Visure PRA</li>
          </ul>
        </div>

        {/* COLONNA 3 — Contatti */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-brand">Contatti</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-brand">{SITE.phone}</a></li>
            <li><a href={`tel:${SITE.phoneLandline.replace(/\s/g, "")}`} className="hover:text-brand">{SITE.phoneLandline}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-brand">{SITE.email}</a></li>
            <li>{SITE.hours}</li>
          </ul>
        </div>

        {/* COLONNA 4 — Scrivici + pagamenti */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-brand">Scrivici subito</p>
          <div className="flex flex-col items-start gap-2">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition hover:border-brand hover:text-brand"
            >
              <WhatsAppSvg />
              WhatsApp
            </a>
            <a
              href={`https://t.me/+${SITE.telegram}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition hover:border-brand hover:text-brand"
            >
              <TelegramSvg />
              Telegram
            </a>
          </div>

          {/* PAGAMENTI */}
          <p className="mb-3 mt-6 text-xs uppercase tracking-[0.18em] text-brand">Pagamenti accettati</p>
          <div className="flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((m) => (
              <div
                key={m.label}
                title={m.label}
                aria-label={m.label}
                className={`flex items-center justify-center rounded-md border border-white/15 px-2.5 py-1.5 ${
                  m.label === "Visa" || m.label === "PayPal" ? "bg-white/90" : "bg-white/5"
                }`}
              >
                {m.label === "Visa" && (
                  <span className="font-bold italic text-[#1A1F71] text-[11px] tracking-wider">VISA</span>
                )}
                {m.label === "Mastercard" && (
                  <span className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-[#EB001B] opacity-90" />
                    <span className="h-4 w-4 rounded-full bg-[#F79E1B] opacity-90 -ml-2" />
                  </span>
                )}
                {m.label === "American Express" && (
                  <span className="font-bold text-[10px] text-[#2E77BC] tracking-tight">AMEX</span>
                )}
                {m.label === "PayPal" && (
                  <span className="font-bold text-[11px]">
                    <span className="text-[#003087]">Pay</span>
                    <span className="text-[#009cde]">Pal</span>
                  </span>
                )}
                {m.label === "Apple Pay" && (
                  <span className="font-semibold text-[11px] text-white/80 tracking-tight">Apple Pay</span>
                )}
                {m.label === "Google Pay" && (
                  <span className="font-semibold text-[11px] tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                    <span className="text-white/80 ml-0.5">Pay</span>
                  </span>
                )}
                {m.label === "Klarna" && (
                  <span className="font-bold text-[11px] tracking-tight" style={{color:"#FFB3C7", backgroundColor:"#17120E", padding:"1px 3px", borderRadius:"3px"}}>
                    klarna
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.domain} — Tutti i diritti riservati
        {" · "}
        <Link to="/privacy-policy" className="hover:text-brand transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
