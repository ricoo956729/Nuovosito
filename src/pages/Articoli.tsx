import { Link } from "react-router";
import { ArrowRight, Clock3, BookOpen } from "lucide-react";
import { AREE_SERVIZI } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";

export default function Articoli() {
  return (
    <>
      <Seo
        title="Articoli e approfondimenti | FKT Matera"
        description="Approfondimenti su fisioterapia, terapie strumentali e riabilitazione a cura del centro FKT Matera."
      />

      {/* Intestazione pagina */}
      <PageHero
        label="Articoli"
        title="Approfondimenti dalla fisioterapia."
        subtitle="Guide e spiegazioni sui trattamenti e sui percorsi riabilitativi, scritte dal nostro team per aiutarti a orientarti."
      />

      {/* Articolo in evidenza */}
      <section className="container-fkt py-16 sm:py-20">
        <Reveal>
          <Link
            to="/articoli/tecarterapia-cos-e-benefici-quando-utile"
            className="group grid overflow-hidden rounded-3xl bg-white shadow-fkt-2 ring-1 ring-border transition duration-300 hover:shadow-fkt-3 hover:ring-azzurro/40 md:grid-cols-2"
          >
            <div className="relative overflow-hidden">
              <img
                src="/assets/terapie-strumentali/tecarterapia-1.webp"
                alt="Apparecchiatura per tecarterapia INDIBA in uso presso FKT Matera"
                className="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105 md:h-full md:min-h-[320px]"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-blu px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-white pulse-dot" />
                In evidenza
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">
                Terapie strumentali
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blu leading-tight">
                Tecarterapia: cos'è, benefici e quando può essere utile
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Come funziona la TECAR, quali benefici può offrire e in quali situazioni può essere
                presa in considerazione in un percorso fisioterapico: dalle contratture alle
                tendinopatie, fino al recupero post-traumatico.
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" /> Lettura: 5 minuti
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro">
                Leggi l'articolo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white p-6 text-sm text-muted-foreground shadow-fkt-1 ring-1 ring-border">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-azzurro-chiaro to-white ring-1 ring-azzurro/20 shadow-fkt-1">
              <Clock3 className="h-5 w-5 text-blu" />
            </span>
            Nuovi approfondimenti sono in arrivo: stiamo preparando altri articoli su terapie e
            riabilitazione.
          </div>
        </Reveal>
      </section>

      {/* Rimando alle aree di cura — livello ghiaccio + texture */}
      <section className="bg-ghiaccio texture-dots">
        <div className="container-fkt py-16 sm:py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-azzurro">Dal blog ai trattamenti</p>
            <h2 className="mt-3 h-section font-extrabold text-blu">
              Esplora le aree di cura del centro.
            </h2>
            <div className="dashed-divider mt-6 max-w-xs" aria-hidden="true" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {AREE_SERVIZI.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link
                  to={`/servizi#${area.slug}`}
                  className="group block h-full rounded-3xl bg-ghiaccio p-4 pb-6 shadow-fkt-2 ring-1 ring-border transition-all duration-300 hover:shadow-fkt-3 hover:-translate-y-1 hover:ring-primary/20"
                >
                  {/* Immagine che sborda dal bordo superiore + badge numerico, come in Home */}
                  <div className="relative -mt-9">
                    <div className="h-40 overflow-hidden rounded-2xl bg-white shadow-fkt-2">
                      <img
                        src={area.immagine}
                        alt={area.titolo}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 right-3 flex h-9 items-center rounded-full bg-blu px-3.5 text-sm font-extrabold tracking-wider text-white shadow-fkt-3 ring-2 ring-white"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="px-2 pt-6">
                    <h3 className="text-lg font-bold text-blu">{area.titolo}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro group-hover:text-blu transition-colors duration-300">
                      Scopri l'area <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale — pattern sistematico */}
      <CtaBand
        eyebrow="Articoli e approfondimenti"
        title="Fai il primo passo. Al resto pensiamo noi."
        text="Una valutazione per capire il problema e il percorso più adatto: chiamaci o scrivici su WhatsApp."
      />
    </>
  );
}
