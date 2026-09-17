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
    { num: "04", status: "Ferdig", title: "Statusrapport 1",       body: "Situasjonen etter oppstart: forståelse av oppgaven og plan.", page: "status1" },
    { num: "05", status: "Kommer", title: "Statusrapport 2",       body: "Framdrift, endringer i planen og hva som står igjen.", page: "status2" },
    { num: "06", status: "Kommer", title: "Avsluttende refleksjon", body: "Hva vi lærte, hva vi ville gjort annerledes.", page: "refleksjon" },
  ],

  task: {
    intro: "Vi skal utvikle en AI-basert løsning som automatiserer et problem der et team må gå gjennom video- og lydopptak fra treningsøktene og manuelt kode inn forskjellige data fra treningsøkta. Denne manuelle prosessen er tidkrevende og lar seg vanskelig skalere etter hvert som mengden opptak øker. Først og fremst skal vi fokusere på noen få av inputtene som ligger under våre \"Mål\".",
    goalsTitle: "Mål",
    goals: [
      "Kartlegge behovet sammen med kontaktpersonen i klubben.",
      "Synkronisere video og lyd fra treningsøktene som ett datagrunnlag.",
      "Automatisk teksting av video med tidsstempler.",
      "Registrere når ballen er i spill vs. ikke i spill («ball rolling» on/off), med tidsstempler.",
      "Registrere stillhet vs. tale («silence» on/off), med tidsstempler.",
    ],
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
    { week: "Uke 34", date: "19.08.2026", updated: true, body: "Første dag i praksis. Vi ble kjent med lokalet og ble bedre kjent med de ansatte og arbeidsplassen. Snakket om oppgaven og begynte planleggingen av semesteret — hva vi skal jobbe med utover høsten.", choice: "" },
    { week: "Uke 35", date: "26.08.2026", updated: true, body: "Satt opp oppgaver i Trello som vi kan jobbe med videre, gjort mer research for toolkits vi kan bruke for video- og lydsync. Snakket om hva vi tenker før vi møtes neste gang.", choice: "" },
    { week: "Uke 36", date: "02.09.2026", updated: true, body: "Vi møtte kodeteamet hos IK Start, som i dag sitter og koder flere av oppgavene manuelt — de samme oppgavene vi skal automatisere deler av. Vi satte oss ned, snakket og drøftet litt sammen. Det ga oss et bedre innblikk i hvordan de tunge prosessene kan endres.", choice: "" },
    { week: "Uke 37", date: "09.09.2026", updated: true, body: "Vi fikk tilgang på separate videofiler og lydfiler som IK Start bruker på treningene, slik at vi kan begynne å teste et script der de automatisk blir synkronisert når filene lastes opp i dashboardet. Da slipper trenerpersonellet å gjøre det manuelt.", choice: "" },
    { week: "Uke 38", date: "16.09.2026", updated: true, body: "Vi var på TechPoint og fikk se nye muligheter, men også mye mer informasjon om markedet der ute i arbeidslivet. Dagen etter TechPoint ble det hjemmekontor, siden vi ikke hadde kontor hos IK Start. Vi jobber videre med implementering og testing av synkroniseringsdelen, samtidig som vi har startet på en ny del — sporing av ballen i fotball, der vi skal telle tid på når den er i spill og ute av spill.", choice: "" },
    { week: "Uke 39", date: "23.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 40", date: "30.09.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 41", date: "07.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 42", date: "14.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 43", date: "21.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 44", date: "28.10.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 45", date: "04.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 46", date: "11.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 47", date: "18.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 48", date: "25.11.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
    { week: "Uke 49", date: "02.12.2026", updated: false, body: "Ikke oppdatert — oppdatering kommer", choice: "" },
  ],

  status1: {
    label: "Statusrapport 1",
    title: "Der vi står nå",
    items: [
      { title: "Hva vi har gjort", body: "Vi startet praksisperioden med et oppstartsmøte hvor vi gikk gjennom prosjektet og hva IK Start ønsker at vi skal jobbe med. Etter dette har vi brukt tid på å forstå problemet og avgrense hva vi skal fokusere på. Vi har kommet fram til fire hovedområder. Vi skal jobbe med synkronisering av video og lyd, automatisk teksting med tidsstempler, registrering av når ballen er i eller ute av spill og registrering av når det er tale eller stillhet. Vi har også fordelt hovedansvaret mellom oss i gruppen og laget en plan for hvordan vi skal jobbe videre med prosjektet." },
      { title: "Hvor vi står nå", body: "Vi er fortsatt ganske tidlig i prosjektet og har så langt jobbet mest med kartlegging og planlegging. Vi har nå fått noen videoer fra treningsøkter som vi skal bruke videre i prosjektet. Videoene må først klargjøres før vi kan bruke dem til utvikling og testing. Vi må også finne ut hvordan de forskjellige delene av løsningen skal bruke samme tidsstempler og hvordan resultatene skal lagres. Målet er at dataene senere skal kunne samles og brukes i et felles Dashboard." },
      { title: "Utfordringer og interessante ting", body: "En av utfordringene er at vi jobber med ekte opptak fra fotballtreninger. Opptakene er ikke nødvendigvis klare til å brukes direkte, så vi må først behandle og klargjøre dem. Det kan også være utfordringer med blant annet bakgrunnsstøy, flere personer som snakker samtidig og at ballen ikke alltid er like lett å se i videoen. Vi må derfor teste løsningene på de faktiske opptakene for å finne ut hvor godt de fungerer. Det som er interessant med prosjektet er at vi jobber med et problem som finnes i klubben i dag. Video og lyd må gås gjennom manuelt, og hvis vi klarer å automatisere deler av dette kan det gjøre analysearbeidet enklere og mindre tidkrevende." },
      { title: "Neste steg", body: "Neste steg er å klargjøre videoene vi har fått og begynne å teste dem. Deretter skal vi starte med de forskjellige delene av løsningen, blant annet synkronisering av video og lyd, transkripsjon, registrering av tale og stillhet og registrering av når ballen er i spill. Vi skal også jobbe med hvordan resultatene skal struktureres og lagres. På sikt er målet at de forskjellige analysene skal kunne kobles sammen ved hjelp av tidsstempler og vises i et felles Dashboard." },
    ],
    // Bildene under statusrapporten. Ligger i mappen images/status1/.
    // Vil du bytte et bilde: legg den nye filen i mappen og endre "src".
    // "alt" vises ikke på siden — den leses opp av skjermlesere og vises
    // som tekst hvis bildet ikke kan lastes.
    gallery: [
      { src: "images/status1/oppstartsmote.jpg",   alt: "Oppstartsmøte med IK Start" },
      { src: "images/status1/gruppa-tribunen.jpg", alt: "Gruppa på tribunen" },
      { src: "images/status1/gruppa-arena.jpg",    alt: "Gruppa på Sparebanken Norge Arena" },
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
