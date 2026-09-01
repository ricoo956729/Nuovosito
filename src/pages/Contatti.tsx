import { useEffect, useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, Navigation } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";


const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Vico%20dei%20Peuceti%2022%2C%2075100%20Matera";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Vico%20dei%20Peuceti%2022%2C%2075100%20Matera&output=embed";

/** Mappa con fallback elegante: se l'embed non si carica, resta una card curata con CTA a Google Maps. */
function MappaSede() {
  const [caricata, setCaricata] = useState(false);
  const [fallita, setFallita] = useState(false);

  useEffect(() => {
    if (caricata) return;
    const timer = setTimeout(() => setFallita(true), 8000);
    return () => clearTimeout(timer);
  }, [caricata]);

  return (
    <div className="relative mt-6 h-[400px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
      {/* Fallback visivo sotto l'iframe */}
      <div className="absolute inset-0">
        <img
          src="/assets/sede-ingresso.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blu/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25">
            <Navigation className="h-5 w-5" />
          </span>
          <p className="text-lg font-extrabold font-[Manrope]">
            {SITE.indirizzo.via}, {SITE.indirizzo.cap} {SITE.indirizzo.citta} ({SITE.indirizzo.provincia})
          </p>
          <p className="text-sm text-white/70">La mappa interattiva non è disponibile in questo momento.</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blu transition hover:bg-azzurro hover:text-white"
          >
            Apri su Google Maps <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      {!fallita && (
        <iframe
          title="Mappa FKT Matera — Vico dei Peuceti 22, Matera"
          src={MAPS_EMBED}
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          onLoad={() => setCaricata(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${caricata ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

export default function Contatti() {
  return (
    <>
      <Seo title="Contatti | FKT Matera" description="Contatta FKT Matera: telefono 0835 389079, WhatsApp, email segreteria, orari e mappa della sede in Vico dei Peuceti 22." />
      {/* Intestazione pagina */}
      <PageHero
        label="Contatti"
        title="Prenota una valutazione o chiedi informazioni."
        subtitle="Contattaci per ricevere informazioni, prenotare una valutazione o capire quale modalità di accesso è più adatta alle tue esigenze: privata, SSN, INAIL o assicurativa."
      />

      {/* Canali di contatto */}
      <section className="container-fkt py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
          <a
            href={SITE.telefonoHref}
            className="group hover-lift block h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border hover:ring-[#2279b0]/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ghiaccio">
              <Phone className="h-6 w-6 text-azzurro" />
            </span>
            <h2 className="mt-4 text-lg font-bold text-blu">Chiama l'ambulatorio</h2>
            <p className="mt-1 text-2xl font-extrabold text-azzurro font-[Manrope]">{SITE.telefono}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              La segreteria risponde negli orari di apertura.
            </p>
          </a>
          </Reveal>

          <Reveal delay={1}>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group hover-lift block h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border hover:ring-[#2279b0]/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ghiaccio">
              <MessageCircle className="h-6 w-6 text-azzurro" />
            </span>
            <h2 className="mt-4 text-lg font-bold text-blu">Scrivi su WhatsApp</h2>
            <p className="mt-1 text-2xl font-extrabold text-azzurro font-[Manrope]">{SITE.whatsapp}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Il modo più rapido per informazioni e disponibilità.
            </p>
          </a>
          </Reveal>

          <Reveal delay={2} className="sm:col-span-2 lg:col-span-1">
          <a
            href={`mailto:${SITE.email}`}
            className="group hover-lift block h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border hover:ring-[#2279b0]/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ghiaccio">
              <Mail className="h-6 w-6 text-azzurro" />
            </span>
            <h2 className="mt-4 text-lg font-bold text-blu">Email segreteria</h2>
            <p className="mt-1 text-lg font-bold text-azzurro break-all">{SITE.email}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Per inviare prescrizioni, referti e documentazione.
            </p>
          </a>
          </Reveal>
        </div>

        {/* Indirizzo + orari + foto ingresso */}
        <Reveal>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-ghiaccio p-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-azzurro" />
              <div>
                <h2 className="text-xl font-extrabold text-blu">Dove siamo</h2>
                <p className="mt-2 text-foreground/80">
                  {SITE.indirizzo.via}
                  <br />
                  {SITE.indirizzo.cap} {SITE.indirizzo.citta} ({SITE.indirizzo.provincia})
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Ingresso diretto sulla strada, riconoscibile dal logo FKT sulla vetrata. Aree di
                  sosta e fermata dell'autobus nelle immediate vicinanze.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro hover:underline"
                >
                  Apri su Google Maps <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-8 flex items-start gap-4 border-t border-border pt-8">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-azzurro" />
              <div>
                <h2 className="text-xl font-extrabold text-blu">Orari di apertura</h2>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-8">
                    <dt className="text-muted-foreground">Lunedì – Venerdì</dt>
                    <dd className="font-semibold text-blu">08:00 – 17:30</dd>
                  </div>
                  <div className="flex justify-between gap-8">
                    <dt className="text-muted-foreground">Sabato e Domenica</dt>
                    <dd className="font-semibold text-blu">Chiuso</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border min-h-[320px]">
            <img
              src="/assets/sede-ingresso.webp"
              alt="Ingresso della sede FKT Matera in Vico dei Peuceti 22"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        </Reveal>

        {/* Mappa */}
        <Reveal>
          <MappaSede />
        </Reveal>
      </section>
    </>
  );
}
