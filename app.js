const CATS = ["All", "AI Creation", "Comics", "Product", "Finance", "Retail", "Editorial", "Media", "Tools"];

const state = {
  cat: "All",
  q: "",
  id: location.hash.replace(/^#\/?/, "")
};

const app = document.querySelector("#app");
const filters = document.querySelector("#filters");
const q = document.querySelector("#q");
const toastEl = document.querySelector("#toast");
let toastTimer = 0;

filters.innerHTML = CATS.map((cat) =>
  `<button type="button" data-cat="${cat}" aria-pressed="${cat === state.cat}">${cat}</button>`
).join("");

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.cat = button.dataset.cat;
  for (const item of filters.querySelectorAll("button")) {
    item.setAttribute("aria-pressed", String(item === button));
  }
  if (state.id) {
    state.id = "";
    history.pushState(null, "", "#/");
  }
  render();
});

q.addEventListener("input", () => {
  state.q = q.value.trim().toLowerCase();
  render();
});

window.addEventListener("hashchange", () => {
  state.id = location.hash.replace(/^#\/?/, "");
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.id) {
    state.id = "";
    history.pushState(null, "", "#/");
    render();
  }
});

app.addEventListener("click", async (event) => {
  const copyHex = event.target.closest("[data-hex]");
  if (copyHex) {
    await copy(copyHex.dataset.hex);
    return;
  }
  const copyCss = event.target.closest("[data-copy-css]");
  if (copyCss) {
    const system = SYSTEMS.find((item) => item.id === copyCss.dataset.copyCss);
    await copy(cssBlock(system));
    return;
  }
  const open = event.target.closest("[data-open]");
  if (open) {
    state.id = open.dataset.open;
    history.pushState(null, "", `#/${state.id}`);
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (event.target.closest("[data-close]")) {
    state.id = "";
    history.pushState(null, "", "#/");
    render();
  }
});

function render() {
  const current = SYSTEMS.find((item) => item.id === state.id);
  document.body.dataset.view = current ? "detail" : "gallery";
  filters.hidden = Boolean(current);
  q.parentElement.hidden = Boolean(current);
  app.innerHTML = current ? detail(current) : gallery();
  if (current) paintAll(current);
  else SYSTEMS.forEach((system) => {
    const node = app.querySelector(`[data-paint="${system.id}"]`);
    if (node) paint(node, system);
  });
}

function gallery() {
  const items = SYSTEMS.filter(match);
  if (!items.length) {
    return `<p class="empty">Nothing matches. Try another site, or another feeling.</p>`;
  }
  return `
    <p class="collection-note">${SYSTEMS.length} website style studies. Each detail separates observed values, unverified samples, and library adaptations. Preview fonts are substitutes; these are not official brand systems.</p>
    <div class="grid">
      ${items.map(card).join("")}
    </div>
  `;
}

function match(system) {
  if (state.cat !== "All" && system.cat !== state.cat) return false;
  if (!state.q) return true;
  const hay = [system.name, system.title, system.cat, system.use, system.face, system.bodyFace, system.study.scope, ...system.principles]
    .join(" ")
    .toLowerCase();
  return hay.includes(state.q);
}

function card(system) {
  return `
    <article class="card">
      <button type="button" class="pv" data-kind="${system.kind}" data-paint="${system.id}" data-open="${system.id}" aria-label="Open ${esc(system.name)}">
        <i class="s1"></i><i class="s2" data-label="${esc(chip(system))}"></i><i class="s3"></i>
        <b>${esc(previewText(system))}</b>
      </button>
      <div class="foot">
        <div>
          <h2>${esc(system.name)}</h2>
          <p>${esc(system.title)}</p>
          <span class="study-status">${system.study.status === "unverified" ? "Unverified study" : "Partially checked study"}</span>
        </div>
        <button type="button" class="more" data-open="${system.id}">Details</button>
      </div>
    </article>
  `;
}

const MARK = {
  linear: "New",
  stripe: "Money",
  vercel: "Preview",
  aesop: "Hands",
  claude: "Answer",
  framer: "Page",
  raycast: "Open",
  spotify: "Play",
  nike: "RUN",
  posthog: "Notes",
  resend: "Email",
  cursor: "Quiet",
  theverge: "HAZARD",
  spacex: "STARSHIP",
  zapier: "Connect",
  mistral: "Light",
  lovable: "Make",
  shopify: "SHOP",
  a24: "NOW",
  teenage: "OP–1",
  arc: "Arc"
};

function previewText(system) {
  return MARK[system.id] || (system.batch ? system.name : "");
}

function chip(system) {
  const short = {
    posthog: "Start",
    cursor: "Get",
    zapier: "Start",
    lovable: "Start",
    claude: "Ask",
    aesop: "Add"
  };
  return short[system.id] || system.cta.split(" ")[0];
}

function detail(system) {
  const study = system.study;
  return `
    <article class="sheet">
      <button type="button" class="back" data-close>Back</button>
      <section class="specimen" data-kind="${system.kind}" data-paint="${system.id}">
        <p class="specimen-label">Library example · Preview font substitutes</p>
        <div class="sp-top">
          <strong>${esc(system.name)}</strong>
          <span>${esc(system.title)}</span>
          <button type="button" class="sp-btn">${esc(system.cta)}</button>
        </div>
        <h2 class="sp-h">${esc(system.headline)}</h2>
        <p class="sp-p">${esc(system.note)}</p>
        <div class="sp-row">
          <button type="button" class="sp-btn">${esc(system.cta)}</button>
          <button type="button" class="sp-ghost">Later</button>
        </div>
        <div class="sp-card">
          <span class="sp-k">Today</span>
          <b>24</b>
          <input class="sp-in" value="Search" aria-label="Example field" readonly>
        </div>
      </section>
      <div class="meta">
        <p class="lead">${esc(system.use)}</p>
        <p class="who"><a href="${esc(system.url)}" target="_blank" rel="noopener">${esc(system.url.replace(/^https?:\/\//, ""))}</a><span>${esc(system.cat)}</span></p>
        <div class="study-note">
          <span class="evidence" data-status="${study.status}">${study.status === "unverified" ? "Unverified" : "Partially checked"}</span>
          <p><strong>${esc(study.scope)}</strong> · Checked ${esc(study.checkedAt)}</p>
          <p>${esc(study.notes)}</p>
          <p>This is a library study, not an official brand specification.</p>
          <ul class="sources">${study.sources.map((url) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(url.replace(/^https?:\/\//, ""))}</a></li>`).join("")}</ul>
        </div>
        <h2>Study guidelines</h2>
        <p class="section-note">Author recommendations for this example, not official brand rules.</p>
        <ul class="principles">
          ${system.principles.map((item) => `<li>${esc(item)}</li>`).join("")}
        </ul>
        <h2>Sample colors and evidence</h2>
        <p class="section-note">Observed: source role confirmed. Value found: source contains the color, role unconfirmed. Adapted: library choice. Unverified: no current source confirmation.</p>
        <div class="swatches">
          ${Theme.palette(system).map(({ name, value, status, reference }) => `
            <button type="button" class="swatch" data-hex="${esc(value)}" title="${esc(reference)}">
              <i style="background:${esc(value)}" aria-hidden="true"></i>
              <span><b>${esc(name)}</b><small>${esc(value)}</small><em class="evidence" data-status="${status}">${Theme.labels[status]}</em></span>
            </button>
          `).join("")}
        </div>
        <h2>Website type and preview substitutes</h2>
        <p class="section-note">${esc(study.fontNote)}</p>
        <dl class="facts">
          <div><dt>Website display</dt><dd>${esc(system.face)}</dd></div>
          <div><dt>Website body</dt><dd>${esc(system.bodyFace)}</dd></div>
          <div><dt>Display preview</dt><dd>${esc(system.css)}</dd></div>
          <div><dt>Body preview</dt><dd>${esc(system.bodyCss)}</dd></div>
          <div><dt>Control preview</dt><dd>${esc(system.controlCss)}</dd></div>
          <div><dt>Sample weight</dt><dd>${esc(String(system.weight))}</dd></div>
          <div><dt>Sample tracking</dt><dd>${esc(system.track)}</dd></div>
          <div><dt>Font features</dt><dd>${esc(system.features)}</dd></div>
          <div><dt>Control radius</dt><dd>${esc(system.r)}</dd></div>
          <div><dt>Card radius</dt><dd>${esc(system.rc)}</dd></div>
          <div><dt>Sample shadow</dt><dd>${esc(system.shadow)}</dd></div>
        </dl>
        <p class="section-note">${esc(study.shapeNote)}</p>
        <div class="codehead">
          <h2>Variables</h2>
          <button type="button" class="copy" data-copy-css="${esc(system.id)}">Copy theme CSS</button>
        </div>
        <pre class="css">${esc(cssBlock(system))}</pre>
        <p class="fine">Color swatches, preview, and exported variables share the same tokens. The export includes font imports, sample typography, and evidence comments. It defines variables for your own components; it does not include the specimen layout.</p>
      </div>
    </article>
  `;
}

function paintAll(system) {
  for (const node of app.querySelectorAll("[data-paint]")) paint(node, system);
}

function paint(node, system) {
  for (const [key, value] of Object.entries(Theme.tokens(system))) node.style.setProperty(key, value);
}

function cssBlock(system) {
  return Theme.css(system);
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  toast("Copied");
}

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1400);
}

render();
