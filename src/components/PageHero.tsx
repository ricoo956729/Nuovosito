import type { ReactNode } from "react";

type Props = {
  /** Micro-label in maiuscolo sopra il titolo (es. "Il Centro") */
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Contenuto extra opzionale sotto il sottotitolo (badge, meta, ecc.) */
  children?: ReactNode;
};

/**
 * Intestazione condivisa delle pagine interne: gradiente ghiaccio → bianco,
 * vitruviano decorativo coerente su tutte le pagine, texture a puntini e
 * label con punto pulsante. I contenuti testuali restano nelle pagine.
 */
export function PageHero({ label, title, subtitle, children }: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{ background: "linear-gradient(165deg, #eef4f8 0%, #f7fafc 55%, #ffffff 100%)" }}
    >
      {/* Vitruviano — simbolo identitario FKT, posizione e intensità uniformi */}
      <img
        src="/assets/vitruviano-servizi-integrale.webp"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute -right-14 top-1/2 w-[220px] -translate-y-1/2 opacity-[0.14] sm:-right-8 sm:w-[320px] sm:opacity-[0.2] lg:right-4 lg:w-[440px] lg:opacity-[0.28] [mask-image:linear-gradient(to_left,black_55%,transparent_98%)]"
      />
      {/* Texture a puntini, angolo in basso a sinistra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(hsl(204 68% 41% / 0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at bottom left, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom left, black 30%, transparent 75%)",
        }}
      />
      {/* Bagliore radiale azzurro, alto a destra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72"
        style={{ background: "radial-gradient(circle, hsl(204 68% 41% / 0.12) 0%, transparent 70%)" }}
      />

      <div className="container-fkt relative py-16 sm:py-24">
        <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-azzurro">
          <span aria-hidden="true" className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-azzurro" />
          {label}
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl sm:text-5xl font-extrabold text-blu leading-[1.08]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
