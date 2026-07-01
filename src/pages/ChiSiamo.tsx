import { Link } from "react-router-dom";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";

const VALORI = [
  { Icon: Zap, emoji: "⚡", t: "Rapidità", d: "Evasione entro 20 minuti dalla maggior parte delle richieste." },
  { Icon: ShieldCheck, emoji: "🔒", t: "Affidabilità", d: "Documenti ufficiali estratti direttamente dai registri pubblici." },
  { Icon: Users, emoji: "💬", t: "Assistenza", d: "Un riferimento umano e diretto in ogni fase della richiesta." },
  { Icon: Award, emoji: "🏅", t: "Esperienza", d: "Anni di pratica con visure di ogni tipologia e complessità." },
];

export default function ChiSiamo() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border/30 bg-gradient-to-b from-card/30 to-background px-5 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Chi Siamo</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Un servizio costruito{" "}
            <span className="brand-gradient-text italic">su misura</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            VisureRapide nasce per offrire a privati, professionisti e aziende un canale
            diretto, professionale e trasparente per ottenere visure ufficiali da Catasto,
            Conservatoria, Camere di Commercio e PRA.
          </p>
        </div>
      </section>

      {/* MISSIONE */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-7">
            <p className="mb-2 text-2xl">🎯</p>
            <h2 className="font-serif text-2xl md:text-3xl">La nostra missione</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Eliminare la complessità burocratica. I portali ufficiali sono spesso
              poco intuitivi, richiedono registrazioni, certificati digitali e conoscenze
              tecniche che non tutti hanno. Noi ti mettiamo a disposizione un canale
              unico, semplice e affidabile: <strong className="text-foreground/90">compili il form, pensiamo a tutto noi</strong>.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-7">
            <p className="mb-2 text-2xl">👥</p>
            <h2 className="font-serif text-2xl md:text-3xl">A chi ci rivolgiamo</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Privati cittadini, agenti immobiliari, geometri, architetti, avvocati,
              commercialisti, periti, imprese. Chiunque abbia bisogno di{" "}
              <strong className="text-foreground/90">dati ufficiali senza perdere tempo prezioso</strong>{" "}
              a navigare tra portali tecnici.
            </p>
          </div>
        </div>

        {/* VALORI */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {VALORI.map(({ Icon, emoji, t, d }) => (
            <div
              key={t}
              className="rounded-2xl border border-border/60 bg-gradient-to-b from-card/80 to-card/30 p-6 transition hover:border-brand/40"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xl">{emoji}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/30 bg-brand/5 text-brand">
                  <Icon size={18} />
                </div>
              </div>
              <h3 className="font-serif text-lg">{t}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/30 bg-card/20 px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-2xl">🚀</p>
          <h2 className="mt-3 font-serif text-2xl md:text-4xl">Pronto per la tua prima visura?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Compila il modulo online oppure scrivici via WhatsApp. Risposta in pochi minuti.
          </p>
          <Link
            to="/#richiedi"
            className="mt-7 inline-block rounded-full bg-[image:var(--gradient-brand)] px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90 active:scale-95"
          >
            Vai al modulo →
          </Link>
        </div>
      </section>
    </>
  );
}
