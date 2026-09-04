import { useRef } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import { SITE, AREE_SERVIZI, CONVENZIONI } from "@/lib/site-data";
import { NumeriDelCentro } from "@/sections/NumeriDelCentro";
import { Recensioni } from "@/sections/Recensioni";
import { Seo } from "@/components/Seo";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <>
      <Seo title="FKT Matera | Fisioterapia e rieducazione funzionale" description="Ambulatorio di fisioterapia e rieducazione funzionale a Matera dal 1995. Percorsi personalizzati per dolore, recupero del movimento e prestazioni fisiatriche." />
      {/* HERO full-width — variante fotografica (trattamento) */}
      <section ref={heroRef} className="relative overflow-hidden bg-ghiaccio">
        {/* foto trattamento: solo desktop, con parallasse leggero (disattivato se prefers-reduced-motion) */}
        {reduceMotion ? (
          <img
            src="/assets/hero-trattamento-1.webp"
            srcSet="/assets/hero-trattamento-1-mobile.webp 768w, /assets/hero-trattamento-1.webp 1366w"
            sizes="100vw"
            alt="Trattamento fisioterapico del rachide cervicale"
            width="1366"
            height="768"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 hidden h-full w-full object-cover object-right sm:block"
          />
        ) : (
          <motion.div
            className="absolute inset-0 hidden sm:block"
            style={{ y: heroImageY }}
          >
            <img
              src="/assets/hero-trattamento-1.webp"
              srcSet="/assets/hero-trattamento-1-mobile.webp 768w, /assets/hero-trattamento-1.webp 1366w"
              sizes="100vw"
              alt="Trattamento fisioterapico del rachide cervicale"
              width="1366"
              height="768"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full scale-110 object-cover object-right"
            />
          </motion.div>
        )}
        {/* Overlay direzionale: copre il lato del testo, lascia visibile la foto a destra */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-r from-[#f2f7fa] from-45% via-[#f2f7fa]/80 via-60% to-transparent sm:block"
        />
        {/* Gradient bottom ridotto: morbida transizione verso la sezione successiva */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 hidden h-20 bg-gradient-to-t from-[#f2f7fa] to-transparent sm:block"
        />
        {/* Pattern onda mobile — sostituisce cerchi generici */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 w-[300px] h-[300px] opacity-20 sm:hidden"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(34,121,176,0.15) 0%, transparent 70%)'
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full h-24 sm:hidden"
          style={{
            background: 'linear-gradient(to top, rgba(242,247,250,1) 0%, transparent 100%)'
          }}
        />

        <div className="relative container-fkt flex min-h-[80vh] sm:min-h-[78vh] flex-col justify-center py-14 sm:py-20">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-azzurro">
              Fisioterapia a Matera dal {SITE.dal}
            </span>
            <h1 className="mt-6 h-display font-extrabold leading-[1.1] tracking-tight text-blu">
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
          <h2 className="mt-3 h-section font-extrabold text-blu">
            Tre aree per orientarti rapidamente.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ogni percorso parte da una valutazione accurata: scopri l'area più adatta alle tue esigenze.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AREE_SERVIZI.map((area) => (
            <Link
              key={area.slug}
              to={`/servizi#${area.slug}`}
              className="group rounded-3xl bg-white p-4 pb-6 shadow-fkt-2 transition-all duration-300 hover:shadow-fkt-3 hover:-translate-y-1 hover:ring-2 hover:ring-primary/20"
            >
              {/* Immagine che sborda dal bordo superiore della card */}
              <div className="-mt-10">
                <div className="h-48 overflow-hidden rounded-2xl shadow-fkt-2">
                  <img
                    src={area.immagine}
                    alt={area.titolo}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="px-2 pt-6">
                <h3 className="text-xl font-bold text-blu">{area.titolo}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{area.descrizione}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro group-hover:text-blu transition-colors duration-300">
                  Scopri l'area <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Striscia convenzioni: livello "ghiaccio + texture", senza bordi meccanici */}
      <section className="bg-ghiaccio texture-dots">
        <div className="container-fkt py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">Convenzioni</p>
              <h2 className="mt-2 h-section font-extrabold text-blu">
                Accesso agevolato alle cure.
              </h2>
            </div>
            <Link to="/convenzioni" className="inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro hover:text-blu transition-colors duration-300">
              Tutte le convenzioni <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Marquee a scorrimento infinito (CSS puro): lista duplicata per il loop seamless.
              Pausa in hover via .marquee-pause; con prefers-reduced-motion l'animazione
              è disattivata e la riga diventa scrollabile orizzontalmente (.marquee-viewport). */}
          <div className="marquee-pause marquee-viewport mt-10">
            {/* pr-4 = una gap extra finale, così -50% della larghezza coincide
                esattamente con l'inizio della seconda copia (loop senza salti) */}
            <div className="flex w-max animate-marquee items-center gap-4 pr-4">
              {[...CONVENZIONI, ...CONVENZIONI].map((c, i) => (
                <div
                  key={`${c.nome}-${i}`}
                  aria-hidden={i >= CONVENZIONI.length || undefined}
                  className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white px-6 ring-1 ring-border shadow-fkt-1"
                >
                  <img
                    src={c.logo}
                    alt={i < CONVENZIONI.length ? c.nome : ""}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto max-w-[140px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recensioni Google — sezione bianca tra convenzioni (ghiaccio) e CTA (scura) */}
      <Recensioni />

      {/* Banner contatti — banda contenuta e arrotondata, distinta dal footer */}
      <section className="pb-20 pt-4">
        <div className="container-fkt">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-azzurro to-blu px-8 py-12 text-white shadow-fkt-3 sm:flex-row sm:items-center sm:px-12">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Prenota una valutazione o chiedi informazioni.
              </h2>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {SITE.indirizzo.via}, {SITE.indirizzo.citta}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {SITE.orari}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
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
                <ArrowRight className="h-4 w-4" /> Vai ai contatti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
