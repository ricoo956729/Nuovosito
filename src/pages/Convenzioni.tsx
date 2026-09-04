import { useState } from "react";
import {
  Landmark,
  BriefcaseMedical,
  ShieldCheck,
  FileText,
  Info,
  ChevronDown,
} from "lucide-react";
import { SITE, CONVENZIONI } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CornerBrackets } from "@/components/CornerBrackets";


type Accesso = {
  slug: string;
  titolo: string;
  sottotitolo: string;
  icona: typeof Landmark;
  logo?: string;
  logoAlt?: string;
  paragrafi: string[];
  documentiTitolo: string;
  documenti: string[];
  nota: string;
};

const ACCESSO: Accesso[] = [
  {
    slug: "ssn",
    titolo: "Servizio Sanitario Nazionale",
    sottotitolo: "Prestazioni convenzionate con il SSN su prescrizione medica.",
    icona: Landmark,
    logo: "/assets/logo-ssn-trasparente-opt.webp",
    logoAlt: "Logo del Servizio Sanitario Nazionale",
    paragrafi: [
      "Questa modalità riguarda i pazienti in possesso di una prescrizione medica per prestazioni erogabili in convenzione. Prima della prenotazione è necessario verificare che l'indicazione sia completa e compatibile con il percorso richiesto.",
      "La prescrizione deve indicare la prestazione richiesta e, quando previsto, il numero di sedute e il distretto da trattare. La documentazione clinica già disponibile aiuta a inquadrare correttamente il percorso.",
      "La segreteria controlla la prescrizione, comunica i tempi di accesso e concorda l'appuntamento. Quando previsto, il ticket viene corrisposto prima dell'esecuzione delle prestazioni.",
    ],
    documentiTitolo: "Cosa portare in segreteria",
    documenti: [
      "Prescrizione medica completa.",
      "Tessera sanitaria e documento di identità.",
      "Codice fiscale dell'assistito.",
      "Referti, esami o indicazioni specialistiche disponibili.",
    ],
    nota: "Invia o porta la prescrizione prima di programmare il percorso: in questo modo possiamo verificare in anticipo requisiti e disponibilità.",
  },
  {
    slug: "inail",
    titolo: "INAIL",
    sottotitolo: "Riabilitazione dopo un infortunio sul lavoro.",
    icona: BriefcaseMedical,
    logo: "/assets/logo-inail-trim-opt.webp",
    logoAlt: "Logo INAIL",
    paragrafi: [
      "Il percorso INAIL riguarda i lavoratori che necessitano di trattamenti riabilitativi collegati a un infortunio sul lavoro. L'obiettivo è favorire il recupero funzionale e accompagnare il ritorno alle attività quotidiane e lavorative.",
      "Prima di iniziare è necessario controllare che la pratica e l'eventuale autorizzazione consentano di eseguire il trattamento presso il centro: la segreteria può aiutarti a individuare i dati utili.",
      "Dopo la verifica amministrativa, gli appuntamenti vengono programmati in base alle prestazioni autorizzate e agli obiettivi riabilitativi. Eventuali aggiornamenti della pratica devono essere comunicati alla segreteria.",
    ],
    documentiTitolo: "Documenti utili",
    documenti: [
      "Documentazione relativa alla denuncia e alla pratica INAIL.",
      "Indicazioni ricevute durante la visita o la valutazione.",
      "Eventuale autorizzazione al trattamento presso il centro.",
      "Referti, diagnosi ed esami collegati all'infortunio.",
    ],
    nota: "La documentazione deve essere verificata prima del primo trattamento: porta con te anche gli esami e i referti collegati all'infortunio.",
  },
  {
    slug: "assicurazioni",
    titolo: "Assicurazioni e fondi sanitari",
    sottotitolo: "Prestazioni tramite fondi, mutue integrative e coperture assicurative.",
    icona: ShieldCheck,
    paragrafi: [
      "L'assistenza sanitaria integrativa può prevedere il rimborso totale o parziale di visite, terapie e percorsi riabilitativi. In molti casi è collegata al contratto di lavoro, all'iscrizione a un albo professionale o a una polizza privata.",
      "Prima di prenotare, contatta il fondo o la compagnia per conoscere prestazioni comprese, massimali e procedura prevista. Comunica poi alla segreteria la convenzione di riferimento e gli estremi dell'eventuale autorizzazione.",
      "Le modalità operative possono variare anche all'interno della stessa compagnia: la presenza del marchio non sostituisce la verifica della copertura personale e dell'eventuale autorizzazione.",
    ],
    documentiTitolo: "Controlli utili",
    documenti: [
      "Prestazioni comprese nella copertura.",
      "Autorizzazione preventiva, se richiesta.",
      "Documenti necessari per l'accesso o il rimborso.",
      "Eventuali franchigie, massimali e scadenze.",
    ],
    nota: "Condizioni e procedure cambiano da un fondo all'altro: verifica sempre la copertura prima di iniziare una prestazione.",
  },
];

/** Corpo dettagliato di una modalità di accesso (condiviso tra mobile e desktop). */
function DettaglioAccesso({ a }: { a: Accesso }) {
  return (
    <div>
      <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
        {a.paragrafi.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-white p-5 shadow-fkt-1">
        <h4 className="flex items-center gap-2 text-sm font-bold text-blu">
          <FileText className="h-4 w-4 text-azzurro" /> {a.documentiTitolo}
        </h4>
        <ul className="mt-3 space-y-2 text-sm text-foreground/80">
          {a.documenti.map((d) => (
            <li key={d} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azzurro" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 flex gap-2 rounded-xl border-l-4 border-[#2279b0] bg-white p-4 text-sm text-muted-foreground">
        <span>
          <strong className="text-blu">Prima di iniziare:</strong> {a.nota}
        </span>
      </p>
    </div>
  );
}

export default function Convenzioni() {
  const [aperta, setAperta] = useState<string | null>(null);
  const selezionata = ACCESSO.find((a) => a.slug === aperta) ?? null;

  return (
    <>
      <Seo title="Convenzioni | FKT Matera" description="FKT Matera è convenzionato con SSN, INAIL e le principali assicurazioni e fondi sanitari: scopri iter e documenti per accedere alle cure." />
      {/* Intestazione pagina */}
      <PageHero
        label="Convenzioni"
        title="Accesso alle cure, in convenzione."
        subtitle="Il centro è convenzionato con il Servizio Sanitario Nazionale, con l'INAIL e con le principali assicurazioni e fondi sanitari, per rendere i percorsi riabilitativi più accessibili."
      />

      {/* Le nostre convenzioni — livello ghiaccio + texture */}
      <section className="bg-ghiaccio texture-dots">
        <div className="container-fkt py-16 sm:py-20">
        <Reveal>
          <h2 className="h-section font-extrabold text-blu">Le nostre convenzioni</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Enti, assicurazioni e fondi con cui il centro collabora per l'accesso alle prestazioni.
          </p>
          <div className="dashed-divider mt-6 max-w-xs" aria-hidden="true" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CONVENZIONI.map((c, i) => (
            <Reveal key={c.nome} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div
                className="hover-lift flex h-24 items-center justify-center rounded-2xl bg-white px-6 ring-1 ring-border"
                title={c.nome}
              >
                <img
                  src={c.logo}
                  alt={`Logo ${c.nome}`}
                  className="max-h-11 w-auto max-w-[150px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* Come accedere alle cure — livello bianco pieno, senza bordi meccanici */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-fkt py-16 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">
              <span aria-hidden="true" className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-azzurro" />
              Iter e documenti
            </p>
            <h2 className="mt-3 h-section font-extrabold text-blu">
              Come accedere alle cure
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Le tre modalità di accesso alle prestazioni, con i passaggi e i documenti utili per
              ciascun percorso.
            </p>
            <p className="mt-6 text-sm font-semibold text-blu">
              Seleziona la tua modalità di accesso per scoprire l'iter completo.
            </p>
          </Reveal>

          <div className="mt-6 grid gap-6 lg:hidden">
            {ACCESSO.map((a) => {
              const Icona = a.icona;
              const isOpen = aperta === a.slug;
              const contentId = `accesso-dettagli-${a.slug}`;
              return (
                <article
                  key={a.slug}
                  className={`rounded-2xl bg-ghiaccio transition-shadow duration-300 ${
                    isOpen
                      ? "shadow-fkt-3 ring-2 ring-[#2279b0]"
                      : "shadow-fkt-2 ring-1 ring-border hover:shadow-fkt-3"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setAperta(isOpen ? null : a.slug)}
                    className="flex w-full flex-col rounded-2xl p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2279b0] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {a.logo ? (
                        <img
                          src={a.logo}
                          alt={a.logoAlt}
                          className="max-h-10 max-w-[8rem] object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                          <Icona className="h-6 w-6 text-azzurro" />
                        </div>
                      )}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-azzurro transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-blu">{a.titolo}</h3>
                    <p className="mt-1 text-sm font-semibold text-azzurro">{a.sottotitolo}</p>

                    <span
                      className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                        isOpen ? "text-[#2279b0]" : "text-blu/70"
                      }`}
                    >
                      {isOpen ? "Chiudi l'iter" : "Scopri l'iter"}
                    </span>
                  </button>

                  <div
                    id={contentId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 pb-6 transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <DettaglioAccesso a={a} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Versione desktop: selettore a schede + pannello dettagli */}
          <div className="mt-6 hidden lg:block">
            <div className="grid grid-cols-3 gap-6" role="tablist" aria-label="Modalità di accesso">
              {ACCESSO.map((a, i) => {
                const Icona = a.icona;
                const isOpen = aperta === a.slug;
                return (
                  <button
                    key={a.slug}
                    type="button"
                    role="tab"
                    aria-selected={isOpen}
                    onClick={() => setAperta(isOpen ? null : a.slug)}
                    className={`flex flex-col rounded-2xl bg-ghiaccio p-6 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#2279b0] focus-visible:ring-offset-2 ${
                      isOpen
                        ? "shadow-fkt-3 ring-2 ring-[#2279b0]"
                        : "shadow-fkt-2 ring-1 ring-border hover:shadow-fkt-3 hover:ring-[#2279b0]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      {a.logo ? (
                        <img src={a.logo} alt={a.logoAlt} className="max-h-9 max-w-[6.5rem] object-contain" loading="lazy" decoding="async" />
                      ) : (
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                          <Icona className="h-5 w-5 text-azzurro" />
                        </span>
                      )}
                      <span className="font-mono text-xs tracking-[0.25em] text-azzurro/70" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-4 block font-extrabold text-blu leading-snug">{a.titolo}</span>
                    <span className="mt-2 flex items-center justify-between gap-2 text-xs font-semibold text-azzurro">
                      {isOpen ? "Nascondi l'iter" : "Scopri l'iter"}
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {selezionata && (
              <div
                key={selezionata.slug}
                className="fade-slide-in mt-6 rounded-2xl bg-ghiaccio p-8 shadow-fkt-1 ring-1 ring-[#2279b0]/40"
                role="tabpanel"
              >
                <h3 className="text-xl font-extrabold text-blu">{selezionata.titolo}</h3>
                <p className="mt-1 text-sm font-semibold text-azzurro">{selezionata.sottotitolo}</p>
                <div className="mt-5">
                  <DettaglioAccesso a={selezionata} />
                </div>
              </div>
            )}
          </div>

          {/* Nota informativa */}
          <Reveal>
            <div className="relative mt-10 flex flex-col gap-3 rounded-2xl bg-ghiaccio p-6 sm:flex-row sm:items-center sm:gap-5 sm:p-8">
              <CornerBrackets />
              <Info className="h-6 w-6 shrink-0 text-azzurro" />
              <p className="text-sm leading-relaxed text-foreground/80">
              Le condizioni di accesso possono variare in base all'ente o alla compagnia di
              riferimento. Per verificare la tua copertura o la tua pratica, contatta la segreteria
              al numero{" "}
              <a href={SITE.telefonoHref} className="font-semibold text-blu hover:text-azzurro">
                {SITE.telefono}
              </a>{" "}
              o scrivi a{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-blu hover:text-azzurro"
              >
                {SITE.email}
              </a>
              .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA finale — variante fotografica (ingresso sede + overlay blu) */}
      <CtaBand
        variant="fotografica"
        image="/assets/sede-ingresso.webp"
        title="Hai dubbi sulla tua convenzione?"
        text="La segreteria verifica con te requisiti, documenti e tempi di accesso."
      />
    </>
  );
}
