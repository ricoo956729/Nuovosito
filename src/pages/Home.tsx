import { useRef, type CSSProperties } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import { SITE, AREE_SERVIZI, CONVENZIONI } from "@/lib/site-data";
import { NumeriDelCentro } from "@/sections/NumeriDelCentro";
import { Recensioni } from "@/sections/Recensioni";
import { Seo } from "@/components/Seo";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Foto della sala come background CSS: la mask dissolve il bordo sinistro
  // nel fondo ghiaccio; scale-110 (applicata al wrapper motion) dà margine
  // al parallasse senza scoprire i bordi.
  const heroBgStyle: CSSProperties = {
    backgroundImage: "url(/assets/hero-sala-corsi.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    maskImage: "linear-gradient(to right, transparent, black 42%)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 42%)",
  };

  return (
    <>
      <Seo title="FKT Matera | Fisioterapia e rieducazione funzionale" description="Ambulatorio di fisioterapia e rieducazione funzionale a Matera dal 1995. Percorsi personalizzati per dolore, recupero del movimento e prestazioni fisiatriche." />
      {/* HERO — la foto reale della sala corsi come elemento di punta.
          Desktop: immagine full-height a destra, fusa nel fondo ghiaccio via
          mask-image (background su div: con display:none sotto sm NON viene
          scaricata, a differenza di <img hidden>). Mobile: card fotografica
          sotto il testo. Parallasse leggero via framer-motion, disattivato
          con prefers-reduced-motion. Badge recensioni in vetro sopra la foto. */}
      <section ref={heroRef} className="relative overflow-hidden bg-ghiaccio">
        {/* Immagine desktop: full-bleed a destra, bordo sinistro dissolto */}
        {reduceMotion ? (
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 hidden w-[56%] sm:block"
            style={heroBgStyle}
          />
        ) : (
          <motion.div
            aria-hidden
            className="absolute inset-y-0 right-0 hidden w-[56%] sm:block"
            style={{ y: heroImageY }}
          >
            <div className="h-full w-full scale-110" style={heroBgStyle} />
          </motion.div>
        )}
        {/* Velo di fusione: garantisce la leggibilità del testo e ammorbidisce il taglio */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ghiaccio via-ghiaccio/50 to-transparent to-45% sm:block"
        />
        {/* Bagliore azzurro decorativo, angolo alto a destra (solo mobile) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 w-[300px] h-[300px] opacity-20 sm:hidden"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(34,121,176,0.15) 0%, transparent 70%)'
          }}
        />

        <div className="relative container-fkt flex flex-col justify-center pb-14 pt-0 sm:min-h-[86vh] sm:py-20">
          {/* Banner fotografico in cima, full-bleed (solo mobile) */}
          <div className="relative -mx-4 order-first sm:hidden">
            <div className="h-[30vh] min-h-[220px] overflow-hidden">
              <img
              src="/assets/hero-sala-corsi-mobile.webp"
              alt="La sala corsi del centro FKT: tappetini blu e attrezzature per la rieducazione funzionale"
              width="1080"
              height="810"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            </div>
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Card testuale che si sovrappone al banner (solo mobile).
              Su mobile: compatta, senza label e senza badge recensioni
              (richiesto per ridurre l'ingombro). Su sm+ torna testo libero. */}
          <div className="relative z-10 -mt-12 max-w-xl rounded-3xl bg-white p-5 shadow-fkt-3 ring-1 ring-border sm:mt-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0">
            <span className="hidden items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-azzurro sm:inline-flex">
              <span aria-hidden className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-azzurro" />
              Fisioterapia a Matera dal {SITE.dal}
            </span>
            <h1 className="h-display font-extrabold leading-[1.1] tracking-tight text-blu sm:mt-6">
              Il movimento è la cura.{" "}
              <span className="text-azzurro">Noi ti rimettiamo in moto.</span>
            </h1>
            <p className="mt-3 text-base text-foreground/70 sm:mt-6 sm:text-lg">{SITE.descrizione}</p>
            <div className="mt-5 flex flex-wrap gap-3 sm:mt-9">
              <a
                href={SITE.telefonoHref}
                className="inline-flex items-center gap-2 rounded-full bg-azzurro px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-azzurro/30 transition hover:brightness-110 sm:px-7 sm:py-3.5 sm:text-base"
              >
                <Phone className="h-4 w-4" /> Prenota una valutazione
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-blu shadow-sm ring-1 ring-border backdrop-blur transition hover:bg-white sm:px-7 sm:py-3.5 sm:text-base"
              >
                <MessageCircle className="h-4 w-4 text-azzurro" /> Scrivici su WhatsApp
              </a>
            </div>
            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm font-medium text-muted-foreground sm:mt-8">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-azzurro" aria-hidden />
                {SITE.indirizzo.via}, {SITE.indirizzo.citta}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-azzurro" aria-hidden />
                {SITE.orari}
              </span>
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

      {/* CTA finale — pattern sistematico (desktop fotografica, mobile editoriale) */}
      <CtaBand
        eyebrow="Fisioterapia a Matera dal 1995"
        title="Fai il primo passo. Al resto pensiamo noi."
        text="Una valutazione per capire il problema e il percorso più adatto: chiamaci o scrivici su WhatsApp."
      />
    </>
  );
}

