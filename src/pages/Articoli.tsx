import { Link } from "react-router";
import { ArrowRight, Clock3 } from "lucide-react";
import { Seo } from "@/components/Seo";

export default function Articoli() {
  return (
    <>
      <Seo
        title="Articoli e approfondimenti | FKT Matera"
        description="Approfondimenti su fisioterapia, terapie strumentali e riabilitazione a cura del centro FKT Matera."
      />

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

      <section className="container-fkt py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/articoli/tecarterapia-cos-e-benefici-quando-utile"
            className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border transition hover:shadow-xl hover:ring-[#2279b0]/40"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="/assets/terapie-strumentali/diatermia-1.webp"
                alt="Seduta di tecarterapia"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-azzurro">
                Terapie strumentali
              </span>
              <h2 className="mt-2 text-lg font-bold text-blu leading-snug">
                Tecarterapia: cos'è, benefici e quando può essere utile
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Come funziona la TECAR, quali benefici può offrire e in quali situazioni può essere
                presa in considerazione in un percorso fisioterapico.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro">
                Leggi l'articolo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-2xl bg-ghiaccio p-6 text-sm text-muted-foreground">
          <Clock3 className="h-5 w-5 shrink-0 text-azzurro" />
          Nuovi approfondimenti sono in arrivo: stiamo preparando altri articoli su terapie e
          riabilitazione.
        </div>
      </section>
    </>
  );
}
