import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur">
      <div className="container-fkt flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="FKT Matera — Home">
          <img src="/assets/logo-fkt-blu.svg" alt="Logo FKT" className="h-9 w-auto" />
          <span className="hidden sm:block leading-tight">
            <span className="block font-bold text-blu font-[Manrope]">FKT Matera</span>
            <span className="block text-xs text-muted-foreground">
              Fisioterapia e rieducazione funzionale
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {NAV.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-blu"
                    : "text-foreground/80 hover:bg-secondary/60 hover:text-blu"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.telefonoHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-azzurro px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            {SITE.telefono}
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-azzurro transition hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-white" aria-label="Menu mobile">
          <div className="container-fkt flex flex-col py-3">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-base font-medium",
                    isActive ? "bg-secondary text-blu" : "text-foreground/80"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/lavora-con-noi"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-azzurro"
            >
              Lavora con noi
            </NavLink>
            <a
              href={SITE.telefonoHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-azzurro px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Chiama: {SITE.telefono}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
