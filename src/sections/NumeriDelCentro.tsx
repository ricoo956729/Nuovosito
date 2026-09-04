import { useCountUp } from "@/hooks/useCountUp";

const CARD_CLASSES =
  "rounded-2xl bg-white/5 p-5 text-center ring-1 ring-white/10 backdrop-blur-sm sm:p-6";

function Counter({ target, suffix, label }: { target: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(target);
  const shown = target % 1 !== 0 ? value.toFixed(1).replace(".", ",") : Math.round(value).toString();
  return (
    <div>
      <span
        ref={ref}
        className="block font-[Manrope] text-4xl font-extrabold tabular-nums text-white sm:text-5xl"
      >
        {shown}
        {suffix && <span className="text-azzurro-chiaro">{suffix}</span>}
      </span>
      <span className="mt-2 block text-sm font-medium text-white/70">{label}</span>
    </div>
  );
}

/** Sezione "I numeri del centro FKT" — dati ripresi dal sito precedente. */
export function NumeriDelCentro() {
  return (
    <section
      aria-label="I numeri del centro FKT"
      className="relative overflow-hidden bg-gradient-to-br from-blu to-blu-scuro"
    >
      {/* Texture a puntini (come PageHero), adattata allo sfondo scuro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(hsl(199 100% 90% / 0.16) 1.2px, transparent 1.2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse at bottom left, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom left, black 30%, transparent 75%)",
        }}
      />
      {/* Bagliore radiale azzurro, alto a destra */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72"
        style={{ background: "radial-gradient(circle, hsl(204 68% 41% / 0.25) 0%, transparent 70%)" }}
      />

      <div className="container-fkt relative py-14 sm:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-azzurro-chiaro">
          I numeri del centro FKT
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          <div className={CARD_CLASSES}>
            <Counter target={30} suffix="+" label="anni di esperienza" />
          </div>
          <div className={CARD_CLASSES}>
            <Counter target={500} suffix=" mq" label="di superficie totale" />
          </div>
          <div className={CARD_CLASSES}>
            <Counter target={30} suffix="+" label="prestazioni terapeutiche" />
          </div>
          <div className={CARD_CLASSES}>
            <span className="block font-[Manrope] text-4xl font-extrabold tabular-nums text-white sm:text-5xl">
              4,8<span className="text-azzurro-chiaro">/5</span>
            </span>
            <span
              className="mt-1 block text-lg tracking-widest text-azzurro-chiaro"
              role="img"
              aria-label="4,8 stelle su 5"
            >
              ★★★★★
            </span>
            <span className="mt-1 block text-sm font-medium text-white/70">recensioni Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
