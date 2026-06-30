import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "visurerapide_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-2xl rounded-md border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur">
            <div className="flex items-center gap-3">
              <Cookie size={16} className="shrink-0 text-brand" />
              <p className="flex-1 text-xs text-muted-foreground">
                Utilizziamo cookie tecnici necessari al funzionamento del sito. Non utilizziamo cookie di profilazione di terze parti.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={accept}
                  className="rounded-full bg-[image:var(--gradient-brand)] px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Accetta
                </button>
                <button
                  onClick={decline}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-brand hover:text-brand"
                >
                  Rifiuta
                </button>
              </div>
              <button onClick={decline} className="shrink-0 text-muted-foreground transition-colors hover:text-foreground" aria-label="Chiudi">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
