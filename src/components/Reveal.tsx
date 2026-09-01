import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Ritardo progressivo dell'animazione: 0, 1 (0.08s), 2 (0.16s) o 3 (0.24s) */
  delay?: 0 | 1 | 2 | 3;
  className?: string;
};

/**
 * Wrapper fade-in on scroll: applica le classi .reveal/.visible definite in
 * index.css. Progettato a prova di errore: il contenuto non può restare
 * invisibile — se l'elemento è già in viewport al mount viene mostrato subito,
 * IntersectionObserver gestisce gli elementi sotto la piega e un timer di
 * sicurezza copre gli ambienti in cui l'observer non risponde.
 * Con prefers-reduced-motion il contenuto è subito visibile.
 */
export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("visible");
    const inViewport = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight - 24 && r.bottom > 0;
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      show();
      return;
    }

    // Già visibile al mount: rivela al prossimo frame (l'animazione CSS resta)
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

    // Rete di sicurezza: se l'observer non ha risposto, mostra comunque
    // gli elementi che risultano dentro la viewport
    const safety = window.setTimeout(() => {
      if (!el.classList.contains("visible") && inViewport()) show();
    }, 1500);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";
  return (
    <div ref={ref} className={`reveal${delayClass}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
