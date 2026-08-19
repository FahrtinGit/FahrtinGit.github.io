/* ============================================================
   INNHOLD — rediger teksten under for å oppdatere nettsiden.
   Alt som vises på siden (navn, tekster, statusrapporter,
   dagbok osv.) ligger her, som vanlig tekst mellom anførselstegn.

   Regler:
   - Ikke slett komma "," eller anførselstegn " rundt tekstene.
   - Du kan trygt endre teksten MELLOM anførselstegnene.
   - Rør ikke app.js eller styles.css med mindre du vet hva du gjør —
     den filen styrer hvordan siden fungerer/ser ut, ikke innholdet.
   ============================================================ */

const CONTENT = {

  brand: {
    initials: "IK",
    name: "PRAKSIS IK START",
    tagline: "PRAKSISPROSJEKT 2026",
  },

  hero: {
    byline: "Fahrtin Assenov · Dawit Andom · Elias Nahiry",
    titleLine1: "Praksis hos",
    titleLine2: "IK START",
    periodLabel: "Periode",
    period: "August — desember 2026",
  },

  // Kortene på forsiden under "Leveranser".
  // "page" må være en av: hjem, oppgave, dagbok, status1, status2, refleksjon
  deliverables: [
    { num: "01", status: "Pågår",  title: "Nettsted",              body: "Denne siden — informasjon om prosjektet, gruppa og prosessen.", page: "hjem" },
    { num: "02", status: "Utkast", title: "Oppgavebeskrivelse",    body: "Mål, rammer og avgrensning for praksisprosjektet.", page: "oppgave" },
    { num: "03", status: "Pågår",  title: "Prosjektdagbok",        body: "Logg som skrives underveis, med vurderinger bak hvert valg.", page: "dagbok" },
    { num: "04", status: "Kommer", title: "Statusrapport 1",       body: "Situasjonen etter oppstart: forståelse av oppgaven og plan.", page: "status1" },
    { num: "05", status: "Kommer", title: "Statusrapport 2",       body: "Framdrift, endringer i planen og hva som står igjen.", page: "status2" },
    { num: "06", status: "Kommer", title: "Avsluttende refleksjon", body: "Hva vi lærte, hva vi ville gjort annerledes.", page: "refleksjon" },
  ],

  task: {
    intro: "Vi skal utvikle og dokumentere en digital løsning for IK Start i løpet av praksisperioden. Arbeidet følger klubbens visuelle identitet — svart og gult — og skal leveres sammen med prosjektdagbok, to statusrapporter og en avsluttende refleksjon.",
    goalsTitle: "Mål",
    goals: [
      "Kartlegge behovet sammen med kontaktpersonen i klubben.",
      "Lage et forslag til løsning, med begrunnede valg.",
      "Utvikle, teste og dokumentere løsningen.",
      "Presentere resultatet for klubb og skole.",
    ],
    framesTitle: "Rammer",
    frames: "Fyll inn avtalt omfang, antall praksisdager, kontaktperson hos IK Start og veileder på skolen her.",
    factsTitle: "Fakta",
    facts: [
      { k: "Oppdragsgiver", v: "IK Start" },
      { k: "Periode", v: "Aug — des 2026" },
      { k: "Kontaktperson", v: "Stig Nicolai Kolding" },
      { k: "Veileder", v: "Geir Inge Hausvik & Hallgeir Nilsen" },
    ],
  },

  // Om oss-siden. "img" peker til et bilde i images/om-oss/.
  // Ligger det ikke et bilde med akkurat det filnavnet der, vises
  // de gule initialene automatisk i stedet — du trenger ikke fjerne
  // "img"-linjen selv om bildet ikke er lastet opp ennå.
  team: [
    { initials: "FA", name: "Fahrtin Assenov", role: "Fyll inn", bio: "Fyll inn", linkedin: "https://www.linkedin.com/in/fahrtin/", img: "images/om-oss/Fahrtin.jpg" },
    { initials: "DA", name: "Dawit Andom",     role: "Fyll inn", bio: "Fyll inn", linkedin: "https://www.linkedin.com/in/dawit-andom-787199243", img: "images/om-oss/Dawit.jpg" },
    { initials: "EN", name: "Elias Nahiry",    role: "Fyll inn", bio: "Fyll inn", linkedin: "https://www.linkedin.com/in/elias-nahiry-025734388/", img: "images/om-oss/Elias.jpg" },
  ],
  // "Bilder hentes fra mappen images/om-oss/ — legg til Fahrtin.jpg, Dawit.jpg og Elias.jpg der, så vises de automatisk i stedet for bokstavene.",

  diaryIntro: "En løpende logg som skrives mens arbeidet gjøres — hva vi gjorde, hvilke alternativer vi vurderte, og hva vi valgte.",

  // Ett innslag per uke. Sett "updated" til true når uka er skrevet inn,
  // så bytter merket fra "Ikke oppdatert" til "Oppdatert".
  // "choice" er valgfri — la den stå tom ("") hvis det ikke er noen
  // konkret vurdering å trekke fram den uka.
  diary: [
    { week: "Uke 34", date: "18.08.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 35", date: "25.08.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 36", date: "01.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 37", date: "08.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 38", date: "15.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 39", date: "22.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 40", date: "29.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 41", date: "06.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 42", date: "13.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 43", date: "20.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 44", date: "27.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 45", date: "03.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 46", date: "10.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 47", date: "17.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 48", date: "24.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 49", date: "01.12.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
  ],

  status1: {
    label: "Statusrapport 1",
    title: "Der vi står nå",
    items: [
      { title: "Hva vi har gjort", body: "Oppstartsmøte, kartlegging av behov og etablert struktur for nettstedet og dagboken." },
      { title: "Hvor vi står", body: "Oppgaven er avgrenset og rollene fordelt. Arbeidet følger planen." },
      { title: "Utfordringer", body: "Fyll inn: hva har vært vanskelig, og hva gjorde vi med det?" },
      { title: "Neste steg", body: "Fyll inn: hva er de tre viktigste tingene fram mot statusrapport 2?" },
    ],
  },

  status2: {
    label: "Statusrapport 2",
    title: "Fra plan til løsning",
    items: [
      { title: "Framdrift", body: "Fyll inn: hva er ferdig siden forrige rapport?" },
      { title: "Endringer i planen", body: "Fyll inn: hva har vi endret, og hvorfor?" },
      { title: "Testing og tilbakemelding", body: "Fyll inn: hva sa klubben da de så løsningen?" },
      { title: "Gjenstående arbeid", body: "Fyll inn: hva må gjøres før innlevering?" },
    ],
  },

  refleksjon: {
    label: "Avsluttende refleksjon",
    title: "Hva vi tar med oss videre",
    items: [
      { title: "Læring", body: "Fyll inn: hva kan vi nå som vi ikke kunne i august?" },
      { title: "Samarbeid", body: "Fyll inn: hvordan fungerte arbeidsfordelingen mellom oss tre?" },
      { title: "Hva vi ville gjort annerledes", body: "Fyll inn: ett konkret valg vi ville tatt på nytt." },
    ],
    quoteLabel: "Å skrive er å tenke",
    quote: "Legg in skrift her",
  },

  footer: {
    note: "Praksisprosjekt 2026 · Studentarbeid, ikke en offisiell side for IK Start",
  },
};
