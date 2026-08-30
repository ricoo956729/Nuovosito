import { Link } from "react-router";
import { MapPin, Clock, Car, Bus, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";


export default function IlCentro() {
  return (
    <>
      <Seo title="Il Centro | FKT Matera" description="La sede FKT a Matera in Vico dei Peuceti 22: dal 1995 fisioterapia e rieducazione funzionale. Orari, raggiungibilità e informazioni pratiche." />
      {/* Intestazione pagina */}
      <section className="bg-ghiaccio border-b border-border">
        <div className="container-fkt py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">Il Centro</p>
          <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl font-extrabold text-blu">
            La sede FKT a Matera.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Dal {SITE.dal} accompagniamo pazienti di ogni età con percorsi personalizzati di
            fisioterapia e rieducazione funzionale.
          </p>
        </div>
      </section>

      {/* Sede: testo + foto ingresso */}
      <section className="container-fkt py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blu">
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

            <blockquote className="mt-8 rounded-2xl border-l-4 border-[#2279b0] bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-blu italic">
                "La salute non è tutto, ma senza salute tutto è niente."
              </p>
              <footer className="mt-2 text-sm text-muted-foreground">— Arthur Schopenhauer</footer>
            </blockquote>
          </div>

          <figure className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <img
              src="/assets/sede-ingresso.webp"
              alt="Ingresso della sede FKT Matera con logo sulla vetrata"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Info pratiche */}
      <section className="bg-white border-y border-border">
        <div className="container-fkt py-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blu">Informazioni pratiche</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-ghiaccio p-6">
              <MapPin className="h-6 w-6 text-azzurro" />
              <h3 className="mt-3 font-bold text-blu">Dove siamo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.indirizzo.via}, {SITE.indirizzo.cap} {SITE.indirizzo.citta} ({SITE.indirizzo.provincia})
              </p>
            </div>
            <div className="rounded-2xl bg-ghiaccio p-6">
              <Clock className="h-6 w-6 text-azzurro" />
              <h3 className="mt-3 font-bold text-blu">Orari</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Lunedì–Venerdì 08:00–17:30
                <br />
                Sabato e Domenica chiuso
              </p>
            </div>
            <div className="rounded-2xl bg-ghiaccio p-6">
              <Car className="h-6 w-6 text-azzurro" />
              <h3 className="mt-3 font-bold text-blu">In auto</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Aree di sosta nelle immediate vicinanze della sede.
              </p>
            </div>
            <div className="rounded-2xl bg-ghiaccio p-6">
              <Bus className="h-6 w-6 text-azzurro" />
              <h3 className="mt-3 font-bold text-blu">Con i mezzi</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fermata dell'autobus a pochi passi, comoda anche per gli accompagnatori.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-blu text-white">
        <div className="container-fkt py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Vieni a trovarci in sede.</h2>
            <p className="mt-2 text-white/80">
              {SITE.indirizzo.via}, {SITE.indirizzo.citta} · {SITE.orari}
            </p>
          </div>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition hover:bg-secondary"
          >
            Contattaci <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
