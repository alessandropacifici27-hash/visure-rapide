import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { FileText, Landmark, Building2, Car, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const SEZIONI = [
  { id: "catastale", label: "Catastale" },
  { id: "ipotecaria", label: "Ipotecaria" },
  { id: "camerale", label: "Camerale" },
  { id: "pra", label: "PRA" },
];

export default function GuidaVisure() {
  useEffect(() => {
    document.title = "Guida alle Visure: catastali, ipotecarie, camerali e PRA | VisureRapide";
  }, []);

  return (
    <>
      <section className="border-b border-border/40 bg-card/20">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Guida alle Visure</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">
            Cosa sono e a cosa <span className="brand-gradient-text italic">servono</span>
          </h1>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Una guida chiara, senza tecnicismi inutili, per capire quale visura ti serve
            davvero e cosa contiene ciascun documento prima di richiederlo.
          </p>
        </div>
      </section>

      <nav className="border-b border-border/40 bg-background/60 sticky top-16 z-40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-6 py-4">
          {SEZIONI.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground transition hover:border-brand/50 hover:text-brand"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="catastale" className="mx-auto max-w-4xl px-6 py-20 scroll-mt-32">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-brand" />
          <h2 className="font-serif text-3xl md:text-4xl">Visure Catastali</h2>
        </div>
        <p className="mt-4 text-muted-foreground">
          Tutti i documenti di questa sezione arrivano dal Catasto, l'archivio pubblico
          che censisce fabbricati e terreni in Italia, oggi gestito dall'Agenzia delle
          Entrate. Sono quattro documenti diversi, spesso confusi tra loro: ognuno
          risponde a una domanda diversa.
        </p>

        <div className="mt-10 space-y-8">
          <article className="rounded-2xl border border-border bg-card/50 p-8">
            <h3 className="font-serif text-2xl text-brand">Visura catastale</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              È il documento che raccoglie i dati identificativi e fiscali di un immobile
              — oppure di tutti gli immobili intestati a una persona. Riporta chi ne è il
              proprietario, dove si trova (foglio, particella, subalterno), la categoria
              catastale, la classe e la rendita: il valore che lo Stato usa come base per
              calcolare imposte come l'IMU. Serve prima di comprare o vendere casa, per
              una successione, per un mutuo, o per verificare di essere in regola con la
              propria posizione catastale. È un documento fiscale e informativo: non dice
              nulla su eventuali ipoteche o pignoramenti — per quello serve la visura
              ipotecaria, più sotto.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card/50 p-8">
            <h3 className="font-serif text-2xl text-brand">Planimetria catastale</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              È il disegno tecnico, di solito in scala 1:200, di una singola unità
              immobiliare: un appartamento, un negozio, un box. Mostra la disposizione
              interna dei vani e la destinazione di ogni stanza, così come risulta
              depositata al Catasto. È il documento di riferimento prima di una
              ristrutturazione e per verificare la conformità catastale prima di un
              rogito notarile. Non riporta in modo esplicito i metri quadrati: se
              servono, vanno calcolati dal disegno.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card/50 p-8">
            <h3 className="font-serif text-2xl text-brand">Estratto di mappa</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Al contrario della planimetria, che riguarda l'interno di un immobile,
              l'estratto di mappa (o mappa catastale) rappresenta un terreno o un
              fabbricato visto dall'alto: confini, particelle adiacenti, strade e corsi
              d'acqua vicini. Serve per interventi edilizi come nuove costruzioni o
              ampliamenti, per verifiche urbanistiche, e per stabilire con precisione i
              confini di un terreno.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card/50 p-8">
            <h3 className="font-serif text-2xl text-brand">Elaborato planimetrico</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              È il documento meno conosciuto dei quattro, ma spesso il più utile in
              condominio: rappresenta graficamente un intero fabbricato, mostrando come
              si suddivide in tutte le sue unità immobiliari — appartamenti, negozi,
              cantine, box — più le parti comuni come scale, cortili e androni. Si usa
              soprattutto per frazionamenti, accorpamenti di unità immobiliari o per
              chiarire la ripartizione di un edificio nella sua interezza.
            </p>
          </article>
        </div>

        <Link
          to="/#richiedi"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
        >
          Richiedi una visura catastale <ArrowRight size={14} />
        </Link>
      </section>

      <section id="ipotecaria" className="border-t border-border/40 bg-card/10">
        <div className="mx-auto max-w-4xl px-6 py-20 scroll-mt-32">
          <div className="flex items-center gap-3">
            <Landmark className="h-6 w-6 text-brand" />
            <h2 className="font-serif text-3xl md:text-4xl">Visura / Ispezione Ipotecaria</h2>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A differenza delle visure catastali, che hanno finalità fiscale, l'ispezione
            ipotecaria (chiamata anche visura ipotecaria o ipocatastale) è un documento
            con valore probatorio: attesta con valore legale chi è realmente il
            proprietario di un immobile e se esistono pesi o vincoli su di esso. Si
            ottiene consultando i registri tenuti dagli Uffici di Pubblicità Immobiliare
            dell'Agenzia delle Entrate — quella che fino a qualche anno fa si chiamava
            Conservatoria dei Registri Immobiliari.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Dalla visura ipotecaria emergono ipoteche, pignoramenti, sequestri e
            l'intera sequenza dei passaggi di proprietà nel tempo. Si può cercare per
            soggetto o per immobile. È il controllo da fare sempre prima di acquistare
            una casa, per essere certi che il venditore ne sia davvero il proprietario e
            che non ci siano ipoteche o pignoramenti nascosti; serve anche a chi deve
            valutare la solidità patrimoniale di un'azienda o di una persona, o in
            ambito giudiziario.
          </p>
          <Link
            to="/#richiedi"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
          >
            Richiedi un'ispezione ipotecaria <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section id="camerale" className="mx-auto max-w-4xl px-6 py-20 scroll-mt-32">
        <div className="flex items-center gap-3">
          <Building2 className="h-6 w-6 text-brand" />
          <h2 className="font-serif text-3xl md:text-4xl">Visura Camerale</h2>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          È la carta d'identità di un'impresa italiana — società o ditta individuale —
          estratta dal Registro delle Imprese tenuto dalle Camere di Commercio. Riporta
          la sede legale, la forma giuridica, il codice fiscale e la partita IVA,
          l'attività effettivamente svolta (il codice ATECO), il capitale sociale e chi
          sono amministratori e soci, con le rispettive quote.
        </p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Esistono due versioni principali. La visura ordinaria fotografa la situazione
          attuale dell'azienda. La visura storica aggiunge tutta la cronologia dei
          cambiamenti dalla costituzione a oggi — utile in caso di fusioni, acquisizioni
          o cambi di proprietà. Si richiede prima di affidarsi a un fornitore, un
          cliente o un partner commerciale, per partecipare a bandi pubblici, per
          pratiche bancarie o per qualunque verifica sull'affidabilità di un'azienda.
        </p>
        <Link
          to="/#richiedi"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
        >
          Richiedi una visura camerale <ArrowRight size={14} />
        </Link>
      </section>

      <section id="pra" className="border-t border-border/40 bg-card/10">
        <div className="mx-auto max-w-4xl px-6 py-20 scroll-mt-32">
          <div className="flex items-center gap-3">
            <Car className="h-6 w-6 text-brand" />
            <h2 className="font-serif text-3xl md:text-4xl">Visura Veicoli PRA</h2>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            È l'anagrafica ufficiale di un veicolo, rilasciata dal Pubblico Registro
            Automobilistico (PRA), gestito dall'ACI. Vale per auto, moto, camion e
            rimorchi immatricolati in Italia. Riporta chi è l'attuale proprietario, i
            dati tecnici del mezzo e eventuali vincoli come fermi amministrativi,
            ipoteche sul veicolo o pignoramenti.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Si può richiedere per targa, per un veicolo specifico, oppure per soggetto,
            per sapere quali veicoli sono o sono stati intestati a una persona o
            azienda. Il caso d'uso più comune è l'acquisto di un'auto usata da un
            privato: la visura PRA è l'unico modo per essere certi che chi vende sia
            davvero il proprietario e che non ci siano fermi o ipoteche che
            impedirebbero il passaggio di proprietà. Utile anche dopo un incidente, o
            per verifiche patrimoniali.
          </p>
          <Link
            to="/#richiedi"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-2 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
          >
            Richiedi una visura PRA <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-card/30 p-8 text-center">
          <h3 className="font-serif text-2xl">Non sai ancora di quale visura hai bisogno?</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Scrivici su WhatsApp spiegando cosa ti serve: ti diciamo noi qual è il
            documento giusto, senza impegno.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full border border-brand/50 px-6 py-2.5 text-xs uppercase tracking-[0.16em] text-brand transition hover:bg-brand hover:text-primary-foreground"
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
