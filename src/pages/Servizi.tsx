import { Link, useLocation } from "react-router";
import { ArrowRight, Phone, Landmark, BriefcaseMedical, ShieldCheck } from "lucide-react";
import { SITE, MODALITA_ACCESSO } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { TerapieGrid } from "@/components/terapie/TerapieGrid";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useEffect } from "react";

type Trattamento = { titolo: string; descrizione: string; immagine: string };

type Area = {
  slug: string;
  titolo: string;
  descrizione: string;
  immagine: string;
  immagineAlt: string;
  trattamenti: Trattamento[];
};

const AREE: Area[] = [
  {
    slug: "terapie-manuali",
    titolo: "Terapie manuali",
    descrizione:
      "Trattamenti manuali, rieducazione ed esercizio terapeutico organizzati in percorsi progressivi, adattati alla persona e agli obiettivi funzionali.",
    immagine: "/assets/terapie-manuali/massoterapia-1.webp",
    immagineAlt: "Trattamento manuale profondo della muscolatura dorsale",
    trattamenti: [
      {
        titolo: "Rieducazione post-traumatica",
        immagine: "/assets/terapie-manuali/rieducazione-post-traumatica-1.webp",
        descrizione:
          "Percorsi riabilitativi dopo traumi, distorsioni, fratture o lesioni muscolo-articolari, finalizzati al recupero progressivo di mobilità, forza e sicurezza nel movimento.",
      },
      {
        titolo: "Massoterapia",
        immagine: "/assets/terapie-manuali/massoterapia-1.webp",
        descrizione:
          "Tecniche manuali applicate su muscoli, cute e tessuti molli con finalità terapeutica, antalgica e funzionale. Indicata per cervicalgia, lombalgia, contratture e rigidità muscolare.",
      },
      {
        titolo: "Metodo Mézières",
        immagine: "/assets/terapie-manuali/metodo-mezieres-1.webp",
        descrizione:
          "Approccio posturale globale basato su posture specifiche, lavoro respiratorio e allungamento delle catene muscolari.",
      },
      {
        titolo: "Linfodrenaggio",
        immagine: "/assets/terapie-manuali/linfodrenaggio-1.webp",
        descrizione:
          "Massaggio specifico che mobilizza i liquidi verso le zone in cui il sistema linfatico funziona correttamente, riducendo gonfiore, infiammazione e dolore.",
      },
      {
        titolo: "Rieducazione posturale di gruppo",
        immagine: "/assets/terapie-manuali/rieducazione-posturale-gruppo-1.webp",
        descrizione:
          "Tecniche di rieducazione globale svolte in gruppo, orientate alla consapevolezza corporea, al controllo posturale e alla mobilità globale.",
      },
      {
        titolo: "Rieducazione posturale individuale",
        immagine: "/assets/terapie-manuali/rieducazione-posturale-individuale-1.webp",
        descrizione:
          "Valutazione specifica e trattamento mirato sulle catene muscolari e sui compensi, per favorire il riequilibrio funzionale dell'apparato muscolo-scheletrico.",
      },
      {
        titolo: "Rieducazione post-operatoria",
        immagine: "/assets/terapie-manuali/rieducazione-post-operatoria-2.webp",
        descrizione:
          "Programmi riabilitativi successivi a interventi chirurgici, finalizzati al recupero progressivo di mobilità, forza, schema motorio e autonomia.",
      },
      {
        titolo: "Training deambulatorio e del passo",
        immagine: "/assets/terapie-manuali/training-deambulatorio-2.webp",
        descrizione:
          "Percorso di rieducazione al cammino e alla posizione eretta, con verticalizzazione progressiva, recupero del carico, uso degli ausili e lavoro su equilibrio e stabilità.",
      },
      {
        titolo: "Rieducazione funzionale cronica",
        immagine: "/assets/terapie-manuali/rieducazione-funzionale-cronica-1.webp",
        descrizione:
          "Percorsi per limitazioni persistenti, dolori ricorrenti e condizioni come artrosi, lombalgie o cervicalgie.",
      },
      {
        titolo: "Osteopatia",
        immagine: "/assets/terapie-manuali/osteopatia-1.webp",
        descrizione:
          "Approccio manuale complementare orientato alla persona e alle alterazioni funzionali che possono contribuire al dolore.",
      },
    ],
  },
  {
    slug: "terapie-strumentali",
    titolo: "Terapie strumentali",
    descrizione:
      "Tecnologie riabilitative integrate nel percorso fisioterapico, scelte in base alla valutazione clinica e agli obiettivi del trattamento.",
    immagine: "/assets/terapie-strumentali/diatermia-1.webp",
    immagineAlt: "Trattamento di diatermia eseguito dal fisioterapista",
    trattamenti: [
      {
        titolo: "Tecarterapia",
        immagine: "/assets/terapie-strumentali/tecarterapia-2.webp",
        descrizione:
          "Tecnologia INDIBA che stimola i processi biologici dei tessuti, favorisce biostimolazione, microcircolo e vasodilatazione, sostenendo il recupero funzionale.",
      },
      {
        titolo: "Laser YAG ad alta potenza",
        immagine: "/assets/terapie-strumentali/laser-yag-1.webp",
        descrizione:
          "Laserterapia ad alta potenza con azione antalgica e antinfiammatoria, utilizzata per dolore, edema, patologie inserzionali, tendinopatie e condizioni artrosiche.",
      },
      {
        titolo: "Taping",
        immagine: "/assets/terapie-strumentali/taping-1.webp",
        descrizione:
          "Applicazione di nastri adesivi elastici secondo la valutazione del fisioterapista, come supporto al movimento e alla gestione funzionale della zona trattata.",
      },
      {
        titolo: "Diatermia a onde corte e microonde",
        immagine: "/assets/terapie-strumentali/diatermia-2.webp",
        descrizione:
          "Terapia fisica che utilizza onde elettromagnetiche per produrre calore nei tessuti e supportare il trattamento di dolore, rigidità e contratture.",
      },
      {
        titolo: "Pressoterapia",
        immagine: "/assets/terapie-strumentali/pressoterapia-2.webp",
        descrizione:
          "Apparecchiature a pressione pneumatica che favoriscono il drenaggio e sostengono la circolazione periferica a livello venoso, linfatico e interstiziale.",
      },
      {
        titolo: "Ultrasuoni",
        immagine: "/assets/terapie-strumentali/ultrasuoni-2.webp",
        descrizione:
          "Energia meccanica basata su vibrazioni ad alta frequenza, con effetti termici e non termici, per supportare la guarigione e il recupero dei tessuti.",
      },
      {
        titolo: "Crioultrasuonoterapia",
        immagine: "/assets/terapie-strumentali/crioultrasuono-2.webp",
        descrizione:
          "Tecnologia Cryosound che combina crioterapia e ultrasuonoterapia, riducendo l'effetto termico e valorizzando l'effetto meccanico quando indicato.",
      },
      {
        titolo: "Elettroterapia antalgica",
        immagine: "/assets/terapie-strumentali/elettroterapia-antalgica-1.webp",
        descrizione:
          "Stimolazione elettrica transcutanea utilizzata come supporto nei percorsi dedicati alla modulazione del dolore, secondo valutazione.",
      },
      {
        titolo: "Elettrostimolazione",
        immagine: "/assets/terapie-strumentali/elettrostimolazione-1.webp",
        descrizione:
          "Impulsi elettrici controllati per favorire l'attivazione muscolare, impiegati come supporto nei percorsi di recupero funzionale.",
      },
      {
        titolo: "Magnetoterapia",
        immagine: "/assets/terapie-strumentali/magnetoterapia-1.webp",
        descrizione:
          "Campi magnetici pulsati a bassa frequenza e intensità, mirati a ridurre dolore, infiammazione ed edema favorendo la riparazione tissutale.",
      },
    ],
  },
  {
    slug: "visite-fisiatriche",
    titolo: "Visite fisiatriche e prestazioni specialistiche",
    descrizione:
      "Valutazione specialistica e prestazioni mediche mirate, per inquadrare il problema e definire il percorso riabilitativo più indicato.",
    immagine: "/assets/prestazioni-specialistiche/visita-fisiatrica-1.webp",
    immagineAlt: "Visita fisiatrica presso il centro FKT Matera",
    trattamenti: [
      {
        titolo: "Visita fisiatrica",
        immagine: "/assets/prestazioni-specialistiche/visita-fisiatrica-1.webp",
        descrizione:
          "Valutazione specialistica dedicata all'inquadramento del dolore, delle limitazioni del movimento, degli esiti di traumi o interventi chirurgici.",
      },
      {
        titolo: "Onde d'urto focali",
        immagine: "/assets/prestazioni-specialistiche/onde-urto-focali-2.webp",
        descrizione:
          "Onde acustiche ad alta energia utilizzate per il trattamento di specifiche patologie muscolo-scheletriche, su indicazione dello specialista.",
      },
      {
        titolo: "Infiltrazioni articolari",
        immagine: "/assets/prestazioni-specialistiche/infiltrazioni-articolari-1.webp",
        descrizione:
          "Procedure eseguite dallo specialista in casi selezionati, con l'obiettivo di agire localmente su dolore e infiammazione.",
      },
      {
        titolo: "Ossigeno-ozonoterapia",
        immagine: "/assets/prestazioni-specialistiche/ossigeno-ozonoterapia-1.webp",
        descrizione:
          "Prestazione medica proposta in determinate condizioni dolorose e infiammatorie, sempre dopo valutazione specialistica.",
      },
    ],
  },
];

const ICONE_ACCESSO = [Landmark, BriefcaseMedical, ShieldCheck];

export default function Servizi() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Lo scroll va ritardato: le immagini delle sezioni si caricano dopo
      // il primo render e spostano il layout. Riproviamo più volte.
      const timers = [150, 500, 1000].map((delay) =>
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, delay)
      );
      return () => timers.forEach(clearTimeout);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Seo title="Servizi e prestazioni | FKT Matera" description="Terapie manuali, terapie strumentali e visite fisiatriche a Matera: scopri le prestazioni del centro FKT." />
      {/* Intestazione pagina */}
      <PageHero
        label="Servizi"
        title="Le prestazioni del centro FKT."
        subtitle="Terapie manuali, terapie strumentali e visite fisiatriche: tre aree di intervento coordinate in un unico percorso di cura."
      />

      {/* Intro approccio */}
      <section className="container-fkt py-14 sm:py-16">
        <Reveal>
        <p className="max-w-3xl text-lg text-foreground/80 leading-relaxed">
          Ogni percorso inizia da una valutazione accurata della persona: ascoltiamo la storia
          clinica, analizziamo il movimento e definiamo insieme gli obiettivi. Da qui costruiamo un
          piano di trattamento personalizzato, aggiornato passo dopo passo in base ai progressi.
        </p>
        </Reveal>
      </section>

      {/* Aree di servizio */}
      {AREE.map((area, i) => (
        <section
          key={area.slug}
          id={area.slug}
          className={"scroll-mt-24 border-t border-border " + (i % 2 === 0 ? "bg-white" : "bg-ghiaccio")}
        >
          <div className="container-fkt py-16 sm:py-20">
            <Reveal>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-azzurro">
                    Area {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blu">{area.titolo}</h2>
                  <div className="dashed-divider mt-5 max-w-[8rem]" aria-hidden="true" />
                  <p className="mt-4 text-foreground/80 leading-relaxed">{area.descrizione}</p>
                </div>
                <figure
                  className={
                    "overflow-hidden rounded-3xl shadow-xl ring-1 ring-border " +
                    (i % 2 === 1 ? "lg:order-1" : "")
                  }
                >
                  <img
                    src={area.immagine}
                    alt={area.immagineAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-64 sm:h-80 w-full object-cover"
                  />
                </figure>
              </div>
            </Reveal>

            <TerapieGrid
              trattamenti={area.trattamenti}
              immagineArea={area.immagine}
              areaSlug={area.slug}
            />
          </div>
        </section>
      ))}

      {/* Come accedere */}
      <section className="border-t border-border bg-white">
        <div className="container-fkt py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blu">Come accedere alle prestazioni</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Il centro è convenzionato e offre diverse modalità di accesso alle cure.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {MODALITA_ACCESSO.map((m, i) => {
              const Icona = ICONE_ACCESSO[i] ?? Landmark;
              return (
                <Reveal key={m.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="hover-lift h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ghiaccio">
                      <Icona className="h-5 w-5 text-azzurro" />
                    </span>
                    <h3 className="mt-4 font-bold text-blu">{m.titolo}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.descrizione}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Link
            to="/convenzioni"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blu px-6 py-3 font-semibold text-white transition hover:bg-azzurro"
          >
            Scopri tutte le convenzioni <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA finale */}
      <section
        className="relative overflow-hidden bg-blu text-white"
        style={{
          backgroundImage: 'linear-gradient(135deg, #082a4a 0%, #0d3a5c 50%, #082a4a 100%)'
        }}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)'
          }}
        />
        <div className="container-fkt relative py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Non sai quale trattamento fa per te?</h2>
            <p className="mt-2 text-white/80">
              Parla con il nostro team: ti guideremo verso il percorso più indicato.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.telefonoHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition hover:bg-azzurro hover:text-white"
            >
              <Phone className="h-4 w-4" /> {SITE.telefono}
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contattaci <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
