import { SITE } from "@/lib/site";
import { Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";

const ITEMS = [
  {
    Icon: MessageCircle,
    emoji: "💬",
    label: "WhatsApp",
    sublabel: "Risposta rapida",
    value: SITE.phone,
    href: `https://wa.me/${SITE.whatsapp}`,
    primary: true,
  },
  {
    Icon: Mail,
    emoji: "📧",
    label: "Email",
    sublabel: "Risposta entro l'orario di lavoro",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    primary: false,
  },
  {
    Icon: Send,
    emoji: "✈️",
    label: "Telegram",
    sublabel: "Alternativa a WhatsApp",
    value: "@VisureRapide",
    href: `https://t.me/+${SITE.telegram}`,
    primary: false,
  },
  {
    Icon: Phone,
    emoji: "📞",
    label: "Cellulare",
    sublabel: "Lun–Ven 9:00–18:00",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    primary: false,
  },
  {
    Icon: Phone,
    emoji: "🏢",
    label: "Telefono fisso",
    sublabel: "Lun–Ven 9:00–18:00",
    value: SITE.phoneLandline,
    href: `tel:${SITE.phoneLandline.replace(/\s/g, "")}`,
    primary: false,
  },
  {
    Icon: Clock,
    emoji: "🕘",
    label: "Orari di servizio",
    sublabel: "Rispondiamo anche il sabato mattina",
    value: SITE.hours,
    href: null,
    primary: false,
  },
];

export default function Contatti() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      {/* HEADER */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-brand">Contatti</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl">
          Parliamone{" "}
          <span className="brand-gradient-text italic">subito</span>
        </h1>
        <p className="mt-4 max-w-lg mx-auto text-sm text-muted-foreground sm:text-base">
          Scegli il canale che preferisci. Il modo più veloce è WhatsApp — rispondiamo
          entro pochi minuti.
        </p>
      </div>

      {/* CARD WHATSAPP PRIMARIA */}
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="mt-12 flex items-center gap-5 rounded-2xl border border-brand/40 bg-gradient-to-r from-brand/10 to-brand/5 p-6 shadow-[var(--shadow-elegant)] transition hover:border-brand/70 active:scale-[0.98] md:p-8"
      >
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand/20 text-brand">
          <MessageCircle size={28} />
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.16em] text-brand">Canale preferito</p>
          <p className="mt-0.5 font-serif text-2xl">Scrivici su WhatsApp</p>
          <p className="mt-1 text-sm text-muted-foreground">Risposta immediata · {SITE.phone}</p>
        </div>
        <span className="hidden text-brand md:block text-2xl">→</span>
      </a>

      {/* ALTRI CONTATTI */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.filter((i) => !i.primary).map(({ Icon, emoji, label, sublabel, value, href }) => {
          const inner = (
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-card/50 p-5 transition hover:border-brand/40 active:scale-[0.98] md:p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/5 text-brand">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-base leading-none">{emoji}</span>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                </div>
                <p className="mt-1 truncate text-sm font-medium text-foreground">{value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground/70">{sublabel}</p>
              </div>
            </div>
          );

          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {inner}
            </a>
          ) : (
            <div key={label}>{inner}</div>
          );
        })}
      </div>

      {/* NOTA FINALE */}
      <p className="mt-10 text-center text-xs text-muted-foreground/60">
        🔒 I tuoi dati sono trattati in conformità al GDPR. Non vengono mai ceduti a terzi.
      </p>
    </section>
  );
}
