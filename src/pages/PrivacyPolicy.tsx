export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-brand">Informativa</p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Ultimo aggiornamento: luglio 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">1. Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento dei dati personali è Alessandro Pacifici, raggiungibile
            all'indirizzo email <a href="mailto:info@visurerapide.it" className="text-brand hover:underline">info@visurerapide.it</a> e
            al numero WhatsApp +39 379 3511586.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">2. Dati raccolti e finalità</h2>
          <p>
            Attraverso il modulo di richiesta presente sul sito, raccogliamo i seguenti dati
            personali forniti volontariamente dall'utente: nome e cognome, indirizzo email,
            numero di telefono, e le informazioni necessarie all'esecuzione della visura
            richiesta (che possono includere dati anagrafici di terzi soggetti, dati catastali,
            targhe di veicoli o denominazioni societarie).
          </p>
          <p className="mt-3">
            I dati vengono trattati esclusivamente per:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
            <li>Eseguire il servizio di ricerca visure richiesto dall'utente</li>
            <li>Contattare l'utente per comunicare il preventivo e le modalità di consegna</li>
            <li>Gestire il pagamento e la consegna dei documenti</li>
            <li>Adempiere agli obblighi di legge applicabili</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">3. Base giuridica del trattamento</h2>
          <p>
            Il trattamento dei dati personali si basa sull'esecuzione di un contratto o sulla
            richiesta precontrattuale dell'utente (art. 6, par. 1, lett. b del GDPR), ovvero
            sul consenso espresso dell'utente fornito tramite la compilazione e l'invio del
            modulo di richiesta.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">4. Dati di terzi soggetti</h2>
          <p>
            Qualora la richiesta di visura riguardi dati anagrafici, catastali o di altro tipo
            riferiti a soggetti terzi (persone fisiche o giuridiche), l'utente che effettua la
            richiesta dichiara di avere il diritto e il titolo legittimo per richiedere tali
            informazioni e di essere a conoscenza delle normative vigenti in materia di
            consultazione dei pubblici registri.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">5. Modalità di trattamento e conservazione</h2>
          <p>
            I dati sono trattati con strumenti informatici, nel rispetto delle misure di
            sicurezza previste dal GDPR. Non vengono ceduti a terzi per finalità commerciali
            né comunicati a soggetti esterni, salvo i fornitori tecnici strettamente necessari
            all'erogazione del servizio (quali il servizio di invio email EmailJS) e salvo
            eventuali obblighi di legge.
          </p>
          <p className="mt-3">
            I dati vengono conservati per il tempo strettamente necessario all'esecuzione del
            servizio richiesto e, successivamente, per il periodo previsto dagli obblighi
            fiscali e contabili di legge (di norma 10 anni).
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">6. Cookie e strumenti di tracciamento</h2>
          <p>
            Il sito utilizza cookie tecnici necessari al suo corretto funzionamento. Utilizza
            inoltre strumenti di analisi statistica (Google Analytics 4) e di monitoraggio
            pubblicitario (Meta Pixel di Facebook) per misurare le visite e ottimizzare le
            campagne pubblicitarie. Questi strumenti possono raccogliere dati anonimi
            sull'utilizzo del sito. L'utente può accettare o rifiutare tali cookie tramite
            il banner visualizzato al primo accesso al sito.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">7. Diritti dell'interessato</h2>
          <p>
            In qualità di interessato, hai diritto di: accedere ai tuoi dati personali,
            rettificarli, cancellarli ("diritto all'oblio"), limitarne il trattamento, opporti
            al trattamento, richiedere la portabilità dei dati. Per esercitare tali diritti,
            scrivi a{" "}
            <a href="mailto:info@visurerapide.it" className="text-brand hover:underline">
              info@visurerapide.it
            </a>
            . Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione
            dei dati personali (www.garanteprivacy.it).
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">8. Modifiche alla presente informativa</h2>
          <p>
            Il titolare si riserva il diritto di modificare la presente informativa in qualsiasi
            momento. Le modifiche avranno effetto dalla data di pubblicazione sul sito. Si
            consiglia di consultare periodicamente questa pagina.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/40 p-5 text-xs text-muted-foreground/70">
          ⚠️ Questa informativa ha carattere generale e informativo. Per una valutazione
          completa della conformità al GDPR specifica per la tua attività, si consiglia di
          consultare un consulente legale o un Data Protection Officer qualificato.
        </div>
      </div>
    </section>
  );
}
