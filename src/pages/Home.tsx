import { Link } from "react-router-dom";
import { VisuraForm } from "@/components/VisuraForm";
import { VISURE_TYPES, SITE } from "@/lib/site";
import { formatEuro } from "@/lib/utils";
import {
  ArrowRight, Clock, ShieldCheck, Sparkles,
  FileSearch, Building2, Landmark, Car, HelpCircle,
  Zap, Lock, MessageSquare, FileText,
} from "lucide-react";

const ICONS = {
  catastale: FileSearch,
  ipotecaria: Landmark,
  camerale: Building2,
  pra: Car,
  varie: HelpCircle,
} as const;

const EMOJI_PILLS = [
  { emoji: "⚡", testo: "Risposta in 20 min" },
  { emoji: "📄", testo: "Documenti ufficiali" },
  { emoji: "🔒", testo: "Pagamento sicuro" },
  { emoji: "💬", testo: "Supporto WhatsApp" },
];

const HOW_STEPS = [
  {
    Icon: FileText,
    emoji: "📝",
    titolo: "Compila il form",
    desc: "Indica il tipo di visura e i dati necessari. Bastano pochi campi.",
  },
  {
    Icon: Zap,
    emoji: "⚡",
    titolo: "Elaboriamo la richiesta",
    desc: "Accediamo ai registri ufficiali e prepariamo il documento in 20 minuti.",
  },
  {
    Icon: Lock,
    emoji: "🔒",
    titolo: "Paghi e ricevi",
    desc: "Ricevi il link di pagamento, paghi in sicurezza, e il documento arriva via email o WhatsApp.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-brand/10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.80_0.13_65/0.08),transparent)]" />

        <div className="mx-auto flex min-h-[92dvh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-brand">
            <Sparkles size={11} />
            Servizio professionale certificato
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl md:text-7xl">
            Visure
            <br />
            <span className="brand-gradient-text italic">Rapide e certificate</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Catasto, Conservatoria, Camera di Commercio e PRA.{" "}
            <span className="text-foreground/80">Compila il form</span>, ricevi la visura entro 20 minuti — al prezzo ufficiale.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href="#richiedi"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90 active:scale-95"
            >
              Richiedi la tua visura <ArrowRight size={15} />
            </a>
            <Link
              to="/tipologie-e-costi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/40 px-7 py-3.5 text-sm text-brand transition hover:bg-brand/10 active:scale-95"
            >
              Vedi prezzi
            </Link>
          </div>

          {/* PILL BADGES */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {EMOJI_PILLS.map((p) => (
              <div
                key={p.testo}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
              >
                <span className="text-sm leading-none">{p.emoji}</span>
                <span className="text-[11px] font-medium text-muted-foreground">{p.testo}</span>
              </div>
            ))}
          </div>

          {/* TRUST BAR */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
            <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand" /> Evasione in giornata</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-brand" /> Dati ufficiali</span>
            <span className="flex items-center gap-1.5"><MessageSquare size={12} className="text-brand" /> Assistenza dedicata</span>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="border-y border-border/30 bg-card/20 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-center text-xs uppercase tracking-[0.28em] text-brand">Come funziona</p>
          <div className="grid gap-6 md:grid-cols-3">
            {HOW_STEPS.map((s, i) => (
              <div
                key={s.titolo}
                className="relative rounded-2xl border border-border/60 bg-gradient-to-b from-card to-card/40 p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 font-serif text-sm font-bold text-brand">
                    {i + 1}
                  </span>
                  <span className="text-2xl">{s.emoji}</span>
                </div>
                <h3 className="font-serif text-xl">{s.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">I nostri servizi</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">Tutte le visure di cui hai bisogno</h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Un unico canale per ottenere visure ufficiali — senza portali tecnici, senza registrazioni.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {VISURE_TYPES.map((v) => {
            const Icon = ICONS[v.slug];
            return (
              <a
                key={v.slug}
                href="#richiedi"
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card/80 to-card/40 p-6 transition-all hover:border-brand/50 hover:shadow-[0_0_30px_oklch(0.78_0.13_65/0.08)] active:scale-[0.98] md:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/5 text-brand transition-colors group-hover:bg-brand/10">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl">{v.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm line-clamp-3">{v.description}</p>
                <div className="hairline mt-4 mb-3" />
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
                  {v.priceFrom === null ? "Su richiesta" : `Da ${formatEuro(v.priceFrom)}`}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* FORM */}
      <section id="richiedi" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Richiedi una visura</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">Compila il modulo</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Risposta entro 20 minuti. Nessun impegno fino all'accettazione del preventivo.
          </p>
        </div>
        <div className="mt-10">
          <VisuraForm />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-1.5 text-sm text-muted-foreground">
          <span>Oppure scrivici a</span>
          <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">{SITE.email}</a>
          <span>· chiama</span>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-brand hover:underline">{SITE.phone}</a>
        </div>
      </section>
    </>
  );
}
