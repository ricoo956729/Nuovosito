import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Plus, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";

type Trattamento = { titolo: string; descrizione: string; immagine?: string };

type Props = {
  trattamenti: Trattamento[];
  immagineArea: string;
  areaSlug?: string;
};

function getWhatsAppHref(terapia: string) {
  const text = encodeURIComponent(
    `Salve, vorrei ricevere maggiori informazioni su: ${terapia}`
  );
  return `https://wa.me/${SITE.whatsapp.replace(/\s/g, "")}?text=${text}`;
}

export function TerapieGrid({ trattamenti, immagineArea }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setOriginRect(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const handleOpen = (idx: number) => {
    const el = cardRefs.current[idx];
    if (el) {
      setOriginRect(el.getBoundingClientRect());
    }
    setOpenIndex(idx);
  };

  return (
    <>
      {/* Grid compatta */}
      {/* Lista compatta — solo mobile: righe con miniatura, aprono la stessa modale */}
      <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl bg-white shadow-fkt-1 ring-1 ring-border sm:hidden">
        {trattamenti.map((t, idx) => (
          <button
            key={t.titolo}
            type="button"
            onClick={() => handleOpen(idx)}
            className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors duration-200 hover:bg-secondary/50 active:bg-secondary"
          >
            <img
              src={t.immagine ?? immagineArea}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-14 w-14 shrink-0 rounded-xl object-cover"
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-blu">{t.titolo}</span>
              <span className="mt-0.5 block truncate text-xs text-muted-foreground">{t.descrizione}</span>
            </span>
            <Plus className="h-4 w-4 shrink-0 text-azzurro" aria-hidden />
          </button>
        ))}
      </div>

      <div className="mt-8 hidden grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {trattamenti.map((t, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={t.titolo}
              ref={(el) => { cardRefs.current[idx] = el; }}
              onClick={() => handleOpen(idx)}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 bg-neutral-900 h-[156px] sm:h-[180px]"
              style={{
                opacity: isOpen ? 0 : 1,
                pointerEvents: isOpen ? "none" : "auto",
                transform: isOpen ? "scale(0.95)" : "scale(1)",
              }}
            >
              <img
                src={t.immagine ?? immagineArea}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Pulsante + in alto a destra */}
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <Plus className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Footer scuro con titolo + micro-descrizione */}
              <div className="absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 motion-reduce:transition-none sm:group-hover:-translate-y-1">
                <h3 className="font-semibold text-white text-sm leading-snug line-clamp-2">
                  {t.titolo}
                </h3>
                {/* Micro-riga: sempre visibile su mobile (no hover), rivelata in hover da sm in su */}
                <p className="mt-1 text-[11px] leading-snug text-white/80 line-clamp-1 transition-all duration-300 motion-reduce:transition-none sm:mt-0 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-1 sm:group-hover:max-h-8 sm:group-hover:opacity-100">
                  {t.descrizione}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlay espanso */}
      <AnimatePresence>
        {openIndex !== null && originRect && (
          <>
            {/* Backdrop sfocato */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/35 backdrop-blur-lg z-40"
              onClick={() => setOpenIndex(null)}
            />

            {/* Card espansa con animazione da posizione originale */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.85,
                        x: originRect.left + originRect.width / 2 - window.innerWidth / 2,
                        y: originRect.top + originRect.height / 2 - window.innerHeight / 2,
                      }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1, x: 0, y: 0 }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.85,
                        x: originRect.left + originRect.width / 2 - window.innerWidth / 2,
                        y: originRect.top + originRect.height / 2 - window.innerHeight / 2,
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0.15 }
                    : { type: "spring", damping: 26, stiffness: 320 }
                }
                className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl pointer-events-auto"
              >
                {/* Immagine in alto */}
                <div className="relative aspect-[4/3]">
                  <img
                    src={trattamenti[openIndex].immagine ?? immagineArea}
                    alt={trattamenti[openIndex].titolo}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Bottone chiusura X */}
                  <button
                    onClick={() => setOpenIndex(null)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                    aria-label="Chiudi"
                  >
                    <X className="w-6 h-6 text-white drop-shadow-md" strokeWidth={2.5} />
                  </button>

                  {/* Titolo sull'immagine */}
                  <div className="absolute bottom-4 left-5 right-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                      {trattamenti[openIndex].titolo}
                    </h2>
                  </div>
                </div>

                {/* Descrizione + CTA WhatsApp */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.15 }
                      : { delay: 0.12, duration: 0.35, ease: "easeOut" }
                  }
                  className="p-5 sm:p-6"
                >
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {trattamenti[openIndex].descrizione}
                  </p>

                  {/* Link WhatsApp */}
                  <a
                    href={getWhatsAppHref(trattamenti[openIndex].titolo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-2.5 text-sm font-semibold text-[#0D7A6C] ring-1 ring-[#25D366] transition hover:bg-[#25D366]/10 hover:scale-[1.02] active:scale-[0.98] motion-reduce:transition-none"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    Chiedi informazioni su WhatsApp
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
