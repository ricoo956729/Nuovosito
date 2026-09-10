import { useEffect } from "react";
import { Link } from "react-router";
import { Cookie } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";

declare global {
  interface Window {
    Cookiebot?: {
      renew?: () => void;
      consent?: { marketing?: boolean; preferences?: boolean; statistics?: boolean };
    };
  }
}

const COOKIEBOT_CBID = "a854b7ba-7720-4bde-a5a6-f8250877a176";

/**
 * Cookie policy — l'elenco aggiornato dei cookie è generato automaticamente
 * da Cookiebot (dichiarazione cd.js), sulla base della scansione del sito.
 */
export default function CookiePolicy() {
  useEffect(() => {
    const id = "CookieDeclaration";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = `https://consent.cookiebot.com/${COOKIEBOT_CBID}/cd.js`;
    s.type = "text/javascript";
    s.async = true;
    document.getElementById("cookie-declaration")?.appendChild(s);
  }, []);

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
            <h2 className="font-display text-xl font-extrabold text-blu sm:text-2xl">
              Cosa sono i cookie
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              I cookie sono piccoli file di testo che i siti visitati salvano sul tuo dispositivo.
              Questo sito utilizza cookie tecnici — necessari al funzionamento, non richiedono
              consenso — e, solo previo tuo consenso, cookie di terze parti legati a contenuti
              esterni come la mappa di Google Maps nella pagina{" "}
              <Link to="/contatti" className="font-semibold text-azzurro hover:underline">
                Contatti
              </Link>
              .
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl bg-azzurro/5 p-6 ring-1 ring-border">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-azzurro text-white">
                <Cookie className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-bold text-blu">
                  Gestisci le tue preferenze
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Puoi modificare o revocare il consenso in qualsiasi momento.
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.Cookiebot?.renew?.()}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blu px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-azzurro max-sm:w-full"
              >
                Modifica il consenso
              </button>
            </div>

            <h2 className="mt-10 font-display text-xl font-extrabold text-blu sm:text-2xl">
              Cookie utilizzati da questo sito
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              L'elenco seguente è aggiornato automaticamente dal servizio di gestione del consenso
              (Cookiebot), che scansiona periodicamente il sito.
            </p>
            {/* La dichiarazione Cookiebot viene iniettata qui via script */}
            <div id="cookie-declaration" className="mt-6 text-sm leading-relaxed text-foreground/80" />

            <h2 className="mt-10 font-display text-xl font-extrabold text-blu sm:text-2xl">
              Come disattivare i cookie dal browser
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Puoi gestire le preferenze sui cookie anche direttamente dalle impostazioni del tuo
              browser (Chrome, Safari, Firefox, Edge): cerca la sezione «Privacy» o «Cookie» nelle
              impostazioni. La disattivazione dei cookie tecnici può compromettere il funzionamento
              di alcune parti del sito.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Per maggiori dettagli sul trattamento dei dati personali consulta l'
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
