const assert = require("node:assert/strict");
const { readFileSync, existsSync } = require("node:fs");
const { resolve } = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = resolve(__dirname, "..");
const element = () => ({
  innerHTML: "", dataset: {}, parentElement: {},
  addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; }
});
const context = vm.createContext({
  window: { addEventListener() {} }, location: { hash: "" },
  document: { body: element(), querySelector: element, addEventListener() {} },
  history: {}, clearTimeout, setTimeout
});
vm.runInContext(readFileSync(resolve(root, "systems.js"), "utf8"), context);
context.SYSTEMS = context.window.SYSTEMS;
if (existsSync(resolve(root, "theme.js"))) {
  vm.runInContext(readFileSync(resolve(root, "theme.js"), "utf8"), context);
  context.Theme = context.window.Theme;
}
vm.runInContext(readFileSync(resolve(root, "app.js"), "utf8"), context);
const systems = context.SYSTEMS;

function declarations(css) {
  const declarationsOnly = css.replace(/\/\*[\s\S]*?\*\//g, "");
  return Object.fromEntries([...declarationsOnly.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
}

function contrast(a, b) {
  const luminance = (hex) => hex.slice(1).match(/../g)
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
  const [lo, hi] = [luminance(a), luminance(b)].sort((a, b) => a - b);
  return (hi + 0.05) / (lo + 0.05);
}

test("exported CSS reproduces every preview token, including typography", () => {
  for (const system of systems) {
    const painted = {};
    context.paint({ style: { setProperty(key, value) { painted[key] = value; } } }, system);
    assert.deepEqual(declarations(context.cssBlock(system)), painted, system.id);
  }
});

test("the displayed Line and Muted swatches match the colors used in the preview", () => {
  for (const system of systems) {
    const html = context.detail(system);
    for (const [label, key] of [["Line", "line"], ["Muted", "muted"]]) {
      const values = [...html.matchAll(/data-hex="([^"]+)"[\s\S]*?<b>([^<]+)<\/b>/g)];
      const swatch = values.find((m) => m[2] === label);
      assert.ok(swatch, `${system.id}: missing ${label} swatch`);
      assert.equal(swatch[1], system[key], `${system.id}: ${label}`);
    }
  }
});

test("all sample action and body text pairs meet normal-text AA", () => {
  const failures = [];
  for (const system of systems) {
    const pairs = [["on/action", system.on, system.action || system.accent],
      ["ink/bg", system.ink, system.bg], ["ink/surface", system.ink, system.surface],
      ["muted/bg", system.muted, system.bg], ["muted/surface", system.muted, system.surface]];
    for (const [name, fg, bg] of pairs) {
      const ratio = contrast(fg, bg);
      if (ratio < 4.5) failures.push(`${system.id} ${name}: ${ratio.toFixed(3)}`);
    }
  }
  assert.deepEqual(failures, []);
});

test("uncertain samples remain labeled in the detail and copied CSS", () => {
  for (const id of ["airbnb", "aesop", "mistral", "lovable"]) {
    const system = systems.find((s) => s.id === id);
    assert.match(context.detail(system), /Unverified/);
    assert.match(context.cssBlock(system), /[Uu]nverified/);
    assert.match(context.cssBlock(system), /not an official/i);
  }
});

test("a documented correction reaches the exported action and its rendered sample", () => {
  const cursor = systems.find((s) => s.id === "cursor");
  const css = declarations(context.cssBlock(cursor));
  assert.equal(css["--accent"], "#F54E00");
  assert.equal(css["--action"], "#26251E");
  assert.equal(css["--on"], "#F7F7F4");
  assert.match(context.detail(cursor), /Observed/);
});

test("all themes describe their scope, font substitutes, and field-level evidence", () => {
  assert.equal(systems.length, 30);
  for (const system of systems) {
    assert.ok(system.study?.scope, `${system.id}: missing scope`);
    assert.ok(system.study?.sources.length, `${system.id}: missing sources`);
    const css = context.cssBlock(system);
    if (system.id !== "teenage") assert.match(css, /@import url\("https:\/\/fonts.googleapis.com/);
    assert.match(css, /Preview fonts/);
    for (const key of ["bg", "surface", "ink", "muted", "accent", "action", "on", "line", "c2", "c3"]) {
      assert.ok(system.study.evidence[key], `${system.id}: ${key} lacks evidence status`);
    }
  }
});

test("native-font themes export usable CSS without an empty hosted-font request", () => {
  const system = systems.find((s) => s.id === "teenage");
  assert.doesNotMatch(context.cssBlock(system), /@import/);
  assert.equal(declarations(context.cssBlock(system))["--display"], '"Helvetica Neue", Helvetica, Arial, sans-serif');
});
