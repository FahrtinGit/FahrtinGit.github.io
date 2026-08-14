/* ============================================================
   APP — styrer navigasjon og hvordan innholdet i content.js
   tegnes opp på siden. De fleste trenger ikke røre denne filen.
   ============================================================ */

const PAGES = ["hjem", "oppgave", "omoss", "dagbok", "status1", "status2", "refleksjon"];
const STATUS_PAGES = ["status1", "status2", "refleksjon"];

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function currentPage() {
  const hash = location.hash.replace("#", "");
  return PAGES.includes(hash) ? hash : "hjem";
}

function navigate(page) {
  location.hash = page;
}

function renderNav() {
  const page = currentPage();
  const nav = document.getElementById("main-nav");
  const primary = [
    ["hjem", "Hjem"],
    ["oppgave", "Oppgave"],
    ["omoss", "Om oss"],
    ["dagbok", "Prosjektdagbok"],
  ];
  const statusActive = STATUS_PAGES.includes(page);

  nav.innerHTML = `
    ${primary.map(([id, label]) => `
      <button type="button" class="nav-item ${page === id ? "active" : ""}" data-page="${id}">${esc(label)}</button>
    `).join("")}
    <div class="nav-dropdown" id="status-dropdown">
      <button type="button" class="nav-item ${statusActive ? "active" : ""}" id="status-toggle">
        Statusrapport
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" style="vertical-align:-1px;margin-left:4px"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
      <div class="nav-dropdown-menu">
        <button type="button" data-page="status1" class="${page === "status1" ? "active" : ""}">Statusrapport 1</button>
        <button type="button" data-page="status2" class="${page === "status2" ? "active" : ""}">Statusrapport 2</button>
        <button type="button" data-page="refleksjon" class="${page === "refleksjon" ? "active" : ""}">Avsluttende refleksjon</button>
      </div>
    </div>
  `;

  nav.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => navigate(btn.dataset.page));
  });

  const dropdown = document.getElementById("status-dropdown");
  const toggle = document.getElementById("status-toggle");
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });
  dropdown.addEventListener("mouseenter", () => dropdown.classList.add("open"));
  dropdown.addEventListener("mouseleave", () => dropdown.classList.remove("open"));
}

function renderHeaderBrand() {
  document.getElementById("brand-initials").textContent = CONTENT.brand.initials;
  document.getElementById("brand-name").textContent = CONTENT.brand.name;
  document.getElementById("brand-tagline").textContent = CONTENT.brand.tagline;
}

function renderFooter() {
  document.getElementById("footer-brand-name").textContent = CONTENT.brand.name;
  document.getElementById("footer-names").textContent = CONTENT.hero.byline;
  document.getElementById("footer-note").textContent = CONTENT.footer.note;
}

function pageHome() {
  const d = CONTENT.deliverables.map((item) => `
    <button type="button" class="deliverable-card" data-page="${item.page}">
      <div class="deliverable-top">
        <span class="deliverable-num">${esc(item.num)}</span>
        <span class="pill">${esc(item.status)}</span>
      </div>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
    </button>
  `).join("");

  return `
    <section class="hero">
      <div class="wrap">
        <div class="hero-text">
          <div class="hero-byline">${esc(CONTENT.hero.byline)}</div>
          <h1>${esc(CONTENT.hero.titleLine1)}<br>${esc(CONTENT.hero.titleLine2)}</h1>
          <div class="hero-actions">
            <button type="button" class="btn btn-primary" data-page="dagbok">Prosjektdagbok</button>
            <button type="button" class="btn btn-secondary" data-page="oppgave">Oppgavebeskrivelse</button>
          </div>
        </div>
        <div class="hero-info">
          <div class="hero-stripes"><span></span><span></span><span></span><span></span></div>
          <div>
            <div class="hero-period-label">${esc(CONTENT.hero.periodLabel)}</div>
            <div class="hero-period">${esc(CONTENT.hero.period)}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="deliverables">
      <div class="wrap">
        <h2 class="section-label">Leveranser</h2>
        <div class="grid-3">${d}</div>
      </div>
    </section>
  `;
}

function pageTask() {
  const t = CONTENT.task;
  return `
    <div class="wrap page">
      <h1>Oppgavebeskrivelse</h1>
      <hr class="rule">
      <div class="with-aside">
        <div class="task-body">
          <p>${esc(t.intro)}</p>
          <h3>${esc(t.goalsTitle)}</h3>
          <ul>${t.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
          <h3>${esc(t.framesTitle)}</h3>
          <p>${esc(t.frames)}</p>
        </div>
        <aside class="aside-box">
          <div class="aside-title">${esc(t.factsTitle)}</div>
          ${t.facts.map((f) => `
            <div class="fact-row"><span>${esc(f.k)}</span><span>${esc(f.v)}</span></div>
          `).join("")}
        </aside>
      </div>
    </div>
  `;
}

function pageTeam() {
  const cards = CONTENT.team.map((m) => `
    <article class="team-card">
      <div class="team-photo">
        <img src="${esc(m.img)}" alt="${esc(m.name)}" onerror="this.style.display='none'">
        <span>${esc(m.initials)}</span>
      </div>
      <div class="team-info">
        <h3>${esc(m.name)}</h3>
        <div class="team-role">${esc(m.role)}</div>
        <p>${esc(m.bio)}</p>
        <a class="linkedin-btn" href="${esc(m.linkedin)}" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.98 9.5h4v11.5h-4V9.5zM9.48 9.5h3.83v1.57h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.35c0-1.28-.02-2.92-1.83-2.92-1.83 0-2.11 1.38-2.11 2.83V21h-4V9.5z"></path></svg>
          LinkedIn
        </a>
      </div>
    </article>
  `).join("");

  return `
    <div class="wrap page">
      <h1>Om oss</h1>
      <hr class="rule">
      <div class="grid-3">${cards}</div>
      <div class="team-note">${esc(CONTENT.teamNote)}</div>
    </div>
  `;
}

let openDiaryIndex = 0;

function pageDiary() {
  const rows = CONTENT.diary.map((entry, i) => `
    <div class="diary-entry ${openDiaryIndex === i ? "open" : ""}">
      <button type="button" class="diary-row" data-diary-index="${i}">
        <span class="diary-week">${esc(entry.week)}</span>
        <span class="diary-date">${esc(entry.date)}</span>
        <span class="diary-state ${entry.updated ? "updated" : ""}">${entry.updated ? "Oppdatert" : "Ikke oppdatert"}</span>
        <span class="diary-chevron">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m6 9 6 6 6-6"></path></svg>
        </span>
      </button>
      <div class="diary-body">
        <p>${esc(entry.body)}</p>
        ${entry.choice ? `<div class="diary-choice"><strong>Vurdering:</strong> ${esc(entry.choice)}</div>` : ""}
      </div>
    </div>
  `).join("");

  return `
    <div class="wrap page">
      <h1>Prosjektdagbok</h1>
      <p class="diary-intro">${esc(CONTENT.diaryIntro)}</p>
      <hr class="rule">
      ${rows}
    </div>
  `;
}

function pageStatus(key) {
  const s = CONTENT[key];
  const cards = s.items.map((item) => `
    <section class="status-card">
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
    </section>
  `).join("");

  return `
    <div class="wrap page">
      <div class="status-label">${esc(s.label)}</div>
      <h1>${esc(s.title)}</h1>
      <hr class="rule">
      <div class="grid-2">${cards}</div>
    </div>
  `;
}

function pageReflection() {
  const r = CONTENT.refleksjon;
  const items = r.items.map((item) => `
    <div class="refl-item">
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
    </div>
  `).join("");

  return `
    <section class="refl-hero">
      <div class="wrap">
        <div class="section-label">${esc(r.label)}</div>
        <h1>${esc(r.title)}</h1>
      </div>
    </section>
    <div class="wrap page refl-grid" style="display:grid;gap:40px">
      <div>${items}</div>
      <aside class="refl-quote">
        <div class="refl-quote-label">${esc(r.quoteLabel)}</div>
        <p>${esc(r.quote)}</p>
      </aside>
    </div>
  `;
}

function renderMain(scrollTop) {
  const page = currentPage();
  const main = document.getElementById("app");
  switch (page) {
    case "oppgave": main.innerHTML = pageTask(); break;
    case "omoss": main.innerHTML = pageTeam(); break;
    case "dagbok": main.innerHTML = pageDiary(); break;
    case "status1": main.innerHTML = pageStatus("status1"); break;
    case "status2": main.innerHTML = pageStatus("status2"); break;
    case "refleksjon": main.innerHTML = pageReflection(); break;
    default: main.innerHTML = pageHome();
  }

  main.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => navigate(btn.dataset.page));
  });

  main.querySelectorAll("[data-diary-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.diaryIndex);
      openDiaryIndex = openDiaryIndex === i ? -1 : i;
      renderMain(false);
    });
  });

  renderNav();
  if (scrollTop) window.scrollTo(0, 0);
}

function render() {
  renderMain(true);
}

document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("status-dropdown");
  if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove("open");
});

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  renderHeaderBrand();
  renderFooter();
  render();
});
