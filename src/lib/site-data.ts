// Dati ufficiali FKT Matera — fonte: sito attuale (fisioterapiamatera.it)
// NON modificare senza conferma del titolare.

export const SITE = {
  nome: "FKT Matera",
  nomeEsteso: "FKT — Ambulatorio di Fisiokinesiterapia",
  descrizione:
    "Ambulatorio di fisioterapia e rieducazione funzionale a Matera dal 1995. Percorsi personalizzati per dolore, recupero del movimento e prestazioni fisiatriche.",
  indirizzo: {
    via: "Vico dei Peuceti 22",
    cap: "75100",
    citta: "Matera",
    provincia: "MT",
  },
  telefono: "0835 389079",
  telefonoHref: "tel:+390835389079",
  whatsapp: "393 9081363",
  whatsappHref:
    "https://wa.me/393939081363?text=Salve%2C%20desidero%20ricevere%20informazioni%20in%20merito%20a%3A",
  email: "segreteria@fisioterapiamatera.it",
  orari: "Lun–Ven 08:00–17:30",
  orariSchema: "Mo-Fr 08:00-17:30",
  dal: 1995,
  social: {
    facebook:
      "https://www.facebook.com/p/FKT-Ambulatorio-di-Fisiokinesiterapia-100063643672271/",
    instagram: "https://www.instagram.com/fisioterapiamatera/",
  },
  sito: "https://www.fisioterapiamatera.it",
} as const;

export const NAV = [
  { label: "Il Centro", href: "/il-centro" },
  { label: "Servizi", href: "/servizi" },
  { label: "Convenzioni", href: "/convenzioni" },
  { label: "Articoli", href: "/articoli" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const CONVENZIONI = [
  { nome: "SSN — Servizio Sanitario Nazionale", logo: "/assets/logo-ssn-trasparente-opt.webp" },
  { nome: "INAIL", logo: "/assets/logo-inail-trim-opt.webp" },
  { nome: "FASDAC", logo: "/assets/convenzioni/logo-fasdac-opt.webp" },
  { nome: "Generali", logo: "/assets/convenzioni/logo-generali-hd-opt.webp" },
  { nome: "Poste Welfare Servizi", logo: "/assets/convenzioni/logo-poste-hd-opt.webp" },
  { nome: "AXA", logo: "/assets/convenzioni/logo-axa-hd-opt.webp" },
  { nome: "MyAssistance", logo: "/assets/convenzioni/logo-myassistance-hd-opt.webp" },
  { nome: "Helpcard", logo: "/assets/convenzioni/logo-helpcard-hd-opt.webp" },
] as const;

export const AREE_SERVIZI = [
  {
    slug: "terapie-manuali",
    titolo: "Terapie manuali",
    descrizione:
      "Massoterapia, osteopatia, linfodrenaggio, rieducazione posturale e funzionale, metodo Mézières.",
    immagine: "/assets/terapie-manuali/massoterapia-1.webp",
  },
  {
    slug: "terapie-strumentali",
    titolo: "Terapie strumentali",
    descrizione:
      "Tecarterapia/diatermia, ultrasuoni, elettrostimolazione, pressoterapia e altre tecnologie riabilitative.",
    immagine: "/assets/terapie-strumentali/diatermia-1.webp",
  },
  {
    slug: "visite-fisiatriche",
    titolo: "Visite fisiatriche e prestazioni specialistiche",
    descrizione:
      "Valutazione fisiatrica, infiltrazioni articolari, onde d'urto focali, ossigeno-ozonoterapia.",
    immagine: "/assets/prestazioni-specialistiche/visita-fisiatrica-1.webp",
  },
] as const;

// Recensioni Google reali fornite dal titolare (tutte 5 stelle).
// I testi sono verbatim; i tagli sono segnalati con "…".
export const RECENSIONI = [
  {
    nome: "Pia",
    testo:
      "Sono arrivata, accompagnata, con stampelle e tutore, incapace di camminare. In un lasso di tempo ragionevolmente breve, grazie alla professionalità e alla tenacia del fisioterapista, Andrea, ho cominciato a muovere… i primi passi. Fino ad arrivare ad oggi: cammino finalmente! … oltre all'alto livello professionale, sono persone capaci di accogliere, far sentire a proprio agio i pazienti.",
    stelle: 5,
    data: "1 mese fa",
  },
  {
    nome: "Giusy",
    testo:
      "Un centro d'eccellenza… sono entrata che non riuscivo a muovere il mio braccio sinistro, con la cervicale bloccata… Voglio fare un plauso al fantastico Gabriele che con le sue mani d'oro mi ha rimessa in sesto… Un plauso alle ragazze dell'accettazione sempre gentili, cordiali e a disposizione del paziente… grazie infinite a questo centro che a mio dire funziona alla perfezione",
    stelle: 5,
    data: "6 mesi fa",
  },
  {
    nome: "Nadia",
    testo:
      "…risolto grazie alla professionalità e competenza del personale. Tutti estremamente preparati, disponibili e anche simpatici, riescono a mettere a proprio agio fin dal primo incontro. L'atmosfera è sempre piacevole e serena… Un ringraziamento speciale alla mia terapeuta Annalisa Manicone, per la sua bravura, pazienza e umanità: è stata fondamentale nel mio percorso di recupero. Consiglio vivamente questo centro a chiunque cerchi un trattamento efficace in un ambiente accogliente e con veri professionisti!",
    stelle: 5,
    data: "7 mesi fa",
  },
  {
    nome: "Gio",
    testo:
      "Mi piace testimoniare come tutti i terapisti del centro FKT siano una vera risorsa nonché un eccellenza nel campo della riabilitazione. Voglio inoltre ringraziare la dottoressa Adele Genco per la pazienza e la grande professionalità, doti non proprio scontate. Ancora un grazie a tutti voi con l'augurio di una buona vita",
    stelle: 5,
    data: "2 anni fa",
  },
] as const;

export const MODALITA_ACCESSO = [
  {
    slug: "ssn",
    titolo: "Accesso SSN",
    descrizione:
      "Prestazioni in regime convenzionato con il Servizio Sanitario Nazionale, su impegnativa del medico.",
  },
  {
    slug: "inail",
    titolo: "Accesso INAIL",
    descrizione:
      "Percorsi riabilitativi per infortuni sul lavoro e malattie professionali riconosciute INAIL.",
  },
  {
    slug: "assicurazioni",
    titolo: "Assicurazioni e fondi",
    descrizione:
      "Accesso tramite assicurazioni sanitarie, fondi integrativi e convenzioni aziendali.",
  },
] as const;
