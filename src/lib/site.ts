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
      "Visure per immobile o soggetto, planimetrie catastali, estratti di mappa, elaborati planimetrici e ispezioni complete al Catasto.",
    items: [
      "Visura catastale per immobile",
      "Visura catastale per soggetto",
      "Planimetria catastale",
      "Estratto di mappa",
      "Elaborato planimetrico",
    ],
    priceFrom: 15,
  },
  {
    slug: "ipotecaria",
    label: "Visura / Ispezione Ipotecaria",
    short: "Ipotecaria",
    description:
      "Ispezioni ipotecarie presso la Conservatoria dei Registri Immobiliari: trascrizioni, iscrizioni, annotazioni e note complete.",
    items: [
      "Ispezione per soggetto",
      "Ispezione per immobile",
      "Copia di nota di trascrizione",
      "Copia di nota di iscrizione",
    ],
    priceFrom: 25,
  },
  {
    slug: "camerale",
    label: "Visura Camerale",
    short: "Camerale",
    description:
      "Visure per società, ditte individuali e persone giuridiche: ordinarie, storiche, bilanci, soci, cariche e fascicolo completo.",
    items: [
      "Visura ordinaria",
      "Visura storica",
      "Bilanci e atti depositati",
      "Elenco soci e cariche",
      "Fascicolo completo società",
    ],
    priceFrom: 18,
  },
  {
    slug: "pra",
    label: "Visura Veicoli PRA",
    short: "PRA",
    description:
      "Visure presso il Pubblico Registro Automobilistico: proprietà, fermi amministrativi, ipoteche, storico passaggi.",
    items: [
      "Visura per targa",
      "Visura per soggetto",
      "Storico passaggi di proprietà",
      "Verifica fermi e ipoteche",
    ],
    priceFrom: 12,
  },
] as const;

export type VisuraSlug = (typeof VISURE_TYPES)[number]["slug"];
