import { useEffect } from "react";

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy | VisureRapide";
  }, []);

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.28em] text-brand">Informativa</p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">Cookie Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Ultimo aggiornamento: luglio 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">1. Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati inviano al browser
            dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti
            alla visita successiva. Vengono utilizzati per diverse finalità e possono essere
            installati sia dal titolare del sito che si sta visitando, sia da terze parti.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">2. Tipologie di cookie utilizzati</h2>

          <h3 className="mb-2 mt-5 font-serif text-lg text-foreground">2.1 Cookie tecnici (necessari)</h3>
          <p>
            Sono cookie indispensabili per il corretto funzionamento del sito. Includono cookie
            di navigazione, di sessione e di funzionalità. Non richiedono il consenso
            dell'utente ai sensi dell'art. 122, comma 1, del Codice Privacy.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="text-foreground">Cookie di sessione</strong>: consentono la
              navigazione e l'utilizzo del sito. Scadono alla chiusura del browser.
            </li>
            <li>
              <strong className="text-foreground">Cookie di preferenza</strong>: memorizzano le
              scelte dell'utente (es. consenso cookie). Durata: 12 mesi.
            </li>
          </ul>

          <h3 className="mb-2 mt-5 font-serif text-lg text-foreground">2.2 Cookie analitici e di misurazione</h3>
          <p>
            Utilizziamo Google Analytics 4 per raccogliere informazioni statistiche aggregate
            sull'utilizzo del sito. Questi cookie sono installati solo previo consenso
            dell'utente.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="text-foreground">_ga</strong>: utilizzato per distinguere gli
              utenti. Durata: 2 anni.
            </li>
            <li>
              <strong className="text-foreground">_ga_*</strong>: utilizzato per mantenere lo
              stato della sessione. Durata: 2 anni.
            </li>
          </ul>

          <h3 className="mb-2 mt-5 font-serif text-lg text-foreground">2.3 Cookie di profilazione pubblicitaria</h3>
          <p>
            Utilizziamo il Meta Pixel di Facebook per misurare l'efficacia delle campagne
            pubblicitarie e mostrare annunci pertinenti su Facebook e Instagram. Anche questi
            cookie sono installati solo previo consenso dell'utente.
          </p>

          <h3 className="mb-2 mt-5 font-serif text-lg text-foreground">2.4 Cookie di terze parti</h3>
          <p>
            Il sito può contenere collegamenti a servizi di terze parti (WhatsApp, Telegram,
            Trustpilot, social media) che potrebbero installare i propri cookie. VisureRapide
            non ha alcun controllo sui cookie installati da terze parti.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">3. Gestione del consenso</h2>
          <p>Al primo accesso al sito, l'utente visualizza un banner informativo che permette di:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li><strong className="text-foreground">Accettare</strong> tutti i cookie.</li>
            <li>
              <strong className="text-foreground">Rifiutare</strong> i cookie non necessari
              (verranno installati solo i cookie tecnici).
            </li>
          </ul>
          <p className="mt-3">
            Il consenso può essere revocato in qualsiasi momento cancellando i cookie dal
            proprio browser.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">4. Come disabilitare i cookie</h2>
          <p>
            L'utente può gestire le preferenze relative ai cookie anche attraverso le
            impostazioni del proprio browser. Di seguito i link alle istruzioni dei principali
            browser:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-brand hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noreferrer" className="text-brand hover:underline">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-brand hover:underline">
                Apple Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className="text-brand hover:underline">
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p className="mt-3">
            La disabilitazione dei cookie tecnici potrebbe compromettere il corretto
            funzionamento del sito.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">5. Riferimenti normativi</h2>
          <p>La presente Cookie Policy è redatta in conformità a:</p>
          <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
            <li>Regolamento UE 2016/679 (GDPR).</li>
            <li>D.Lgs. 196/2003 (Codice Privacy), come modificato dal D.Lgs. 101/2018.</li>
            <li>
              Linee Guida del Garante Privacy in materia di cookie e altri strumenti di
              tracciamento (10 giugno 2021).
            </li>
            <li>Direttiva 2002/58/CE (Direttiva ePrivacy).</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-xl text-foreground">6. Contatti</h2>
          <p>
            Per qualsiasi domanda relativa alla presente Cookie Policy, è possibile
            contattarci all'indirizzo email{" "}
            <a href="mailto:info@visurerapide.it" className="text-brand hover:underline">
              info@visurerapide.it
            </a>.
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
