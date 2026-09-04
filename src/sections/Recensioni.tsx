import { Star } from "lucide-react";
import { RECENSIONI } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

function Stelle() {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label="5 stelle su 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden="true" className="h-4 w-4 fill-azzurro text-azzurro" />
      ))}
    </div>
  );
}

/** Sezione "Dicono di noi" — recensioni Google reali, griglia masonry-like. */
export function Recensioni() {
  return (
    <section aria-label="Dicono di noi — recensioni Google" className="bg-white">
      <div className="container-fkt py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">
            Le recensioni
          </p>
          <h2 className="mt-3 h-section font-extrabold text-blu">
            Dicono di noi.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Valutazione media 4,8 su 5 nelle recensioni Google: la fiducia di chi si è
            affidato ai nostri terapisti, raccontata con le loro parole.
          </p>
        </div>

        {/* Griglia sfalsata masonry-like: le card hanno lunghezze diverse,
            le colonne CSS le valorizzano senza forzare altezze uniformi */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2">
          {RECENSIONI.map((r, i) => (
            <Reveal
              key={r.nome}
              delay={(i % 4) as 0 | 1 | 2 | 3}
              className="mb-6 break-inside-avoid"
            >
              <figure className="rounded-2xl bg-white p-6 shadow-fkt-2 ring-1 ring-border">
                <Stelle />
                <blockquote className="mt-4 text-foreground/80 leading-relaxed">
                  <p>&ldquo;{r.testo}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  {/* Avatar a iniziali (decorativo: il nome è riportato accanto) */}
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azzurro/10 font-[Manrope] text-base font-extrabold text-azzurro"
                  >
                    {r.nome.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-blu">{r.nome}</span>
                    <span className="block text-sm text-muted-foreground">{r.data}</span>
                  </span>
                  <span className="ml-auto inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold text-muted-foreground ring-1 ring-border">
                    Google
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
