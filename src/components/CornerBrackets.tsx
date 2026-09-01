/**
 * Quattro squadrette angolari da "disegno tecnico" (richiamo al vitruviano).
 * Il genitore deve avere position: relative.
 */
export function CornerBrackets({ className = "border-azzurro/60" }: { className?: string }) {
  const base = "pointer-events-none absolute h-2.5 w-2.5 " + className;
  return (
    <>
      <span aria-hidden="true" className={`${base} left-0 top-0 -translate-x-1/2 -translate-y-1/2 border-l-2 border-t-2`} />
      <span aria-hidden="true" className={`${base} right-0 top-0 translate-x-1/2 -translate-y-1/2 border-r-2 border-t-2`} />
      <span aria-hidden="true" className={`${base} bottom-0 left-0 -translate-x-1/2 translate-y-1/2 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${base} bottom-0 right-0 translate-x-1/2 translate-y-1/2 border-b-2 border-r-2`} />
    </>
  );
}
