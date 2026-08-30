import { useEffect } from "react";
import { useLocation } from "react-router";

// Riporta la finestra in cima a ogni cambio di pagina,
// senza interferire con i link che puntano a una sezione (#anchor).
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
