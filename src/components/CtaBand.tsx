import type { ComponentType, ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, CalendarCheck, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

type CtaBandAction = {
  label: string;
  href?: string;
  to?: string;
};

type CtaBandProps = {
  /**
   * "finale": CTA di fondo pagina, uguale su tutte le pagine (default).
   *   Desktop: fotografica piena con overlay blu. Mobile: editoriale centrata.
   * "card": richiamo contestuale compatto, da inserire dentro i contenuti.
   */
  variant?: "finale" | "card";
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  actions?: [CtaBandAction, CtaBandAction?];
  /** Solo variante "card": icona mostrata nel tondo azzurro. */
  icon?: ComponentType<{ className?: string }>;
  /** Solo variante "finale": mostra la riga con orari e indirizzo. Default true. */
  footer?: boolean;
  /**
   * Default true: avvolge la CTA in <section> + container-fkt (uso a fondo pagina).
   * False: renderizza solo la CTA, da inserire in un contenitore esistente.
   */
  framed?: boolean;
};

function ActionLink({
  action,
  className,
  children,
}: {
  action: CtaBandAction;
  className: string;
  children: ReactNode;
}) {
  if (action.to) {
    return (
      <Link to={action.to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={action.href} className={className}>
      {children}
    </a>
  );
}

function ActionIcon({ action }: { action: CtaBandAction }) {
  if (action.href?.startsWith("tel:")) return <Phone className="h-4 w-4" aria-hidden />;
  if (action.href === SITE.whatsappHref) return <MessageCircle className="h-4 w-4" aria-hidden />;
  return <ArrowRight className="h-4 w-4" aria-hidden />;
}

/**
 * CTA finale di pagina — ibrida:
 * - mobile (<sm): editoriale centrata, nessuna immagine caricata
 *   (la foto è un background CSS sul blocco desktop, non scaricata da mobile);
 * - desktop (sm+): fotografica piena con overlay blu.
 */
function CtaFinale({
  eyebrow,
  title,
  text,
  actions = [
    { label: SITE.telefono, href: SITE.telefonoHref },
    { label: "Scrivici su WhatsApp", href: SITE.whatsappHref },
  ],
  footer = true,
}: Omit<CtaBandProps, "variant" | "framed">) {
  const [primary, secondary] = actions;
  return (
    <>
      {/* Mobile — editoriale centrata */}
      <div className="border-t border-border pb-4 pt-12 text-center sm:hidden">
        {eyebrow && (
          <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-azzurro">
            <span className="pulse-dot" aria-hidden /> {eyebrow}
          </p>
        )}
        <h2 className="mx-auto mt-4 max-w-md font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-blu">
          {title}
        </h2>
        {text && <p className="mx-auto mt-4 max-w-sm text-muted-foreground">{text}</p>}
        <div className="mx-auto mt-7 flex max-w-xs flex-col gap-3">
          {primary && (
            <ActionLink
              action={primary}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-azzurro px-7 py-3.5 font-semibold text-white shadow-fkt-2 transition-colors hover:bg-blu"
            >
              <ActionIcon action={primary} />
              {primary.label}
            </ActionLink>
          )}
          {secondary && (
            <ActionLink
              action={secondary}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-blu ring-1 ring-border transition-colors hover:bg-secondary"
            >
              <ActionIcon action={secondary} />
              {secondary.label}
            </ActionLink>
          )}
        </div>
        {footer && (
          <p className="mt-7 text-sm text-muted-foreground">
            {SITE.orari} · {SITE.indirizzo.via}, {SITE.indirizzo.citta}
          </p>
        )}
      </div>

      {/* Desktop — fotografica piena con overlay */}
      <div
        className="relative hidden min-h-[460px] items-center overflow-hidden rounded-3xl shadow-fkt-3 sm:flex"
        style={{
          backgroundImage: "url(/assets/hero-sala-corsi.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-blu/95 via-blu/60 to-transparent"
        />
        <div className="relative max-w-xl p-12">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-azzurro-chiaro">
              {eyebrow}
            </p>
          )}
          <h2 className="h-section mt-3 font-extrabold text-white">{title}</h2>
          {text && <p className="mt-4 text-white/80 sm:text-lg">{text}</p>}
          <div className="mt-7 flex flex-wrap gap-3">
            {primary && (
              <ActionLink
                action={primary}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition-colors hover:bg-azzurro hover:text-white"
              >
                <ActionIcon action={primary} />
                {primary.label}
              </ActionLink>
            )}
            {secondary && (
              <ActionLink
                action={secondary}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ActionIcon action={secondary} />
                {secondary.label}
              </ActionLink>
            )}
          </div>
          {footer && (
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-azzurro-chiaro" aria-hidden /> {SITE.orari}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-azzurro-chiaro" aria-hidden /> {SITE.indirizzo.via},{" "}
                {SITE.indirizzo.citta}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

/** Card contestuale — richiamo compatto da inserire dentro i contenuti. */
function CtaCard({
  title,
  text,
  actions = [{ label: "Prenota una valutazione", href: SITE.telefonoHref }],
  icon: Icon = CalendarCheck,
}: Omit<CtaBandProps, "variant" | "framed">) {
  const [primary, secondary] = actions;
  return (
    <div className="rounded-2xl border-l-4 border-azzurro bg-azzurro/5 p-6 sm:flex sm:items-center sm:gap-6 sm:p-7">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-azzurro text-white max-sm:mb-4">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-bold text-blu">{title}</h3>
        {text && <p className="mt-1 text-sm text-muted-foreground">{text}</p>}
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-3 max-sm:mt-4 max-sm:flex-col max-sm:items-stretch">
        {primary && (
          <ActionLink
            action={primary}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blu px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-azzurro"
          >
            {primary.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </ActionLink>
        )}
        {secondary && (
          <ActionLink
            action={secondary}
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-blu transition-colors hover:bg-azzurro/10"
          >
            {secondary.label}
          </ActionLink>
        )}
      </div>
    </div>
  );
}

export function CtaBand({ variant = "finale", framed = true, ...props }: CtaBandProps) {
  const content = variant === "card" ? <CtaCard {...props} /> : <CtaFinale {...props} />;
  if (!framed) return content;
  return (
    <section className="pb-20 pt-4">
      <div className="container-fkt">{content}</div>
    </section>
  );
}
