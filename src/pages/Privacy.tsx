import type { ReactNode } from "react";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-xl font-extrabold text-blu sm:text-2xl">{children}</h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-foreground/80">{children}</p>;
}

function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-foreground/80">
      {children}
    </ul>
  );
}

/**
 * Informativa privacy — testo portato dal sito precedente (validato dal consulente).
 * NON modificare i contenuti legali senza conferma del titolare.
 */
export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | FKT Matera"
        description="Informativa privacy ai sensi degli artt. 13-14 del Regolamento (UE) 2016/679 (GDPR) di F.K.T. S.A.S. di Teresa Canitano & C."
      />
      <PageHero
        label="Privacy"
        title="Informativa privacy."
        subtitle="Informativa ai sensi degli artt. 13-14 del Regolamento (UE) n. 679/2016 («GDPR»)."
      />

      <section className="pb-20">
        <div className="container-fkt">
          <div className="mx-auto max-w-3xl">
            <P>
              <strong className="text-blu">{SITE.legale.ragioneSociale}</strong> con sede legale in{" "}
              {SITE.legale.sedeLegale} e sede operativa in {SITE.indirizzo.via}, {SITE.indirizzo.cap}{" "}
              {SITE.indirizzo.citta} ({SITE.indirizzo.provincia}), CF e P.IVA IT{" "}
              {SITE.legale.pIva} (in seguito, «Titolare»), in qualità di titolare del trattamento, La
              informa ai sensi dell'art. 13 D.Lgs. 30.6.2003 n. 196 (in seguito, «Codice Privacy») e
              dell'art. 13 GDPR che i Suoi dati saranno trattati con le modalità e per le finalità
              seguenti.
            </P>

            <H2>1. Oggetto del trattamento</H2>
            <P>
              Il Titolare tratta i dati personali, identificativi da Lei comunicati in occasione
              della conclusione di contratti per i servizi o della richiesta di informazioni:
            </P>
            <Ul>
              <li>
                <strong className="text-blu">Dati anagrafici</strong>: nome, cognome, telefono fisso
                e/o mobile, indirizzo/i e-mail;
              </li>
              <li>
                <strong className="text-blu">Dati di traffico telematico</strong>: log, indirizzo IP
                di provenienza.
              </li>
            </Ul>
            <P>
              Il Titolare non richiede all'Interessato di fornire dati c.d. «particolari» (art. 9
              GDPR), ovvero dati che rivelino l'origine razziale o etnica, le opinioni politiche, le
              convinzioni religiose o filosofiche, o l'appartenenza sindacale, nonché dati genetici,
              biometrici, dati relativi alla salute o alla vita sessuale o all'orientamento
              sessuale. Nel caso in cui la prestazione richiesta al Titolare imponesse il
              trattamento di tali dati, l'Interessato riceverà preventivamente apposita informativa
              e sarà ad Egli richiesto di prestare apposito consenso.
            </P>

            <H2>2. Finalità del trattamento</H2>
            <P>
              <strong className="text-blu">A) Senza il Suo consenso espresso</strong> (art. 24 lett.
              a), b), c) Codice Privacy e art. 6 lett. b), e) GDPR), per le finalità di servizio:
            </P>
            <Ul>
              <li>concludere i contratti per i servizi del Titolare;</li>
              <li>
                adempiere agli obblighi precontrattuali, contrattuali e fiscali derivanti da
                rapporti con Lei in essere;
              </li>
              <li>
                adempiere agli obblighi previsti dalla legge, da un regolamento, dalla normativa
                comunitaria o da un ordine dell'Autorità;
              </li>
              <li>esercitare i diritti del Titolare, ad esempio il diritto di difesa in giudizio.</li>
            </Ul>
            <P>
              <strong className="text-blu">B) Solo previo Suo specifico e distinto consenso</strong>{" "}
              (artt. 23 e 130 Codice Privacy e art. 7 GDPR), per finalità di marketing:
            </P>
            <Ul>
              <li>
                inviarLe via e-mail, posta e/o sms e/o contatti telefonici newsletter,
                comunicazioni commerciali e/o materiale pubblicitario su prodotti o servizi offerti
                dal Titolare e rilevazione del grado di soddisfazione sulla qualità dei servizi;
              </li>
              <li>
                inviarLe comunicazioni commerciali e/o promozionali di soggetti terzi (ad esempio
                business partner).
              </li>
            </Ul>

            <H2>3. Modalità di trattamento</H2>
            <P>
              Il trattamento dei Suoi dati personali è realizzato per mezzo delle operazioni
              indicate all'art. 4 Codice Privacy e all'art. 4 n. 2) GDPR: raccolta, registrazione,
              organizzazione, conservazione, consultazione, elaborazione, modificazione, selezione,
              estrazione, raffronto, utilizzo, interconnessione, blocco, comunicazione,
              cancellazione e distruzione dei dati. I dati sono sottoposti a trattamento sia
              cartaceo che elettronico e/o automatizzato. Il Titolare tratterà i dati personali per
              il tempo necessario ad adempiere alle finalità di cui sopra e comunque per non oltre
              10 anni dalla cessazione del rapporto per le finalità di servizio e per non oltre 2
              anni dalla raccolta dei dati per le finalità di marketing.
            </P>

            <H2>4. Accesso ai dati</H2>
            <P>I Suoi dati potranno essere resi accessibili per le finalità di cui all'art. 2:</P>
            <Ul>
              <li>
                a dipendenti e collaboratori del Titolare nella loro qualità di incaricati e/o
                responsabili interni del trattamento e/o amministratori di sistema;
              </li>
              <li>
                a società terze o altri soggetti (a titolo indicativo: istituti di credito, studi
                professionali, consulenti) che svolgono attività in outsourcing per conto del
                Titolare, nella loro qualità di responsabili esterni del trattamento.
              </li>
            </Ul>

            <H2>5. Comunicazione dei dati</H2>
            <P>
              Senza la necessità di un espresso consenso (art. 6 lett. b) e c) GDPR), il Titolare
              potrà comunicare i Suoi dati per le finalità di cui all'art. 2.A) a organismi di
              vigilanza, autorità giudiziarie, società di assicurazione per la prestazione di
              servizi, nonché a quei soggetti ai quali la comunicazione sia obbligatoria per legge.
              Detti soggetti tratteranno i dati nella loro qualità di autonomi titolari del
              trattamento. I Suoi dati non saranno diffusi.
            </P>

            <H2>6. Trasferimento dei dati</H2>
            <P>
              I Suoi dati personali sono conservati in archivi cartacei, informatici e telematici
              situati in paesi nei quali è applicato il GDPR (paesi UE o SEE).
            </P>

            <H2>7. Natura del conferimento e conseguenze del rifiuto</H2>
            <P>
              Il conferimento dei dati per le finalità di cui all'art. 2.A) è obbligatorio: in loro
              assenza non potremo garantirLe i servizi richiesti. Il conferimento per le finalità di
              cui all'art. 2.B) è invece facoltativo: può decidere di non conferire alcun dato o di
              negare successivamente il trattamento, senza perdere il diritto ai servizi di cui
              all'art. 2.A).
            </P>

            <H2>8. Diritti dell'interessato</H2>
            <P>
              Nella Sua qualità di interessato, ha i diritti di cui agli artt. 15-22 GDPR e in
              particolare i diritti di:
            </P>
            <Ul>
              <li>
                ottenere la conferma dell'esistenza o meno di dati personali che La riguardano e la
                loro comunicazione in forma intelligibile;
              </li>
              <li>
                ottenere l'indicazione dell'origine dei dati, delle finalità e modalità del
                trattamento, degli estremi identificativi del titolare e dei responsabili, dei
                soggetti o categorie di soggetti cui i dati possono essere comunicati;
              </li>
              <li>
                ottenere l'aggiornamento, la rettificazione, l'integrazione, la cancellazione, la
                trasformazione in forma anonima o il blocco dei dati trattati in violazione di
                legge;
              </li>
              <li>
                opporsi, in tutto o in parte, per motivi legittimi al trattamento dei dati che La
                riguardano, anche ai fini di invio di materiale pubblicitario o di vendita diretta
                (diritto di opposizione al marketing, esercitabile anche solo per una delle due
                modalità, automatizzata o tradizionale);
              </li>
              <li>
                ove applicabili: diritto di rettifica, diritto all'oblio, diritto di limitazione di
                trattamento, diritto alla portabilità dei dati, nonché il diritto di reclamo
                all'Autorità Garante per la protezione dei dati personali.
              </li>
            </Ul>

            <H2>9. Modalità di esercizio dei diritti</H2>
            <P>Potrà in qualsiasi momento esercitare i diritti inviando:</P>
            <Ul>
              <li>
                una raccomandata a.r. a {SITE.legale.ragioneSociale} — {SITE.legale.sedeLegale};
              </li>
              <li>
                una e-mail all'indirizzo{" "}
                <a
                  href={`mailto:${SITE.legale.emailDiritti}`}
                  className="font-semibold text-azzurro underline-offset-2 hover:underline"
                >
                  {SITE.legale.emailDiritti}
                </a>
                .
              </li>
            </Ul>

            <H2>10. Sicurezza</H2>
            <P>
              Il trattamento dei dati personali sarà effettuato anche con il supporto di mezzi
              informatici o telematici atti a memorizzare, gestire e trasmettere i dati stessi,
              comunque mediante strumenti idonei a garantirne sicurezza e riservatezza. Presa
              coscienza dei rischi legati alla divulgazione di dati personali, il Titolare ha posto
              in essere tutte le misure ragionevolmente necessarie per impedire e minimizzare i
              rischi di accessi non autorizzati, trattamenti, alterazioni o distruzioni non
              autorizzate o contrarie alla legge.
            </P>

            <H2>11. Titolare e responsabile della protezione dei dati</H2>
            <P>
              Il Titolare del trattamento è {SITE.legale.ragioneSociale} — {SITE.legale.sedeLegale}.
              Il Responsabile della protezione dei dati è {SITE.legale.dpo}.
            </P>
          </div>
        </div>
      </section>
    </>
  );
}
