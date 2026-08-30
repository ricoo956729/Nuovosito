import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { NAV, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-blu-scuro text-white">
      <div className="container-fkt grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/logo-fkt-bianco.svg" alt="Logo FKT" className="h-10 w-auto" />
            <span className="font-bold text-lg font-[Manrope]">{SITE.nome}</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Ambulatorio di fisioterapia e rieducazione funzionale a Matera dal {SITE.dal}.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
               className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
               className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Collegamenti footer">
          <h3 className="font-semibold font-[Manrope] text-white/90">Sezioni</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-white/70 hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/lavora-con-noi" className="text-white/70 hover:text-white transition">
                Lavora con noi
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-semibold font-[Manrope] text-white/90">Contatti</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                {SITE.indirizzo.via}, {SITE.indirizzo.cap} {SITE.indirizzo.citta} ({SITE.indirizzo.provincia})
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={SITE.telefonoHref} className="hover:text-white transition">{SITE.telefono}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>{SITE.orari}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-fkt py-4 text-xs text-white/50 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} {SITE.nomeEsteso} — Matera</span>
          <span>Fisioterapia e rieducazione funzionale dal {SITE.dal}</span>
        </div>
      </div>
    </footer>
  );
}
