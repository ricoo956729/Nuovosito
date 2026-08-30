import { Link } from "react-router";
import { Phone, MessageCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import { SITE, AREE_SERVIZI, CONVENZIONI } from "@/lib/site-data";
import { NumeriDelCentro } from "@/sections/NumeriDelCentro";
import { Seo } from "@/components/Seo";


export default function Home() {
  return (
    <>
      <Seo title="FKT Matera | Fisioterapia e rieducazione funzionale" description="Ambulatorio di fisioterapia e rieducazione funzionale a Matera dal 1995. Percorsi personalizzati per dolore, recupero del movimento e prestazioni fisiatriche." />
      {/* HERO full-width — variante fotografica (trattamento) */}
      <section className="relative overflow-hidden bg-ghiaccio">
        {/* foto trattamento: solo desktop */}
        <img
          src="/assets/hero-trattamento-1.jpg"
          alt="Trattamento fisioterapico del rachide cervicale"
          className="absolute inset-0 hidden h-full w-full object-cover object-right sm:block"
        />
        {/* velatura chiara da sinistra: solo desktop */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/85 to-white/10 sm:block"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-white/70 to-transparent sm:block"
        />
        {/* forme decorative: solo mobile */}
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-azzurro/10 sm:hidden" />
        <div aria-hidden className="pointer-events-none absolute top-1/2 -left-16 h-48 w-48 rounded-full bg-blu/5 sm:hidden" />
        <div aria-hidden className="pointer-events-none absolute bottom-8 right-10 h-16 w-16 rounded-full border-8 border-azzurro/15 sm:hidden" />

        <div className="relative container-fkt flex min-h-[80vh] sm:min-h-[78vh] flex-col justify-center py-14 sm:py-20">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-azzurro shadow-sm ring-1 ring-border">
              Fisioterapia a Matera dal {SITE.dal}
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-[1.08] text-blu">
              Il movimento è la cura.{" "}
              <span className="text-azzurro">Noi ti rimettiamo in moto.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70">{SITE.descrizione}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={SITE.telefonoHref}
                className="inline-flex items-center gap-2 rounded-full bg-azzurro px-7 py-3.5 font-semibold text-white shadow-lg shadow-azzurro/30 transition hover:brightness-110"
              >
                <Phone className="h-4 w-4" /> Prenota una valutazione
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-7 py-3.5 font-semibold text-blu shadow-sm ring-1 ring-border backdrop-blur transition hover:bg-white"
              >
                <MessageCircle className="h-4 w-4 text-azzurro" /> Scrivici su WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm font-medium text-muted-foreground">
              {SITE.indirizzo.via}, {SITE.indirizzo.citta} · {SITE.orari}
            </p>
          </div>
        </div>
      </section>

      <NumeriDelCentro />

      {/* Tre aree di prestazioni */}
      <section className="container-fkt py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">I servizi</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-blu">
            Tre aree per orientarti rapidamente.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ogni percorso parte da una valutazione accurata: scopri l'area più adatta alle tue esigenze.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {AREE_SERVIZI.map((area) => (
            <Link
              key={area.slug}
              to={`/servizi#${area.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border transition hover:shadow-xl hover:ring-primary/40"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={area.immagine}
                  alt={area.titolo}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blu">{area.titolo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{area.descrizione}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro">
                  Scopri l'area <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Striscia convenzioni */}
      <section className="bg-white border-y border-border">
        <div className="container-fkt py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">Convenzioni</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-blu">
                Accesso agevolato alle cure.
              </h2>
            </div>
            <Link to="/convenzioni" className="inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro hover:underline">
              Tutte le convenzioni <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {CONVENZIONI.map((c) => (
              <div key={c.nome} className="flex h-16 items-center justify-center rounded-xl bg-ghiaccio px-4">
                <img src={c.logo} alt={c.nome} className="max-h-10 max-w-[140px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner contatti */}
      <section className="bg-blu text-white">
        <div className="container-fkt py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold">Prenota una valutazione o chiedi informazioni.</h2>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-white/80 text-sm">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {SITE.indirizzo.via}, {SITE.indirizzo.citta}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {SITE.orari}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.telefonoHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> {SITE.telefono}
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Vai ai contatti <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
