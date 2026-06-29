import { Link } from "react-router-dom";
import { VISURE_TYPES } from "@/lib/site";
import { formatEuro } from "@/lib/utils";
import { Check } from "lucide-react";

export default function TipologieCosti() {
  return (
    <>
      <section className="border-b border-border/40 bg-card/20">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Tipologie e Costi</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">
            Listino <span className="brand-gradient-text italic">trasparente</span>
          </h1>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Tariffe minime ufficiali per ogni tipologia, così come stabilite dall'ente
            competente. Il preventivo finale, comprensivo del nostro servizio, verrà
            comunicato dopo la verifica della richiesta.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {VISURE_TYPES.map((v) => (
            <article
              key={v.slug}
              className="relative rounded-2xl border border-border bg-card/50 p-8 transition hover:border-brand/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand">{v.short}</p>
                  <h2 className="mt-2 font-serif text-3xl">{v.label}</h2>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Da</p>
                  <p className="font-serif text-4xl text-brand">{formatEuro(v.priceFrom)}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{v.description}</p>

              <p className="mt-3 text-xs text-muted-foreground">
                Tariffa minima stabilita da: {v.enteCompetente}
              </p>

              <ul className="mt-6 space-y-2">
                {v.items.map((i) => (
                  <li key={i.name} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                    <span>
                      {i.name} — {formatEuro(i.price)}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/#richiedi"
                className="mt-7 inline-block rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
              >
                Richiedi questa visura
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-xs text-muted-foreground/80 leading-relaxed">
          I prezzi indicati sono le tariffe minime ufficiali stabilite dall'ente competente per
          ciascuna tipologia di visura (Agenzia delle Entrate, Camera di Commercio o ACI).
          Il preventivo finale verrà comunicato dopo la verifica della richiesta.
        </p>

        <div className="mt-16 rounded-2xl border border-border bg-card/30 p-8 text-center">
          <h3 className="font-serif text-2xl">Hai una richiesta particolare?</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Per visure cumulative, ricerche storiche o pacchetti professionali contattaci:
            preparemo un'offerta su misura.
          </p>
        </div>
      </section>
    </>
  );
}
