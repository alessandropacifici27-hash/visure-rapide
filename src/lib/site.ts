export const SITE = {
  name: "Visure Rapide",
  domain: "visurerapide.it",
  tagline: "Visure professionali, evase rapidamente",
  phone: "+39 379 3511586",
  phoneLandline: "+39 02 9289 2296",
  whatsapp: "393793511586",
  telegram: "393793511586",
  email: "info@visurerapide.it",
  hours: "Lun–Ven 9:00–18:00",
};

export const VISURE_TYPES = [
  {
    slug: "catastale",
    label: "Visura Catastale",
    short: "Catasto",
    description:
      "Visure per immobile o soggetto, planimetrie catastali, estratti di mappa ed elaborati planimetrici. Tariffe minime stabilite dall'Agenzia delle Entrate.",
    items: [
      { name: "Visura catastale per immobile", price: 1.35 },
      { name: "Visura catastale per soggetto (ogni 10 immobili)", price: 1.35 },
      { name: "Visura catastale nazionale", price: 5 },
      { name: "Estratto di mappa", price: 1.35 },
      { name: "Planimetria catastale", price: 1.35 },
      { name: "Elaborato planimetrico", price: 1.35 },
    ],
    priceFrom: 1.35,
    enteCompetente: "Agenzia delle Entrate",
  },
  {
    slug: "ipotecaria",
    label: "Visura / Ispezione Ipotecaria",
    short: "Ipotecaria",
    description:
      "Ispezioni ipotecarie presso la Conservatoria dei Registri Immobiliari: trascrizioni, iscrizioni, annotazioni e note complete. Tariffe minime stabilite dall'Agenzia delle Entrate.",
    items: [
      { name: "Ispezione ipotecaria (consultazione telematica)", price: 6.30 },
      { name: "Ispezione ipotecaria nazionale", price: 19 },
      { name: "Nota di trascrizione", price: 4 },
      { name: "Atto pubblico in PDF (trascritto o iscritto in Conservatoria)", price: 8 },
    ],
    priceFrom: 4,
    enteCompetente: "Agenzia delle Entrate",
  },
  {
    slug: "camerale",
    label: "Visura Camerale",
    short: "Camerale",
    description:
      "Visure per società, ditte individuali e persone giuridiche: ordinarie, storiche, bilanci, soci, cariche e fascicolo completo. Tariffe minime stabilite dalle Camere di Commercio.",
    items: [
      { name: "Visura ordinaria", price: 5 },
      { name: "Visura storica", price: 7 },
      { name: "Bilanci e atti depositati", price: 5 },
      { name: "Elenco soci e cariche", price: 5 },
      { name: "Fascicolo completo società", price: 10 },
    ],
    priceFrom: 5,
    enteCompetente: "Camera di Commercio",
  },
  {
    slug: "pra",
    label: "Visura Veicoli PRA",
    short: "PRA",
    description:
      "Visure presso il Pubblico Registro Automobilistico: proprietà, fermi amministrativi, ipoteche, storico passaggi. Tariffe minime stabilite dall'ACI.",
    items: [
      { name: "Visura per targa", price: 8 },
      { name: "Visura per soggetto", price: 8 },
      { name: "Storico passaggi di proprietà", price: 8 },
      { name: "Verifica fermi e ipoteche", price: 8 },
    ],
    priceFrom: 8,
    enteCompetente: "ACI – Pubblico Registro Automobilistico",
  },
  {
    slug: "varie",
    label: "Visure Varie / Multiple",
    short: "Varie",
    description:
      "Non sai esattamente di cosa hai bisogno o hai più tipologie diverse? Descrivi tutto nel campo dei dettagli della richiesta: ti aiutiamo noi a capire cosa serve e prepariamo un preventivo su misura.",
    items: [],
    priceFrom: null,
    enteCompetente: "Da definire in base alla richiesta",
  },
] as const;

export type VisuraSlug = (typeof VISURE_TYPES)[number]["slug"];
EOF
Output

export const SITE = {
  name: "Visure Rapide",
  domain: "visurerapide.it",
  tagline: "Visure professionali, evase rapidamente",
  phone: "+39 379 3511586",
  phoneLandline: "+39 02 9289 2296",
  whatsapp: "393793511586",
  telegram: "393793511586",
  email: "info@visurerapide.it",
  hours: "Lun–Ven 9:00–18:00",
};

export const VISURE_TYPES = [
  {
    slug: "catastale",
    label: "Visura Catastale",
    short: "Catasto",
    description:
      "Visure per immobile o soggetto, planimetrie catastali, estratti di mappa ed elaborati planimetrici. Tariffe minime stabilite dall'Agenzia delle Entrate.",
    items: [
      { name: "Visura catastale per immobile", price: 1.35 },
      { name: "Visura catastale per soggetto (ogni 10 immobili)", price: 1.35 },
      { name: "Visura catastale nazionale", price: 5 },
      { name: "Estratto di mappa", price: 1.35 },
      { name: "Planimetria catastale", price: 1.35 },
      { name: "Elaborato planimetrico", price: 1.35 },
    ],
    priceFrom: 1.35,
    enteCompetente: "Agenzia delle Entrate",
  },
  {
    slug: "ipotecaria",
    label: "Visura / Ispezione Ipotecaria",
    short: "Ipotecaria",
    description:
      "Ispezioni ipotecarie presso la Conservatoria dei Registri Immobiliari: trascrizioni, iscrizioni, annotazioni e note complete. Tariffe minime stabilite dall'Agenzia delle Entrate.",
    items: [
      { name: "Ispezione ipotecaria (consultazione telematica)", price: 6.30 },
      { name: "Ispezione ipotecaria nazionale", price: 19 },
      { name: "Nota di trascrizione", price: 4 },
      { name: "Atto pubblico in PDF (trascritto o iscritto in Conservatoria)", price: 8 },
    ],
    priceFrom: 4,
    enteCompetente: "Agenzia delle Entrate",
  },
  {
    slug: "camerale",
    label: "Visura Camerale",
    short: "Camerale",
    description:
      "Visure per società, ditte individuali e persone giuridiche: ordinarie, storiche, bilanci, soci, cariche e fascicolo completo. Tariffe minime stabilite dalle Camere di Commercio.",
    items: [
      { name: "Visura ordinaria", price: 5 },
      { name: "Visura storica", price: 7 },
      { name: "Bilanci e atti depositati", price: 5 },
      { name: "Elenco soci e cariche", price: 5 },
      { name: "Fascicolo completo società", price: 10 },
    ],
    priceFrom: 5,
    enteCompetente: "Camera di Commercio",
  },
  {
    slug: "pra",
    label: "Visura Veicoli PRA",
    short: "PRA",
    description:
      "Visure presso il Pubblico Registro Automobilistico: proprietà, fermi amministrativi, ipoteche, storico passaggi. Tariffe minime stabilite dall'ACI.",
    items: [
      { name: "Visura per targa", price: 8 },
      { name: "Visura per soggetto", price: 8 },
      { name: "Storico passaggi di proprietà", price: 8 },
      { name: "Verifica fermi e ipoteche", price: 8 },
    ],
    priceFrom: 8,
    enteCompetente: "ACI – Pubblico Registro Automobilistico",
  },
  {
    slug: "varie",
    label: "Visure Varie / Multiple",
    short: "Varie",
    description:
      "Non sai esattamente di cosa hai bisogno o hai più tipologie diverse? Descrivi tutto nel campo dei dettagli della richiesta: ti aiutiamo noi a capire cosa serve e prepariamo un preventivo su misura.",
    items: [],
    priceFrom: null,
    enteCompetente: "Da definire in base alla richiesta",
  },
] as const;

export type VisuraSlug = (typeof VISURE_TYPES)[number]["slug"];
