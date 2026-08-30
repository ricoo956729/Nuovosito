import { useCountUp } from "@/hooks/useCountUp";

function Counter({ target, suffix, label }: { target: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(target);
  const shown = target % 1 !== 0 ? value.toFixed(1).replace(".", ",") : Math.round(value).toString();
  return (
    <div className="text-center">
      <span ref={ref} className="block text-4xl sm:text-5xl font-extrabold text-blu font-[Manrope]">
        {shown}
        {suffix && <span className="text-azzurro">{suffix}</span>}
      </span>
      <span className="mt-2 block text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

/** Sezione "I numeri del centro FKT" — dati ripresi dal sito precedente. */
export function NumeriDelCentro() {
  return (
    <section aria-label="I numeri del centro FKT" className="border-y border-border bg-white">
      <div className="container-fkt py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">
          I numeri del centro FKT
        </p>
        <div className="mt-8 grid grid-cols-2 gap-10 lg:grid-cols-4">
          <Counter target={30} suffix="+" label="anni di esperienza" />
          <Counter target={500} suffix=" mq" label="di superficie totale" />
          <Counter target={30} suffix="+" label="prestazioni terapeutiche" />
          <div className="text-center">
            <span className="block text-4xl sm:text-5xl font-extrabold text-blu font-[Manrope]">
              4,8<span className="text-azzurro">/5</span>
            </span>
            <span className="mt-1 block text-azzurro text-lg tracking-widest" role="img" aria-label="4,8 stelle su 5">
              ★★★★★
            </span>
            <span className="mt-1 block text-sm font-medium text-muted-foreground">recensioni Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
