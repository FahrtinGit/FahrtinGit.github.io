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
    { num: "05", status: "Ferdig", title: "Statusrapport 2",       body: "Framdrift, endringer i planen og hva som står igjen.", page: "status2" },
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
    { initials: "FA", name: "Fahrtin Assenov", linkedin: "https://www.linkedin.com/in/fahrtin/", img: "images/om-oss/Fahrtin.jpg" },
    { initials: "DA", name: "Dawit Andom",     linkedin: "https://www.linkedin.com/in/dawit-andom-787199243", img: "images/om-oss/Dawit.jpg" },
    { initials: "EN", name: "Elias Nahiry",    linkedin: "https://www.linkedin.com/in/elias-nahiry-025734388/", img: "images/om-oss/Elias.jpg" },
  ],
  // "Bilder hentes fra mappen images/om-oss/ — legg til Fahrtin.jpg, Dawit.jpg og Elias.jpg der, så vises de automatisk i stedet for bokstavene.",

  diaryIntro: "En løpende logg som skrives mens arbeidet gjøres — hva vi gjorde, hvilke alternativer vi vurderte, og hva vi valgte.",

  // Ett innslag per ferdigskrevet uke.
  // "choice" er valgfri — la den stå tom ("") hvis det ikke er noen
  // konkret vurdering å trekke fram den uka.
  diary: [
    { week: "Uke 34", date: "19.08.2026", body: "Første dag i praksis. Vi ble kjent med lokalet og ble bedre kjent med de ansatte og arbeidsplassen. Snakket om oppgaven og begynte planleggingen av semesteret — hva vi skal jobbe med utover høsten.", choice: "" },
    { week: "Uke 35", date: "26.08.2026", body: "Satt opp oppgaver i Trello som vi kan jobbe med videre, gjort mer research for toolkits vi kan bruke for video- og lydsync. Snakket om hva vi tenker før vi møtes neste gang.", choice: "" },
    { week: "Uke 36", date: "02.09.2026", body: "Vi møtte kodeteamet hos IK Start, som i dag sitter og koder flere av oppgavene manuelt — de samme oppgavene vi skal automatisere deler av. Vi satte oss ned, snakket og drøftet litt sammen. Det ga oss et bedre innblikk i hvordan de tunge prosessene kan endres.", choice: "" },
    { week: "Uke 37", date: "09.09.2026", body: "Vi fikk tilgang på separate videofiler og lydfiler som IK Start bruker på treningene, slik at vi kan begynne å teste et script der de automatisk blir synkronisert når filene lastes opp i dashboardet. Da slipper trenerpersonellet å gjøre det manuelt.", choice: "" },
    { week: "Uke 38", date: "16.09.2026", body: "Vi var på TechPoint og fikk se nye muligheter, men også mye mer informasjon om markedet der ute i arbeidslivet. Dagen etter TechPoint ble det hjemmekontor, siden vi ikke hadde kontor hos IK Start. Vi jobber videre med implementering og testing av synkroniseringsdelen, samtidig som vi har startet på en ny del — sporing av ballen i fotball, der vi skal telle tid på når den er i spill og ute av spill.", choice: "" },
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
    title: "Framdrift og veien videre",
    // Vil du ha flere avsnitt i ett kort: skriv \n\n der det nye avsnittet skal starte.
    items: [
      { title: "Hva vi har gjort", body: "Siden forrige rapport har vi jobbet med fire deler av løsningen. Dashboardet har fått et nytt og mer oversiktlig design, og CSV-importen fra PlayerMaker er tilpasset det nye eksportformatet. Vi har laget et verktøy som automatisk synkroniserer video med lydopptakene fra trenerne. For transkripsjon bruker vi WhisperX til å lage tekst med tidsstempler og skille mellom hvem som snakker. En språkmodell klassifiserer deretter spørsmålene som åpne eller lukkede. For videoanalyse har vi en prototype bygget med FastAPI, YOLO og ByteTrack, som lager en tidslinje over aktivitet og pauser på banen. I tillegg har vi merket egne treningsbilder i CVAT og trent en første YOLO-modell fra Ultralytics på dem." },
      { title: "Hvor vi står nå", body: "Dashboardet og synkroniseringen er ferdige og slått sammen i hovedkoden. Prototypen for aktivitet og pauser fungerer og har 12 automatiserte tester som består, men må testes på flere videoer før den kan tas i bruk. Transkripsjonen var en periode satt på vent på grunn av varierende lydkvalitet, men er nå i gang igjen. Vår egentrente modell finner spillere og trenere godt, men ikke ballen ennå. Vi ser nå tydeligere hvordan delene henger sammen. Bildene vi merker i CVAT kan for eksempel også brukes til å forbedre ballregistreringen i prototypen." },
      { title: "Arbeidsmetoder", body: "Vi jobber i egne branches i Git og slår dem sammen via pull requests, slik at resten av gruppa ser over endringene. Før vi bygger noe inn i dashboardet, lager vi en liten pilot for å se om ideen fungerer. Vi tester på hele treningsøkter og sammenligner med manuelle registreringer, siden korte klipp kan gi et misvisende bilde. Opptakene viser mindreårige spillere, så videoene holdes utenfor Git og behandles lokalt. Vi bruker også AI-verktøy som Claude Code og Codex til koding og feilsøking." },
      { title: "Utfordringer og interessante ting", body: "Utfordringene har vært forskjellige for de ulike delene. På lyd gir vind og bevegelse mye støy på trenermikrofonene, og Whisper tolket norsk som svensk når vi ikke satte språket selv. I ballregistreringen er ballen ofte liten, rask eller skjult bak spillere, og den kan være synlig selv om spillet står stille. I sporingen av spillere panorerer og zoomer kameraet med spillet, så modellen mister oversikten over hvem som er hvem. Felles for alle er at videofilene er store, og overføring og prosessering tar mye tid.\n\nDet vi har lært er at kvaliteten på opptakene betyr mer enn verktøyene. Vindhetter på mikrofonene ville trolig hjulpet mer enn noen programvare. Samtidig så vi at en modell trent på egne bilder ble tydelig bedre etter bare en liten mengde merkede bilder." },
      { title: "Neste steg", body: "Vi skal teste prototypen for aktivitet og pauser på flere videoer og sammenligne med manuelle registreringer. Vi gjør ferdig merkingen i CVAT og trener modellen på hele settet. Hvis den ferdigtrente modellen ikke finner ballen godt nok, finjusterer vi vår egen. For transkripsjonen skal klassifiseringen av spørsmål valideres mot kriteriene til gruppen som i dag analyserer samtalene manuelt. Vi skal også spørre IK Start om det er mulig å få et fast panoramabilde av banen. På sikt er målet at alle analysene kobles sammen med tidsstempler i et felles dashboard." },
    ],
    // Bildene under statusrapporten. Ligger i mappen images/status2/.
    gallery: [
      { src: "images/status2/cvat-merking.jpg",   alt: "Merking av spillere og trenere i CVAT" },
      { src: "images/status2/yolo-deteksjon.jpg", alt: "YOLO-modellen finner spillere på banen" },
      { src: "images/status2/ball-tracking-video.jpg",    alt: "Prototypen for ball i spill / ikke i spill viser aktiv trening på videoen" },
      { src: "images/status2/ball-tracking-resultat.jpg", alt: "Tidslinje over aktiv trening og pauser, med mulighet for å korrigere kampstopp" },
    ],
  },

  footer: {
    note: "Praksisprosjekt 2026 · Studentarbeid, ikke en offisiell side for IK Start",
  },
};
