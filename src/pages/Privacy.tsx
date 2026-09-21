import { Link } from "react-router";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { IubendaDocument } from "@/components/IubendaDocument";
import { IUBENDA_URL_PRIVACY } from "@/lib/iubenda";

/**
 * Informativa privacy — il testo è generato e mantenuto aggiornato da iubenda
 * sulla base dei servizi dichiarati per il sito. Non va riscritto qui: le
 * modifiche si fanno dalla dashboard iubenda del sito "www.fisioterapiamatera.it".
 */
export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | FKT Matera"
        description={`Informativa privacy del sito FKT Matera ai sensi del Regolamento (UE) 2016/679 (GDPR). Titolare: ${SITE.legale.ragioneSociale}.`}
      />
      <PageHero
        label="Privacy"
        title="Informativa privacy."
        subtitle="Quali dati raccoglie questo sito, perché li raccoglie e quali sono i tuoi diritti."
      />

      <section className="pb-20">
        <div className="container-fkt">
          <div className="mx-auto max-w-3xl">
            <IubendaDocument href={IUBENDA_URL_PRIVACY} titolo="Privacy Policy" />

            <p className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              Per l'elenco degli strumenti di tracciamento e la gestione del consenso consulta la{" "}
              <Link to="/cookie-policy" className="font-semibold text-azzurro hover:underline">
                cookie policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
