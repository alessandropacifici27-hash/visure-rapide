import { createFileRoute, Link } from "@tanstack/react-router";
import { VISURE_TYPES } from "@/lib/site";
import { Check } from "lucide-react";

export const Route = createFileRoute("/tipologie-e-costi")({
  head: () => ({
    meta: [
      { title: "Tipologie di Visure e Costi — Visure Rapide" },
      { name: "description", content: "Tutte le visure disponibili: catastali, ipotecarie, camerali e PRA. Listino trasparente con prezzi a partire da pochi euro." },
      { property: "og:title", content: "Tipologie di Visure e Costi — Visure Rapide" },
      { property: "og:description", content: "Listino trasparente per visure catastali, ipotecarie, camerali e PRA." },
      { property: "og:url", content: "/tipologie-e-costi" },
    ],
    links: [{ rel: "canonical", href: "/tipologie-e-costi" }],
  }),
  component: Tipologie,
});

function Tipologie() {
  return (
    <>
      <section className="border-b border-border/40 bg-card/20">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Tipologie e Costi</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">
            Listino <span className="brand-gradient-text italic">trasparente</span>
          </h1>
          <p className="mt-6 text-muted-foreground md:text-lg">
            I prezzi indicati sono base e comprendono diritti, bolli e nostro onorario per
            la maggior parte delle richieste standard. Per visure complesse o ricerche
            articolate ti forniremo un preventivo dettagliato prima di procedere.
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
                  <p className="font-serif text-4xl text-brand">€ {v.priceFrom}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{v.description}</p>

              <ul className="mt-6 space-y-2">
                {v.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/"
                hash="richiedi"
                className="mt-7 inline-block rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
              >
                Richiedi questa visura
              </Link>
            </article>
          ))}
        </div>

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
