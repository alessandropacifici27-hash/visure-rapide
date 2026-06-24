import { Link } from "react-router-dom";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";

export default function ChiSiamo() {
  return (
    <>
      <section className="border-b border-border/40 bg-card/20">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Chi Siamo</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">
            Un servizio costruito <span className="brand-gradient-text italic">su misura</span>
          </h1>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Visure Rapide nasce per offrire a privati, professionisti e aziende un canale
            diretto, professionale e trasparente per ottenere visure ufficiali da Catasto,
            Conservatoria, Camere di Commercio e PRA.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">La nostra missione</h2>
            <p className="mt-4 text-muted-foreground">
              Eliminare la complessità burocratica. I portali ufficiali sono spesso
              poco intuitivi, richiedono registrazioni, certificati digitali e conoscenze
              tecniche. Noi ti mettiamo a disposizione un canale unico, semplice e affidabile.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl">A chi ci rivolgiamo</h2>
            <p className="mt-4 text-muted-foreground">
              Privati cittadini, agenti immobiliari, geometri, architetti, avvocati,
              commercialisti, periti, imprese: chiunque abbia bisogno di dati ufficiali
              senza perdere tempo prezioso.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-4">
          {[
            { Icon: Zap, t: "Rapidità", d: "Evasione in giornata sulla maggior parte delle richieste." },
            { Icon: ShieldCheck, t: "Affidabilità", d: "Documenti ufficiali estratti dai registri pubblici." },
            { Icon: Users, t: "Assistenza", d: "Un riferimento umano e diretto in ogni fase." },
            { Icon: Award, t: "Esperienza", d: "Anni di pratica con visure di ogni complessità." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card/50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-brand/30 bg-brand/5 text-brand">
                <Icon size={20} />
              </div>
              <h3 className="font-serif text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/20">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Hai una richiesta da farci?</h2>
          <p className="mt-4 text-muted-foreground">
            Compila il modulo online oppure scrivici via WhatsApp. Ti risponderemo
            in tempi rapidissimi con preventivo dettagliato.
          </p>
          <Link
            to="/#richiedi"
            className="mt-8 inline-block rounded-full bg-[image:var(--gradient-brand)] px-7 py-3 text-sm text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            Vai al modulo
          </Link>
        </div>
      </section>
    </>
  );
}
