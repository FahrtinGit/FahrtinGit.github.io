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
          <div class="hero-logo"><img src="images/ik-start-logo.png" alt="IK Start logo"></div>
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

/* — bildegalleri med stor visning (lightbox) —
   Brukes av statussidene. Tegnes bare hvis siden har en "gallery"-liste
   i content.js, så sider uten bilder ser ut akkurat som før. */

let lightboxIndex = -1;

function galleryImages() {
  const s = CONTENT[currentPage()];
  return (s && s.gallery) || [];
}

function galleryMarkup(images) {
  if (!images || !images.length) return "";

  const thumbs = images.map((img, i) => `
    <button type="button" class="gallery-thumb" data-gallery-index="${i}" aria-label="Vis større: ${esc(img.alt)}">
      <img src="${esc(img.src)}" alt="${esc(img.alt)}" loading="lazy">
    </button>
  `).join("");

  return `
    <div class="gallery">${thumbs}</div>
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Bildevisning">
      <button type="button" class="lightbox-close" id="lightbox-close" aria-label="Lukk">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="M6 6 18 18M18 6 6 18"></path></svg>
      </button>
      <button type="button" class="lightbox-nav prev" data-lightbox-step="-1" aria-label="Forrige bilde">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m15 18-6-6 6-6"></path></svg>
      </button>
      <img class="lightbox-img" id="lightbox-img" src="" alt="">
      <button type="button" class="lightbox-nav next" data-lightbox-step="1" aria-label="Neste bilde">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m9 18 6-6-6-6"></path></svg>
      </button>
      <div class="lightbox-count" id="lightbox-count"></div>
    </div>
  `;
}

function drawLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const images = galleryImages();
  const isOpen = lightboxIndex >= 0 && lightboxIndex < images.length;

  box.classList.toggle("open", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);
  if (!isOpen) return;

  const img = document.getElementById("lightbox-img");
  img.src = images[lightboxIndex].src;
  img.alt = images[lightboxIndex].alt;
  document.getElementById("lightbox-count").textContent = `${lightboxIndex + 1} / ${images.length}`;
}

function openLightbox(i) {
  lightboxIndex = i;
  drawLightbox();
}

function closeLightbox() {
  lightboxIndex = -1;
  drawLightbox();
}

// Blar videre og starter på nytt når man kommer til enden, så pilene aldri stopper.
function stepLightbox(delta) {
  const n = galleryImages().length;
  if (lightboxIndex < 0 || n === 0) return;
  lightboxIndex = (lightboxIndex + delta + n) % n;
  drawLightbox();
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
      ${galleryMarkup(s.gallery)}
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
  lightboxIndex = -1;
  document.body.classList.remove("no-scroll");
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

  main.querySelectorAll("[data-gallery-index]").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.galleryIndex)));
  });

  main.querySelectorAll("[data-lightbox-step]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      stepLightbox(Number(btn.dataset.lightboxStep));
    });
  });

  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    // Klikk på det mørke området rundt bildet lukker visningen.
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  }

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

document.addEventListener("keydown", (e) => {
  if (lightboxIndex < 0) return;
  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    stepLightbox(-1);
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    stepLightbox(1);
  }
});

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  renderHeaderBrand();
  renderFooter();
  render();
});
