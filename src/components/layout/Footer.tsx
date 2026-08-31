import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { NAV, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-blu-scuro text-white">
      {/* Riga brand */}
      <div className="container-fkt pt-14 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/assets/logo-fkt-bianco.svg" alt="Logo FKT" className="h-12 w-auto" loading="lazy" decoding="async" />
            <div>
              <span className="block font-bold text-xl font-[Manrope]">{SITE.nome}</span>
              <span className="block text-sm text-white/60">
                Fisioterapia e rieducazione funzionale dal {SITE.dal}
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-azzurro hover:text-white transition-all duration-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-azzurro hover:text-white transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fkt grid gap-10 py-10 md:grid-cols-3">
          <div>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              Ambulatorio di fisioterapia e rieducazione funzionale a Matera dal {SITE.dal}.
              Percorsi personalizzati per dolore, recupero del movimento e prestazioni fisiatriche.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Parte di Sanità Futura
            </div>
          </div>

          <nav aria-label="Collegamenti footer">
            <h3 className="font-semibold font-[Manrope] text-white/90 text-sm uppercase tracking-wider">
              Sezioni
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/lavora-con-noi"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Lavora con noi
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold font-[Manrope] text-white/90 text-sm uppercase tracking-wider">
              Contatti
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-azzurro" />
                <span>
                  {SITE.indirizzo.via}, {SITE.indirizzo.cap} {SITE.indirizzo.citta} (
                  {SITE.indirizzo.provincia})
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-azzurro" />
                <a href={SITE.telefonoHref} className="hover:text-white transition-colors duration-200">
                  {SITE.telefono}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-azzurro" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-azzurro" />
                <span>{SITE.orari}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fkt py-5 text-xs text-white/40 flex flex-wrap gap-2 justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.nomeEsteso} — Matera
          </span>
          <span>Fisioterapia e rieducazione funzionale dal {SITE.dal}</span>
        </div>
      </div>
    </footer>
  );
}
