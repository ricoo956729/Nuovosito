import { Link } from "react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SITE } from "@/lib/site-data";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-2xl font-extrabold text-blu">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg font-bold text-blu">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-foreground/80">{children}</p>;
}

export default function ArticoloTecarterapia() {
  return (
    <>
      <Seo
        title="Tecarterapia: cos'è, benefici e quando può essere utile | FKT Matera"
        description="Scopri cos'è la tecarterapia, come funziona, quali benefici può offrire e quando può essere utile in fisioterapia."
      />

      <article className="container-fkt max-w-3xl py-14 sm:py-20">
        <Link
          to="/articoli"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-azzurro hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Tutti gli articoli
        </Link>

        <span className="mt-6 inline-block rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-azzurro">
          Terapie strumentali
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-blu leading-tight">
          Tecarterapia: cos'è, benefici e quando può essere utile
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          La tecarterapia, spesso chiamata TECAR, è una terapia fisica utilizzata in fisioterapia
          come supporto nei percorsi dedicati a dolore, rigidità, traumi, tendinopatie e recupero
          funzionale.
        </p>

        <figure className="mt-8 overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
          <img
            src="/assets/terapie-strumentali/diatermia-1.webp"
            alt="Seduta di tecarterapia presso FKT Matera"
            className="w-full object-cover"
          />
        </figure>

        <H2>Cos'è la tecarterapia</H2>
        <P>
          La tecarterapia è una terapia elettromedicale che sfrutta il trasferimento di energia ai
          tessuti biologici attraverso una radiofrequenza. L'obiettivo è stimolare una risposta
          locale dei tessuti, favorendo processi legati alla vascolarizzazione, al metabolismo
          cellulare e alla riduzione della sintomatologia dolorosa.
        </P>
        <P>
          Durante la seduta il fisioterapista utilizza un manipolo collegato a un'apparecchiatura
          specifica. Il trattamento viene eseguito sulla zona interessata con movimenti controllati,
          modulando l'intensità in base alla sensibilità del paziente, alla fase del problema e
          all'obiettivo terapeutico.
        </P>

        <H2>Modalità capacitiva e resistiva</H2>
        <P>
          La TECAR può essere utilizzata in modalità capacitiva o resistiva. La scelta dipende dal
          tipo di tessuto da trattare e dall'obiettivo della seduta.
        </P>
        <H3>Modalità capacitiva</H3>
        <P>
          La modalità capacitiva viene impiegata soprattutto sui tessuti più ricchi di acqua, come
          muscoli e tessuti molli superficiali. Può essere indicata, ad esempio, in caso di
          tensioni, contratture, affaticamento o dolore muscolare localizzato.
        </P>
        <H3>Modalità resistiva</H3>
        <P>
          La modalità resistiva viene utilizzata per tessuti con maggiore resistenza, come tendini,
          legamenti, articolazioni e strutture periarticolari. Può essere utile nei percorsi dedicati
          a tendinopatie, rigidità articolare o problematiche più profonde dell'apparato
          muscolo-scheletrico.
        </P>

        <H2>Quali benefici può offrire?</H2>
        <P>
          I benefici della tecarterapia possono variare da persona a persona e dipendono dalla
          condizione trattata, dalla fase del disturbo e dal modo in cui il trattamento viene
          integrato nel percorso fisioterapico.
        </P>
        <ul className="mt-4 space-y-2">
          {[
            "Riduzione del dolore.",
            "Miglioramento della mobilità.",
            "Riduzione della rigidità muscolare o articolare.",
            "Supporto al recupero dopo traumi o sovraccarichi.",
            "Preparazione dei tessuti al lavoro manuale o agli esercizi terapeutici.",
            "Supporto nei percorsi di rieducazione funzionale.",
          ].map((b) => (
            <li key={b} className="flex gap-2 text-foreground/80">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azzurro" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <P>
          Uno degli aspetti più utili della TECAR è la possibilità di abbinarla ad altre strategie:
          terapia manuale, esercizio terapeutico, lavoro sulla mobilità, rinforzo muscolare e
          rieducazione del movimento.
        </P>

        <H2>Quando può essere utile la tecarterapia?</H2>
        <P>
          La tecarterapia può essere presa in considerazione in diverse situazioni cliniche, sempre
          dopo valutazione professionale. Non tutte le condizioni dolorose richiedono TECAR e non
          tutti i pazienti rispondono allo stesso modo.
        </P>
        <H3>Dolori muscolari e contratture</H3>
        <P>
          Può essere utile in caso di dolore muscolare, tensioni, rigidità o contratture, soprattutto
          quando il disturbo limita il movimento o rende difficili le attività quotidiane.
        </P>
        <H3>Tendinopatie e sovraccarichi</H3>
        <P>
          La TECAR può essere inserita nei percorsi dedicati a tendinopatie e sovraccarichi
          funzionali, come dolore al tendine d'Achille, epicondilite, problematiche della spalla o
          dolore rotuleo. In questi casi, però, non sostituisce il programma progressivo di esercizi,
          la gestione dei carichi e la rieducazione funzionale.
        </P>
        <H3>Dolore cervicale e lombare</H3>
        <P>
          In presenza di cervicalgia, lombalgia o rigidità della colonna, la tecarterapia può essere
          utilizzata per ridurre il dolore, migliorare la mobilità e facilitare il lavoro
          fisioterapico. L'obiettivo non è solo "spegnere il dolore", ma comprendere anche i fattori
          che contribuiscono al problema.
        </P>
        <H3>Traumi sportivi e recupero funzionale</H3>
        <P>
          La TECAR viene spesso utilizzata nei percorsi post-traumatici, ad esempio dopo distorsioni,
          contusioni, lesioni muscolari o sovraccarichi legati all'attività sportiva. La sua utilità
          dipende dalla fase del trauma e dagli obiettivi del recupero.
        </P>
        <H3>Artrosi e rigidità articolare</H3>
        <P>
          In alcune condizioni degenerative, come l'artrosi, può essere usata come supporto per
          ridurre dolore e rigidità. Nelle problematiche croniche, però, il percorso più efficace
          combina spesso più elementi: educazione, movimento controllato, rinforzo muscolare e
          continuità.
        </P>
        <H3>Dopo un intervento chirurgico</H3>
        <P>
          In alcuni casi la tecarterapia può essere inserita nei percorsi post-operatori, ma solo
          quando indicato e compatibile con la fase di guarigione. È sempre importante rispettare le
          indicazioni mediche e valutare tempi biologici, eventuali controindicazioni e obiettivi del
          percorso.
        </P>

        <H2>Quando evitare la tecarterapia?</H2>
        <P>
          La TECAR non è indicata in tutte le situazioni. Prima del trattamento è importante
          informare il fisioterapista in presenza di pacemaker o dispositivi elettronici impiantati,
          gravidanza, trombosi, alterazioni della sensibilità cutanea, ferite, infezioni, patologie
          oncologiche in corso o recenti, febbre, protesi o mezzi di sintesi nella zona interessata.
        </P>

        <H2>Tecarterapia a Matera: quando prenotare una valutazione</H2>
        <P>
          Se hai dolore muscolare o articolare, rigidità, una tendinopatia, un trauma recente o un
          disturbo che limita il movimento, la tecarterapia può essere una possibilità da valutare
          all'interno di un percorso fisioterapico personalizzato.
        </P>
        <P>
          Presso FKT, la scelta del trattamento viene sempre preceduta da una valutazione
          professionale, con l'obiettivo di capire se la TECAR sia realmente indicata per il tuo caso
          e come integrarla nel percorso più adatto.
        </P>

        <div className="mt-12 rounded-3xl bg-blu p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h2 className="text-xl font-extrabold">Hai dolore o difficoltà nei movimenti?</h2>
            <p className="mt-2 text-sm text-white/80">
              Prenota una valutazione fisioterapica presso FKT e scopri se la tecarterapia può
              essere utile nel tuo percorso.
            </p>
          </div>
          <a
            href={SITE.telefonoHref}
            className="mt-5 sm:mt-0 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blu transition hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> Prenota una valutazione
          </a>
        </div>
      </article>
    </>
  );
}
