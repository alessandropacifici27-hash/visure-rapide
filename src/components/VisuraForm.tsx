import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Checkbox } from "@/components/ui/checkbox";
import { VISURE_TYPES, SITE, type VisuraSlug } from "@/lib/site";
import { formatEuro } from "@/lib/utils";
import { CheckCircle2, Send } from "lucide-react";

const EMAILJS_PUBLIC_KEY = "Ejk5cxNsYTxhPm04i";
const EMAILJS_SERVICE_ID = "service_e0xwbpq";
const EMAILJS_TEMPLATE_NOTIFICA = "template_6zzmv7q";
const EMAILJS_TEMPLATE_BENVENUTO = "template_goh3y7u";

export function VisuraForm({ defaultType }: { defaultType?: VisuraSlug }) {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [phone2, setSp2] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    deliveryPreference: "email" as "email" | "whatsapp",
    telefono: "",
    tipo: defaultType ?? "",
    dettagli: "",
    note: "",
  });

  const tipoSelezionato = VISURE_TYPES.find((v) => v.slug === form.tipo);
  const basePrice = tipoSelezionato?.priceFrom ?? null;
  const totalPrice = basePrice === null ? null : basePrice + (phone2 ? 5 : 0);

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const buildDettagliRichiesta = () => {
    const tipo = tipoSelezionato?.label ?? form.tipo ?? "Non specificato";
    const deliveryLabel = form.deliveryPreference === "email" ? "Email" : "WhatsApp";
    const spiegazione = phone2 ? "Sì (+€5) — orario telefonico da concordare in giornata" : "No";
    const totaleTesto =
      totalPrice === null ? "Da definire in base alla richiesta" : formatEuro(totalPrice);
    return `Tipo di visura: ${tipo}
Preferenza di consegna: ${deliveryLabel}

Dati per la visura:
${form.dettagli || "—"}

Note:
${form.note || "—"}

Spiegazione telefonica richiesta: ${spiegazione}

Totale stimato: ${totaleTesto}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Almeno un recapito (email o telefono)
    const hasContact = form.email.trim() !== "" || form.telefono.trim() !== "";
    // Almeno un contenuto (tipo visura, dettagli o note)
    const hasContent =
      form.tipo.trim() !== "" || form.dettagli.trim() !== "" || form.note.trim() !== "";

    if (!form.nome.trim()) {
      setValidationError("Inserisci il tuo nome.");
      return;
    }
    if (!hasContact) {
      setValidationError("Inserisci almeno un recapito: email oppure telefono.");
      return;
    }
    if (!hasContent) {
      setValidationError(
        "Indica almeno una informazione: tipo di visura, dati richiesta o note."
      );
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);
    setSendError(false);

    const deliveryLabel = form.deliveryPreference === "email" ? "Email" : "WhatsApp";
    const dettagliRichiesta = buildDettagliRichiesta();

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_NOTIFICA,
        {
          nome_cliente: form.nome,
          email_cliente: form.email || "Non fornita",
          telefono_cliente: form.telefono || "Non fornito",
          preferenza_consegna: deliveryLabel,
          dettagli_richiesta: dettagliRichiesta,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      if (form.email.trim() !== "") {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_BENVENUTO,
          { nome_cliente: form.nome, email_cliente: form.email },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Errore invio EmailJS:", err);
      setSendError(true);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildDettagliRichiesta())}`;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/40 bg-card/60 p-10 text-center backdrop-blur-sm">
        <CheckCircle2 className="mx-auto mb-4 text-brand" size={48} />
        <h3 className="font-serif text-2xl">
          {sendError ? "Richiesta ricevuta" : "Richiesta inviata"}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {sendError
            ? "Richiesta ricevuta. Se non ricevi conferma entro pochi minuti, scrivici su WhatsApp."
            : "Ti abbiamo inviato una email di conferma. La elaboreremo entro 20-30 minuti."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Scrivi su WhatsApp
          </a>
          <button
            onClick={() => { setSubmitted(false); setSendError(false); }}
            className="rounded-full border border-border px-6 py-2.5 text-sm text-muted-foreground transition hover:border-brand hover:text-brand"
          >
            Nuova richiesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card/60 p-6 shadow-[var(--shadow-elegant)] backdrop-blur-md md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome e cognome *">
          <input
            value={form.nome}
            onChange={update("nome")}
            className="input"
            placeholder="Mario Rossi"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            className="input"
            placeholder="mario@email.it"
          />
        </Field>

        <Field label="Come preferisci ricevere le visure?" full>
          <div className="flex flex-wrap gap-2">
            {(
              [
                { value: "email", label: "Email" },
                { value: "whatsapp", label: "WhatsApp" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setForm({ ...form, deliveryPreference: opt.value })}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  form.deliveryPreference === opt.value
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-brand/50 hover:text-brand"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Telefono">
          <input
            value={form.telefono}
            onChange={update("telefono")}
            className="input"
            placeholder="+39 ..."
          />
        </Field>

        <Field label="Tipo di visura">
          <select value={form.tipo} onChange={update("tipo")} className="input">
            <option value="">— Seleziona (opzionale) —</option>
            {VISURE_TYPES.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Dati per la visura" full>
          <textarea
            value={form.dettagli}
            onChange={update("dettagli")}
            rows={4}
            className="input"
            placeholder="Es. dati catastali (foglio, particella, sub.), codice fiscale, partita IVA, targa veicolo, denominazione società ecc."
          />
        </Field>

        <Field label="Note aggiuntive" full>
          <textarea
            value={form.note}
            onChange={update("note")}
            rows={2}
            className="input"
            placeholder="Eventuali precisazioni"
          />
        </Field>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-4">
        <Checkbox
          id="spiegazione"
          checked={phone2}
          onCheckedChange={(c) => setSp2(c === true)}
          className="mt-0.5"
        />
        <label
          htmlFor="spiegazione"
          className="cursor-pointer text-sm leading-relaxed text-foreground"
        >
          <span className="font-medium">Richiedi spiegazione telefonica</span> — ricevi una
          chiamata per spiegarti i contenuti della visura.
          <br />
          <span className="text-xs text-muted-foreground">
            Orario in giornata da concordare · supplemento € 5
          </span>
        </label>
      </div>

      {validationError && (
        <p className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {validationError}
        </p>
      )}

      <p className="mt-5 text-xs text-muted-foreground">
        Inviando il form accetti di essere contattato/a per evadere la richiesta. I tuoi dati
        non vengono usati a fini commerciali. * = Nome obbligatorio, più almeno un recapito.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95 disabled:opacity-60"
        >
          <Send size={16} /> {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
        </button>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-brand/50 px-7 py-3 text-sm text-brand transition hover:bg-brand hover:text-primary-foreground"
        >
          Preferisco WhatsApp
        </a>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: oklch(0.14 0.010 240);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 0.7rem 0.9rem;
          color: var(--foreground);
          font-size: 0.92rem;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 3px oklch(0.78 0.13 65 / 0.18);
        }
        .input::placeholder { color: oklch(0.50 0.010 80); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
