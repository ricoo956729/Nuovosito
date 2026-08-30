import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";


const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Vico%20dei%20Peuceti%2022%2C%2075100%20Matera";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Vico%20dei%20Peuceti%2022%2C%2075100%20Matera&output=embed";

export default function Contatti() {
  return (
    <>
      <Seo title="Contatti | FKT Matera" description="Contatta FKT Matera: telefono 0835 389079, WhatsApp, email segreteria, orari e mappa della sede in Vico dei Peuceti 22." />
      {/* Intestazione pagina */}
      <section className="bg-ghiaccio border-b border-border">
        <div className="container-fkt py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">Contatti</p>
          <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl font-extrabold text-blu">
            Prenota una valutazione o chiedi informazioni.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Contattaci per ricevere informazioni, prenotare una valutazione o capire quale modalità
            di accesso è più adatta alle tue esigenze: privata, SSN, INAIL o assicurativa.
          </p>
        </div>
      </section>

      {/* Canali di contatto */}
      <section className="container-fkt py-16 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={SITE.telefonoHref}
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition hover:shadow-lg hover:ring-[#2279b0]/50"
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

          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition hover:shadow-lg hover:ring-[#2279b0]/50"
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

          <a
            href={`mailto:${SITE.email}`}
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition hover:shadow-lg hover:ring-[#2279b0]/50 sm:col-span-2 lg:col-span-1"
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
        </div>

        {/* Indirizzo + orari + foto ingresso */}
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
              className="h-full w-full object-cover"
            />
          </figure>
        </div>

        {/* Mappa */}
        <div className="mt-6 overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
          <iframe
            title="Mappa FKT Matera — Vico dei Peuceti 22, Matera"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-full border-0"
          />
        </div>
      </section>
    </>
  );
}
