import type { ReactNode } from "react";
import { Link } from "react-router";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-data";

export type CtaBandAction = {
  label: string;
  /** Link interno (react-router) */
  to?: string;
  /** Link esterno o tel: */
  href?: string;
};

type Props = {
  /**
   * fotografica: immagine di sfondo + overlay blu (usata in IlCentro, Convenzioni)
   * geometrica: blu + vitruviano a bassa opacità + texture dots dark (Home)
   * minimale: blu-scuro pieno, layout compatto (Servizi)
   */
  variant: "fotografica" | "geometrica" | "minimale";
  title: ReactNode;
  text?: ReactNode;
  /** Immagine di sfondo (solo variante fotografica) */
  image?: string;
  /**
   * Azioni: la prima rende il bottone pieno bianco, la seconda (opzionale)
   * quello outline. Default: telefono + pagina contatti.
   */
  actions?: [CtaBandAction, CtaBandAction?];
};

function Action({ action, primary }: { action: CtaBandAction; primary: boolean }) {
  const cls = primary
    ? "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition hover:bg-azzurro hover:text-white"
    : "inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10";
  const Icon = primary && action.href?.startsWith("tel:") ? Phone : ArrowRight;
  const content = (
    <>
      <Icon className="h-4 w-4" /> {action.label}
    </>
  );
  return action.to ? (
    <Link to={action.to} className={cls}>
      {content}
    </Link>
  ) : (
    <a href={action.href} className={cls}>
      {content}
    </a>
  );
}

/**
 * Banda CTA finale condivisa dalle pagine. Tre varianti visive coordinate
 * con il sistema di sfondi a 3 livelli; i testi restano specifici per pagina.
 */
export function CtaBand({ variant, title, text, image, actions }: Props) {
  const acts: CtaBandAction[] = (
    actions ?? [
      { label: SITE.telefono, href: SITE.telefonoHref },
      { label: "Contattaci", to: "/contatti" },
    ]
  ).filter((a): a is CtaBandAction => Boolean(a));

  const sectionCls =
    variant === "minimale"
      ? "bg-blu-scuro text-white"
      : "relative overflow-hidden bg-blu text-white";

  return (
    <section className={sectionCls}>
      {variant === "fotografica" && (
        <>
          <img
            src={image ?? "/assets/sala-corsi-ampia.jpg"}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-blu/85" />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 80% 20%, hsl(204 68% 41% / 0.35) 0%, transparent 55%)" }}
          />
        </>
      )}
      {variant === "geometrica" && (
        <>
          {/* Bagliore azzurro laterale */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 20% 50%, rgba(34,121,176,0.35) 0%, transparent 55%)" }}
          />
          {/* Texture puntini scura su tutta la banda */}
          <div aria-hidden="true" className="texture-dots-dark absolute inset-0 opacity-60" />
          {/* Vitruviano identitario: stesso asset di PageHero; invert + screen
              lo trasforma in tratti chiari sul fondo blu */}
          <img
            src="/assets/vitruviano-servizi-integrale.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute -right-16 top-1/2 w-[300px] -translate-y-1/2 opacity-[0.16] invert mix-blend-screen sm:-right-8 sm:w-[420px] lg:right-0 lg:w-[520px] [mask-image:linear-gradient(to_left,black_55%,transparent_98%)]"
          />
        </>
      )}
      <div
        className={
          "container-fkt relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center " +
          (variant === "minimale" ? "py-12" : "py-16")
        }
      >
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
          {text ? <div className="mt-2 text-white/80">{text}</div> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {acts.map((a, i) => (
            <Action key={a.label} action={a} primary={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
