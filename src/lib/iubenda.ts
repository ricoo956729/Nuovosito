import { useEffect, useState } from "react";

/**
 * Integrazione iubenda (Cookie Solution + documenti legali).
 *
 * Gli identificativi corrispondono al sito iubenda "www.fisioterapiamatera.it".
 * Lo script del banner e la configurazione vivono in index.html, perché devono
 * essere caricati prima di qualsiasi contenuto di terze parti.
 */

export const IUBENDA_SITE_ID = 4687832;
export const IUBENDA_COOKIE_POLICY_ID = 97812237;

/**
 * Finalità iubenda a cui è associato Google Maps Widget.
 * 1 = Necessari · 2 = Interazioni e funzionalità semplici · 3 = Esperienza
 * 4 = Misurazione · 5 = Targeting e Pubblicità
 * La cookie policy generata colloca Google Maps sotto "Esperienza".
 */
export const IUBENDA_FINALITA_ESPERIENZA = 3;

/** Evento rilanciato dai callback iubenda configurati in index.html. */
export const IUBENDA_EVENTO_CONSENSO = "iubenda:consenso";

const BASE_DOCUMENTI = `https://www.iubenda.com/privacy-policy/${IUBENDA_COOKIE_POLICY_ID}`;

export const IUBENDA_URL_PRIVACY = BASE_DOCUMENTI;
export const IUBENDA_URL_COOKIE = `${BASE_DOCUMENTI}/cookie-policy`;

type ApiIubenda = {
  openPreferences?: () => void;
};

type ConsensoIubenda = {
  purposes?: Record<string, boolean | undefined>;
};

declare global {
  interface Window {
    _iub?: {
      cs?: {
        api?: ApiIubenda;
        consent?: ConsensoIubenda;
      };
    };
  }
}

/** Apre il pannello delle preferenze cookie di iubenda. */
export function apriPreferenzeCookie() {
  window._iub?.cs?.api?.openPreferences?.();
}

/** Legge il consenso corrente per una finalità, senza sottoscrivere aggiornamenti. */
function leggiConsenso(finalita: number): boolean {
  return Boolean(window._iub?.cs?.consent?.purposes?.[String(finalita)]);
}

/**
 * Restituisce `true` quando l'utente ha prestato il consenso per la finalità
 * indicata, aggiornandosi a ogni modifica delle preferenze.
 */
export function useConsensoIubenda(finalita: number): boolean {
  const [consenso, setConsenso] = useState(() => leggiConsenso(finalita));

  useEffect(() => {
    const aggiorna = () => setConsenso(leggiConsenso(finalita));

    // Il banner può essersi già inizializzato prima del mount del componente.
    aggiorna();
    window.addEventListener(IUBENDA_EVENTO_CONSENSO, aggiorna);
    return () => window.removeEventListener(IUBENDA_EVENTO_CONSENSO, aggiorna);
  }, [finalita]);

  return consenso;
}
