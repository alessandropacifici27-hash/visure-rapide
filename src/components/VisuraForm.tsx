import { useState } from "react";
import { VISURE_TYPES, SITE, type VisuraSlug } from "@/lib/site";
import { CheckCircle2, Send } from "lucide-react";

export function VisuraForm({ defaultType }: { defaultType?: VisuraSlug }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    tipo: defaultType ?? VISURE_TYPES[0].slug,
    dettagli: "",
    note: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const buildMessage = () => {
    const tipo = VISURE_TYPES.find((v) => v.slug === form.tipo)?.label ?? form.tipo;
    return `Nuova richiesta visura — ${tipo}

Nome: ${form.nome}
Email: ${form.email}
Telefono: ${form.telefono}

Dati per la visura:
${form.dettagli}

Note:
${form.note || "—"}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = buildMessage();
    const subject = `Richiesta visura: ${VISURE_TYPES.find((v) => v.slug === form.tipo)?.label}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildMessage())}`;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/40 bg-card/60 p-10 text-center backdrop-blur-sm">
        <CheckCircle2 className="mx-auto mb-4 text-brand" size={48} />
        <h3 className="font-serif text-2xl">Richiesta pronta</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Il tuo client email è stato aperto con i dati pre-compilati. In alternativa, inviaci la stessa richiesta tramite WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={waLink} target="_blank" rel="noreferrer" className="rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Invia su WhatsApp
          </a>
          <button onClick={() => setSubmitted(false)} className="rounded-full border border-border px-6 py-2.5 text-sm text-muted-foreground transition hover:border-brand hover:text-brand">
            Nuova richiesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-10 shadow-[var(--shadow-elegant)]">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome e cognome *">
          <input required value={form.nome} onChange={update("nome")} className="input" placeholder="Mario Rossi" />
        </Field>
        <Field label="Email *">
          <input required type="email" value={form.email} onChange={update("email")} className="input" placeholder="mario@email.it" />
        </Field>
        <Field label="Telefono *">
          <input required value={form.telefono} onChange={update("telefono")} className="input" placeholder="+39 ..." />
        </Field>
        <Field label="Tipo di visura *">
          <select required value={form.tipo} onChange={update("tipo")} className="input">
            {VISURE_TYPES.map((v) => (
              <option key={v.slug} value={v.slug}>{v.label}</option>
            ))}
          </select>
        </Field>
        <Field label="Dati per la visura *" full>
          <textarea
            required
            value={form.dettagli}
            onChange={update("dettagli")}
            rows={4}
            className="input"
            placeholder="Es. dati catastali (foglio, particella, sub.), codice fiscale, partita IVA, targa veicolo, denominazione società ecc."
          />
        </Field>
        <Field label="Note aggiuntive" full>
          <textarea value={form.note} onChange={update("note")} rows={2} className="input" placeholder="Eventuali precisazioni" />
        </Field>
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
        Inviando il form accetti di essere contattato/a per evadere la richiesta. I tuoi dati non vengono usati a fini commerciali.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-95">
          <Send size={16} /> Invia richiesta
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
          background: oklch(0.18 0.012 240);
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
        .input::placeholder { color: oklch(0.55 0.012 80); }
      `}</style>
    </form>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
