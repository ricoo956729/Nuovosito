import { useEffect, useRef } from "react";

const URL_SCRIPT_EMBED = "https://cdn.iubenda.com/iubenda.js";

type Props = {
  /** URL pubblico del documento iubenda da incorporare. */
  href: string;
  /** Testo del link, usato anche come fallback se lo script non parte. */
  titolo: string;
};

/**
 * Incorpora un documento legale iubenda (privacy o cookie policy) dentro la pagina.
 *
 * Lo script di iubenda cerca i link con classe `iubenda-embed`, li sostituisce con
 * il testo del documento e ne rimuove l'anchor. Poiché è una mutazione del DOM che
 * React non conosce, il link viene creato imperativamente dentro un contenitore
 * dedicato: React gestisce solo il contenitore, così allo smontaggio non tenta di
 * rimuovere nodi che iubenda ha già tolto.
 *
 * Lo script viene reiniettato a ogni mount perché la navigazione client-side non
 * ricarica la pagina e senza una nuova esecuzione il DOM non verrebbe riscansionato.
 */
export function IubendaDocument({ href, titolo }: Props) {
  const contenitore = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodo = contenitore.current;
    if (!nodo) return;

    nodo.replaceChildren();

    const link = document.createElement("a");
    link.href = href;
    link.className = "iubenda-white iubenda-noiframe iubenda-embed iub-body-embed no-brand";
    link.title = titolo;
    link.textContent = titolo;
    // Se lo script non parte, resta un link leggibile al documento ospitato.
    link.rel = "noreferrer";
    link.target = "_blank";
    nodo.appendChild(link);

    const script = document.createElement("script");
    script.src = URL_SCRIPT_EMBED;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      nodo.replaceChildren();
    };
  }, [href, titolo]);

  return (
    <div
      ref={contenitore}
      className="iubenda-documento mt-6 text-sm leading-relaxed text-foreground/80 [&_a]:text-azzurro [&_a:hover]:underline"
    />
  );
}
