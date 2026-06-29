import { Link } from "react-router-dom";
import { VisuraForm } from "@/components/VisuraForm";
import { VISURE_TYPES, SITE } from "@/lib/site";
import { formatEuro } from "@/lib/utils";
import { ArrowRight, Clock, ShieldCheck, Sparkles, FileSearch, Building2, Landmark, Car, HelpCircle } from "lucide-react";
const ICONS = {
  catastale: FileSearch,
  ipotecaria: Landmark,
  camerale: Building2,
  pra: Car,
  varie: HelpCircle,
} as const;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-brand/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/55 via-background/35 to-background" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_oklch(0.20_0.014_240/0.75)_85%)]" />

        <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-brand">
            <span className="h-px w-10 bg-brand/60" />
            Servizi professionali
            <span className="h-px w-10 bg-brand/60" />
          </div>

          <h1 className="mt-8 font-serif text-5xl leading-[1.05] md:text-7xl">
            Visure
            <br />
            <span className="brand-gradient-text italic">Rapide e certificate</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base text-muted-foreground md:text-lg">
            Catasto, Conservatoria, Camera di Commercio e PRA. Compila il form, riceverai
            la tua visura in formato digitale in tempi brevissimi — con la professionalità
            di un servizio dedicato.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#richiedi"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95"
            >
              Richiedi la tua visura <ArrowRight size={16} />
            </a>
            <Link
              to="/tipologie-e-costi"
              className="rounded-full border border-brand/40 px-7 py-3.5 text-sm text-brand transition hover:bg-brand/10"
            >
              Vedi tipologie e costi
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="flex items-center gap-2"><Clock size={14} className="text-brand"/> Evasione in giornata</span>
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand"/> Dati ufficiali</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-brand"/> Assistenza dedicata</span>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">I nostri servizi</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Tutte le visure di cui hai bisogno</h2>
          <p className="mt-4 text-muted-foreground">
            Un unico canale per ottenere visure ufficiali, planimetrie e ispezioni — senza
            doverti registrare a portali tecnici.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VISURE_TYPES.map((v) => {
            const Icon = ICONS[v.slug];
            return (
              <div
                key={v.slug}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition hover:border-brand/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/5 text-brand">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-2xl">{v.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.description}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-brand">
                  {v.priceFrom === null ? "Su richiesta" : `Da ${formatEuro(v.priceFrom)}`}
                </p>
                <div className="hairline mt-5" />
              </div>
            );
          })}
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { n: "01", t: "Compila il form", d: "Inserisci i dati relativi alla visura che desideri ottenere." },
              { n: "02", t: "Ti contattiamo", d: "Confermiamo i dettagli, ti inviamo preventivo e modalità di pagamento." },
              { n: "03", t: "Ricevi la visura", d: "Documento ufficiale via email in formato PDF, in tempi rapidissimi." },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-serif text-5xl text-brand/70">{s.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="richiedi" className="mx-auto max-w-4xl px-6 py-24 scroll-mt-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Richiedi una visura</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Compila il modulo</h2>
          <p className="mt-4 text-muted-foreground">
            Risposta entro poche ore lavorative. Nessun impegno fino all'accettazione del preventivo.
          </p>
        </div>
        <div className="mt-12">
          <VisuraForm />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          Oppure scrivici a
          <a href={`mailto:${SITE.email}`} className="text-brand hover:underline">{SITE.email}</a>
          · chiama
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-brand hover:underline">{SITE.phone}</a>
        </div>
      </section>
    </>
  );
}
