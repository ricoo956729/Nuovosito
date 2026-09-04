import { useLayoutEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Ritardo progressivo dell'animazione: 0, 1 (0.08s), 2 (0.16s) o 3 (0.24s) */
  delay?: 0 | 1 | 2 | 3;
  /** Variante di ingresso: "up" (default, fade+slide), "blur" (fade+slide+sfocatura), "scale" (fade+leggero zoom) */
  variant?: "up" | "blur" | "scale";
  className?: string;
};

/**
 * Wrapper fade-in on scroll con logica "visible by default": l'elemento con la
 * sola classe .reveal è completamente visibile (crawler, no-JS e rendering
 * headless vedono il contenuto). L'animazione è un enhancement: questa
 * useLayoutEffect aggiunge .reveal-armed PRIMA del paint (nessun flash
 * visibile→nascosto) e poi .visible quando l'elemento entra in viewport.
 * A prova di errore: con prefers-reduced-motion o senza IntersectionObserver
 * non arma mai; un timer di sicurezza mostra comunque il contenuto se
 * l'observer non risponde; qualsiasi eccezione lascia il contenuto visibile.
 */
export function Reveal({ children, delay = 0, variant = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    try {
      // Reduced motion o observer assente: mai armare, contenuto sempre visibile
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
      ) {
        return;
      }

      const show = () => el.classList.add("visible");
      const inViewport = () => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight - 24 && r.bottom > 0;
      };

      // Arma prima del paint: applica stato nascosto + transition
      el.classList.add("reveal-armed");

      // Già visibile al mount: rivela al prossimo frame (l'animazione CSS parte
      // perché l'arm è avvenuto nel layout effect, prima del paint)
      let raf = 0;
      if (inViewport()) {
        raf = requestAnimationFrame(show);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);

      // Rete di sicurezza: se l'observer non ha risposto entro 1.5s, mostra
      // comunque — il contenuto non può restare invisibile
      const safety = window.setTimeout(() => {
        if (!el.classList.contains("visible")) show();
      }, 1500);

      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        window.clearTimeout(safety);
      };
    } catch {
      // Qualsiasi fallimento: non armare/mostrare via JS, il contenuto
      // resta visibile grazie allo stato di default di .reveal
      el.classList.remove("reveal-armed");
      return;
    }
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";
  return (
    <div
      ref={ref}
      data-variant={variant}
      className={`reveal${delayClass}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
