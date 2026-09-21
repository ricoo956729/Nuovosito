import { Link } from "react-router";
import { Cookie } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { IubendaDocument } from "@/components/IubendaDocument";
import { apriPreferenzeCookie, IUBENDA_URL_COOKIE } from "@/lib/iubenda";

/**
 * Cookie policy — l'elenco degli strumenti di tracciamento è generato da iubenda
 * sulla base dei servizi dichiarati per il sito, e si aggiorna da solo quando la
 * dichiarazione cambia in dashboard.
 */
export default function CookiePolicy() {
  return (
    <>
      <Seo
        title="Cookie Policy | FKT Matera"
        description="Cookie policy del sito FKT Matera: quali cookie utilizziamo, perché, e come gestire o revocare il consenso."
      />
      <PageHero
        label="Cookie"
        title="Cookie policy."
        subtitle="Quali cookie utilizza questo sito, perché, e come gestire o revocare il tuo consenso."
      />

      <section className="pb-20">
        <div className="container-fkt">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-azzurro/5 p-6 ring-1 ring-border">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-azzurro text-white">
                <Cookie className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-lg font-bold text-blu">
                  Gestisci le tue preferenze
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Puoi modificare o revocare il consenso in qualsiasi momento.
                </p>
              </div>
              <button
                type="button"
                onClick={apriPreferenzeCookie}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blu px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-azzurro max-sm:w-full"
              >
                Modifica il consenso
              </button>
            </div>

            <IubendaDocument href={IUBENDA_URL_COOKIE} titolo="Cookie Policy" />

            <p className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              Per il dettaglio sul trattamento dei dati personali consulta l'
              <Link to="/privacy" className="font-semibold text-azzurro hover:underline">
                informativa privacy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
