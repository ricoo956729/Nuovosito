import { MapPin, Clock, Car, Bus } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CornerBrackets } from "@/components/CornerBrackets";

const SPAZI = [
  {
    src: "/assets/sala-corsi-ampia.jpg",
    alt: "La sala corsi del centro FKT Matera, ampia e luminosa",
    etichetta: "Sala corsi",
  },
  {
    src: "/assets/sala-corsi-specchi.webp",
    alt: "Area esercizi con specchi per la rieducazione posturale",
    etichetta: "Area esercizi",
  },
  {
    src: "/assets/sala-corsi-tappetini.webp",
    alt: "Tappetini per le attività di gruppo e l'esercizio terapeutico",
    etichetta: "Attività di gruppo",
  },
];

export default function IlCentro() {
  return (
    <>
      <Seo title="Il Centro | FKT Matera" description="La sede FKT a Matera in Vico dei Peuceti 22: dal 1995 fisioterapia e rieducazione funzionale. Orari, raggiungibilità e informazioni pratiche." />
      {/* Intestazione pagina */}
      <PageHero
        label="Il Centro"
        title="La sede FKT a Matera."
        subtitle={
          <>
            Dal {SITE.dal} accompagniamo pazienti di ogni età con percorsi personalizzati di
            fisioterapia e rieducazione funzionale.
          </>
        }
      />

      {/* Sede: testo + foto ingresso */}
      <section className="container-fkt py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="h-section font-extrabold text-blu">
              Un punto di riferimento per la riabilitazione, dal {SITE.dal}.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Il Centro FKT si trova a Matera, in <strong>{SITE.indirizzo.via}</strong>. L'ingresso
              diretto è ben visibile dalla strada e riconoscibile dal logo FKT sulla vetrata. La sede
              è raggiungibile in auto e con i mezzi pubblici; nelle immediate vicinanze sono presenti
              aree di sosta e una fermata dell'autobus, comode anche per chi accompagna i pazienti.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              FKT è aperto dal lunedì al venerdì, dalle 08:00 alle 17:30, mentre il sabato e la
              domenica è chiuso. FKT fa parte dell'associazione <strong>Sanità Futura</strong>.
            </p>

            <blockquote className="relative mt-8 rounded-2xl border border-border bg-white p-6 shadow-fkt-1">
              <CornerBrackets />
              <p className="text-lg font-semibold text-blu italic">
                "La salute non è tutto, ma senza salute tutto è niente."
              </p>
              <footer className="mt-2 text-sm text-muted-foreground">— Arthur Schopenhauer</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={1}>
            <figure className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
              <img
                src="/assets/sede-ingresso.webp"
                alt="Ingresso della sede FKT Matera con logo sulla vetrata"
                width="1536"
                height="1024"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Gli spazi del centro — livello ghiaccio + texture */}
      <section className="bg-ghiaccio texture-dots">
        <div className="container-fkt py-16 sm:py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-azzurro">Gli spazi</p>
            <h2 className="mt-3 h-section font-extrabold text-blu">
              Ambienti pensati per la riabilitazione.
            </h2>
            <div className="dashed-divider mt-6 max-w-xs" aria-hidden="true" />
          </Reveal>
          {/* Layout editoriale asimmetrico: la prima foto occupa un'area doppia (2x2) su desktop */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPAZI.map((s, i) => (
              <Reveal
                key={s.src}
                delay={(i % 3) as 0 | 1 | 2}
                className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <figure className="group relative h-full overflow-hidden rounded-3xl shadow-fkt-1 ring-1 ring-border">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className={
                      "w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 " +
                      (i === 0 ? "h-64 lg:h-full" : "h-64")
                    }
                  />
                  {/* Caption: sempre visibile su mobile/touch, in hover dal basso su desktop */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blu/80 via-blu/40 to-transparent px-4 pb-3.5 pt-10 text-sm font-semibold text-white transition-all duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {s.etichetta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info pratiche */}
      <section className="container-fkt py-16 sm:py-20">
        <Reveal>
          <h2 className="h-section font-extrabold text-blu">Informazioni pratiche</h2>
          <div className="dashed-divider mt-6 max-w-xs" aria-hidden="true" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icona: MapPin,
              titolo: "Dove siamo",
              testo: `${SITE.indirizzo.via}, ${SITE.indirizzo.cap} ${SITE.indirizzo.citta} (${SITE.indirizzo.provincia})`,
            },
            {
              icona: Clock,
              titolo: "Orari",
              testo: "Lunedì–Venerdì 08:00–17:30 · Sabato e Domenica chiuso",
            },
            {
              icona: Car,
              titolo: "In auto",
              testo: "Aree di sosta nelle immediate vicinanze della sede.",
            },
            {
              icona: Bus,
              titolo: "Con i mezzi",
              testo: "Fermata dell'autobus a pochi passi, comoda anche per gli accompagnatori.",
            },
          ].map((info, i) => (
            <Reveal key={info.titolo} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="hover-lift h-full rounded-2xl bg-white p-6 ring-1 ring-border">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-azzurro-chiaro to-white ring-1 ring-azzurro/20 shadow-fkt-1">
                  <info.icona className="h-5 w-5 text-blu" />
                </span>
                <h3 className="mt-4 font-bold text-blu">{info.titolo}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{info.testo}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA finale — pattern sistematico */}
      <CtaBand
        eyebrow="Il centro"
        title="Vieni a trovarci in sede."
        text={`${SITE.indirizzo.via}, ${SITE.indirizzo.citta} · ${SITE.orari}`}
        actions={[{ label: "Contattaci", to: "/contatti" }]}
        footer={false}
      />
    </>
  );
}
