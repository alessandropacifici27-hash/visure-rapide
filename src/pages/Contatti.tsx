import { SITE } from "@/lib/site";
import { Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";

export default function Contatti() {
  const items = [
    { Icon: Phone, label: "Cellulare", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { Icon: Phone, label: "Telefono fisso", value: SITE.phoneLandline, href: `tel:${SITE.phoneLandline.replace(/\s/g, "")}` },
    { Icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: `https://wa.me/${SITE.whatsapp}` },
    { Icon: Send, label: "Telegram", value: SITE.phone, href: `https://t.me/+${SITE.telegram}` },
    { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: Clock, label: "Orari", value: SITE.hours },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-brand">Contatti</p>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl">
          Parliamone <span className="brand-gradient-text italic">subito</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Scegli il canale che preferisci. Ti risponderemo nel più breve tempo possibile.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, label, value, href }) => {
          const inner = (
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card/50 p-6 transition hover:border-brand/50">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/5 text-brand">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                <p className="mt-1 text-foreground">{value}</p>
              </div>
            </div>
          );
          return href ? (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {inner}
            </a>
          ) : (
            <div key={label}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
