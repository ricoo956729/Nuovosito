type Props = {
  titolo: string;
  sottotitolo?: string;
  step: string;
};

/** Segnaposto di pagina usato nello Step 0 (Fondamenta): verrà sostituito dal contenuto reale. */
export function PagePlaceholder({ titolo, sottotitolo, step }: Props) {
  return (
    <section className="bg-ghiaccio">
      <div className="container-fkt py-24 text-center">
        <span className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-azzurro">
          {step}
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-blu">{titolo}</h1>
        {sottotitolo && (
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{sottotitolo}</p>
        )}
      </div>
    </section>
  );
}
