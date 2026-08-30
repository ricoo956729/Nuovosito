import { Link } from "react-router";
import { ArrowRight, Clock3, BookOpen } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function Articoli() {
  return (
    <>
      <Seo
        title="Articoli e approfondimenti | FKT Matera"
        description="Approfondimenti su fisioterapia, terapie strumentali e riabilitazione a cura del centro FKT Matera."
      />

      {/* Intestazione pagina */}
      <section className="bg-ghiaccio border-b border-border">
        <div className="container-fkt py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">Articoli</p>
          <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl font-extrabold text-blu">
            Approfondimenti dalla fisioterapia.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Guide e spiegazioni sui trattamenti e sui percorsi riabilitativi, scritte dal nostro
            team per aiutarti a orientarti.
          </p>
        </div>
      </section>

      {/* Articolo in evidenza */}
      <section className="container-fkt py-16 sm:py-20">
        <Link
          to="/articoli/tecarterapia-cos-e-benefici-quando-utile"
          className="group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border transition hover:shadow-xl hover:ring-azzurro/40 md:grid-cols-2"
        >
          <div className="relative overflow-hidden bg-white">
            <img
              src="/assets/terapie-strumentali/tecarterapia-1.webp"
              alt="Apparecchiatura per tecarterapia INDIBA in uso presso FKT Matera"
              className="h-64 w-full object-contain p-6 transition duration-500 group-hover:scale-105 md:h-full"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-full bg-blu px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              In evidenza
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wide text-azzurro">
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

        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-ghiaccio p-6 text-sm text-muted-foreground">
          <Clock3 className="h-5 w-5 shrink-0 text-azzurro" />
          Nuovi approfondimenti sono in arrivo: stiamo preparando altri articoli su terapie e
          riabilitazione.
        </div>
      </section>
    </>
  );
}
