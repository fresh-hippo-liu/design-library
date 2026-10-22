window.Theme = (() => {
  const labels = {
    observed: "Observed",
    found: "Value found",
    adapted: "Adapted",
    unverified: "Unverified"
  };
  const colors = [
    ["bg", "Canvas"], ["surface", "Surface"], ["ink", "Text"],
    ["muted", "Muted"], ["accent", "Brand accent"], ["action", "Sample action"],
    ["on", "Action text"], ["line", "Line"], ["c2", "Spot 1"], ["c3", "Spot 2"]
  ];
  const fonts = [
    ["Barlow Condensed", "Barlow+Condensed:wght@400;500;700"],
    ["DM Sans", "DM+Sans:opsz,wght@9..40,400..700"],
    ["Fraunces", "Fraunces:opsz,wght@9..144,400..600"],
    ["IBM Plex Sans", "IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400"],
    ["Inter", "Inter:wght@300..700"],
    ["Newsreader", "Newsreader:opsz,wght@6..72,400..600"],
    ["Outfit", "Outfit:wght@400..700"],
    ["Rubik", "Rubik:wght@400..700"],
    ["Space Grotesk", "Space+Grotesk:wght@400..700"]
  ];

  function tokens(system) {
    return {
      "--bg": system.bg, "--surface": system.surface, "--ink": system.ink,
      "--muted": system.muted, "--accent": system.accent, "--action": system.action,
      "--on": system.on, "--line": system.line, "--c2": system.c2, "--c3": system.c3,
      "--r": system.r, "--rc": system.rc, "--sh": system.shadow,
      "--display": system.css, "--body": system.bodyCss, "--control": system.controlCss,
      "--dw": String(system.weight), "--track": system.track,
      "--case": system.caps ? "uppercase" : "none", "--features": system.features
    };
  }

  function palette(system) {
    return colors.map(([key, name]) => ({ key, name, value: system[key], ...system.study.evidence[key] }));
  }

  function fontUrl(system) {
    const stacks = [system.css, system.bodyCss, system.controlCss].join(",");
    const families = fonts.filter(([name]) => stacks.includes(`"${name}"`)).map(([, query]) => query);
    if (!families.length) return "";
    return `https://fonts.googleapis.com/css2?family=${families.join("&family=")}&display=swap`;
  }

  function css(system) {
    const study = system.study;
    const header = [
      `${system.name}: ${study.scope}`,
      "Website style study, not an official brand specification.",
      `Checked ${study.checkedAt}. ${study.status === "unverified" ? "Unverified source styling." : "Partially checked; see each color's evidence."}`,
      "Observed = source role; Value found = value present, role unconfirmed; Adapted = library choice; Unverified = no source confirmation.",
      `Website display: ${system.face}; body: ${system.bodyFace}.`,
      `Preview fonts (loaded substitutes): display ${system.css}; body ${system.bodyCss}; controls ${system.controlCss}.`,
      study.shapeNote,
      study.notes,
      ...study.sources.map((url) => `Source: ${url}`)
    ].join("\n * ");
    const declarations = Object.entries(tokens(system)).map(([key, value]) => {
      const evidence = study.evidence[key.slice(2)];
      const comment = evidence ? ` /* ${labels[evidence.status]}: ${evidence.reference} */` : " /* Sample setting; see study notes. */";
      return `  ${key}: ${value};${comment}`;
    }).join("\n");
    const url = fontUrl(system);
    const imports = url ? `@import url("${url}");\n\n` : "";
    return `/* ${header}\n */\n${imports}:root {\n${declarations}\n}`;
  }

  return { tokens, palette, fontUrl, css, labels };
})();
