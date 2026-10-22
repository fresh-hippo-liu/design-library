const CATS = ["All", "Product", "Finance", "Retail", "Editorial", "Media", "Tools"];
const SANS = '"Inter", "Helvetica Neue", sans-serif';

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
    <div class="grid">
      ${items.map(card).join("")}
    </div>
    ${items.length === SYSTEMS.length ? `<p class="note">These 30 systems were studied from public pages, not official kits. Type on the cards is a close open-source stand-in. The original name is in the detail.</p>` : ""}
  `;
}

function match(system) {
  if (state.cat !== "All" && system.cat !== state.cat) return false;
  if (!state.q) return true;
  const hay = [system.name, system.title, system.cat, system.use, system.face, ...system.principles]
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
  return MARK[system.id] || "";
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
  return `
    <article class="sheet">
      <button type="button" class="back" data-close>Back</button>
      <section class="specimen" data-kind="${system.kind}" data-paint="${system.id}">
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
        <h2>Principles</h2>
        <ul class="principles">
          ${system.principles.map((item) => `<li>${esc(item)}</li>`).join("")}
        </ul>
        <h2>Colors</h2>
        <div class="swatches">
          ${system.colors.map(([name, hex]) => `
            <button type="button" class="swatch" data-hex="${esc(hex)}">
              <i style="background:${esc(hex)}"></i>
              <span><b>${esc(name)}</b><small>${esc(hex)}</small></span>
            </button>
          `).join("")}
        </div>
        <h2>Type and shape</h2>
        <dl class="facts">
          <div><dt>Typeface</dt><dd>${esc(system.face)}</dd></div>
          <div><dt>Weight</dt><dd>${esc(String(system.weight))}</dd></div>
          <div><dt>Tracking</dt><dd>${esc(system.track)}</dd></div>
          <div><dt>Controls</dt><dd>${esc(system.r)}</dd></div>
          <div><dt>Cards</dt><dd>${esc(system.rc)}</dd></div>
          <div><dt>Shadow</dt><dd>${esc(system.shadow)}</dd></div>
        </dl>
        <div class="codehead">
          <h2>Variables</h2>
          <button type="button" class="copy" data-copy-css="${esc(system.id)}">Copy CSS variables</button>
        </div>
        <pre class="css">${esc(cssBlock(system))}</pre>
        <p class="fine">Click a color to copy it. Studied from public pages in October 2026. Use it with your own content.</p>
      </div>
    </article>
  `;
}

function paintAll(system) {
  for (const node of app.querySelectorAll("[data-paint]")) paint(node, system);
}

function paint(node, system) {
  const body = system.id === "teenage" ? system.css : SANS;
  const display = system.css;
  const pairs = {
    "--bg": system.bg,
    "--surface": system.surface,
    "--ink": system.ink,
    "--muted": system.muted,
    "--accent": system.accent,
    "--on": system.on,
    "--line": system.line,
    "--c2": system.c2,
    "--c3": system.c3,
    "--r": system.r,
    "--rc": system.rc,
    "--sh": system.shadow,
    "--display": display,
    "--body": body,
    "--dw": String(system.weight),
    "--track": system.track,
    "--case": system.caps ? "uppercase" : "none"
  };
  for (const [key, value] of Object.entries(pairs)) node.style.setProperty(key, value);
}

function cssBlock(system) {
  return `:root {
  --bg: ${system.bg};
  --surface: ${system.surface};
  --text: ${system.ink};
  --muted: ${system.muted};
  --accent: ${system.accent};
  --accent-text: ${system.on};
  --line: ${system.line};
  --spot: ${system.c2};
  --spot-2: ${system.c3};
  --font-display: ${system.css};
  --font-body: ${system.id === "teenage" ? system.css : SANS};
  --radius: ${system.r};
  --radius-card: ${system.rc};
  --shadow: ${system.shadow};
}`;
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
