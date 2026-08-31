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
