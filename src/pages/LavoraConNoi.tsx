import { useState } from "react";
import { Link } from "react-router";
import { Mail, ArrowRight, Send } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Seo } from "@/components/Seo";


const PROFILI = [
  "Fisioterapista",
  "Medico specialista",
  "Osteopata",
  "Personale amministrativo",
  "Altro profilo sanitario o tecnico",
];

const inputCls =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-[#2279b0] focus:ring-2 focus:ring-[#2279b0]/25";

export default function LavoraConNoi() {
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", profilo: "", messaggio: "" });
  const [privacy, setPrivacy] = useState(false);

  const valido =
    form.nome.trim() && form.email.trim() && form.profilo && privacy;

  const invia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valido) return;
    const corpo = [
      `Nome e cognome: ${form.nome}`,
      `Email: ${form.email}`,
      `Telefono: ${form.telefono || "—"}`,
      `Profilo professionale: ${form.profilo}`,
      "",
      "Messaggio:",
      form.messaggio || "—",
      "",
      "Autorizzo il Centro FKT a ricontattarmi ai recapiti indicati per questa richiesta.",
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Candidatura — ${form.profilo}`
    )}&body=${encodeURIComponent(corpo)}`;
  };

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <Seo title="Lavora con noi | FKT Matera" description="Candidati per collaborare con il centro FKT Matera: fisioterapisti, medici specialisti, osteopati e personale amministrativo." />
      {/* Intestazione pagina */}
      <section className="bg-ghiaccio border-b border-border">
        <div className="container-fkt py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">
            Lavora con noi
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl font-extrabold text-blu">
            Cresci con il centro FKT.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Siamo sempre interessati a conoscere professionisti motivati da inserire nel nostro
            team. Se condividi il nostro approccio alla riabilitazione, candidati: valutiamo ogni
            profilo con attenzione.
          </p>
        </div>
      </section>

      {/* Form candidatura */}
      <section className="container-fkt py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">Candidatura</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blu">
            Raccontaci il tuo profilo.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Compila il modulo: all'invio si aprirà il tuo client di posta con la candidatura già
            pronta per la segreteria. Ricorda di allegare il CV aggiornato.
          </p>

          <form
            onSubmit={invia}
            className="mt-8 rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-border space-y-5"
          >
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-blu">
                Nome e cognome *
              </label>
              <input id="nome" required value={form.nome} onChange={set("nome")} className={inputCls} placeholder="Mario Rossi" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-blu">
                  Email *
                </label>
                <input id="email" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="nome@esempio.it" />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-blu">
                  Telefono
                </label>
                <input id="telefono" type="tel" value={form.telefono} onChange={set("telefono")} className={inputCls} placeholder="333 1234567" />
              </div>
            </div>

            <div>
              <label htmlFor="profilo" className="mb-1.5 block text-sm font-semibold text-blu">
                Profilo professionale *
              </label>
              <select id="profilo" required value={form.profilo} onChange={set("profilo")} className={inputCls}>
                <option value="" disabled>
                  Seleziona un profilo
                </option>
                {PROFILI.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="messaggio" className="mb-1.5 block text-sm font-semibold text-blu">
                Messaggio
              </label>
              <textarea
                id="messaggio"
                rows={5}
                value={form.messaggio}
                onChange={set("messaggio")}
                className={inputCls + " resize-y"}
                placeholder="Presentati brevemente: esperienza, disponibilità, motivazione…"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-foreground/80 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-input accent-[#2279b0]"
              />
              Autorizzo il Centro FKT a ricontattarmi ai recapiti indicati per questa richiesta. *
            </label>

            <button
              type="submit"
              disabled={!valido}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-azzurro px-8 py-3.5 font-semibold text-white shadow-lg shadow-azzurro/30 transition hover:brightness-110 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" /> Invia candidatura
            </button>
            <p className="text-xs text-muted-foreground">
              L'invio apre il tuo programma di posta con il messaggio già compilato verso{" "}
              <span className="font-semibold text-blu">{SITE.email}</span>. Nessun dato viene
              salvato su questo sito.
            </p>
          </form>
        </div>
      </section>

      {/* Come candidarsi */}
      <section className="bg-white border-y border-border">
        <div className="container-fkt py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azzurro">
                Come candidarsi
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-blu">
                Tre semplici passaggi.
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  "Compila il modulo di candidatura indicando il profilo più adatto.",
                  "All'invio si apre il tuo client di posta: allega il CV aggiornato e una breve presentazione.",
                  "Se il profilo è in linea con le esigenze del centro, ti ricontatteremo per un colloquio conoscitivo.",
                ].map((passo, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ghiaccio font-extrabold text-azzurro font-[Manrope]">
                      {i + 1}
                    </span>
                    <p className="text-foreground/80 pt-1">{passo}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-ghiaccio p-8 sm:p-10 text-center">
              <Mail className="mx-auto h-10 w-10 text-azzurro" />
              <h3 className="mt-4 text-xl font-extrabold text-blu">Preferisci scriverci direttamente?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Puoi inviare la tua candidatura anche via email semplice, indicando il profilo di
                interesse e allegando il CV.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("Candidatura — Lavora con noi")}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-blu ring-1 ring-border transition hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-azzurro" /> {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-blu text-white">
        <div className="container-fkt py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Vuoi prima conoscere il centro?</h2>
            <p className="mt-2 text-white/80">Scopri la sede, gli spazi e il nostro modo di lavorare.</p>
          </div>
          <Link
            to="/il-centro"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition hover:bg-secondary"
          >
            Scopri il centro <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
