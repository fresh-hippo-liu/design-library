# Corrections to the website style studies

Implemented 2026-10-22, following the [original audit](DESIGN-AUDIT.md). The original audit is a pre-fix snapshot, not the current application state. These remain independent website style studies, not official brand specifications or complete component systems.

All 30 studies now carry a scope, check date, source links, and field evidence. Four studies (Airbnb, Aesop, Mistral, Lovable) are explicitly unverified overall. Other studies are only partially checked. Each color distinguishes an observed source role, a value merely found in source, a library adaptation, and an unverified approximation. Guidelines have been rewritten as recommendations for the example, rather than absolute brand rules.

## Verified corrections and deliberate adaptations

- Notion: use the measured #0075DE homepage action, white label, and 8px radius; attribute the current website family to NotionInter.
- Cursor: preserve #F54E00 as brand accent, separate the measured #26251E / #F7F7F4 pill action, and keep the observed 400 headline weight. Card settings remain study approximations.
- Claude: resolve the current light-theme gray, clay, cactus, and peach tokens from retrieved CSS. The light primary action maps to gray-950 / gray-050. Remove the unsupported universal 0.8s motion claim.
- Linear: use the observed #1C1C1F secondary surface and Inter Variable attribution. Retain distinct brand, link, and semantic colors.
- Stripe: resolve text-soft → neutral-600 (#50617A). The source defines a solid action separately from decorative colors.
- Spotify: attribute the current website direction to Spotify Mix, retaining DM Sans as a clearly identified preview substitute. Scope the study to the web player.
- The Verge: scope this example to the dark variant and acknowledge Light / System / Dark.
- Raycast: use the source secondary foreground, button foreground, and Inter feature settings including ss03. The opaque white sample action is labeled an adaptation of the translucent source button token; 10px controls are described as rounded, not pills.
- Slack, Shopify, A24, and Teenage Engineering: update website font attributions from current CSS declarations or measured headings. Keep preview font substitutes separate from the website families. A24 now uses the source dark-theme warm-neutral mappings; Teenage Engineering uses te-white, te-black, and te-orange values with a native sans preview.
- Airbnb, Zapier, and Mistral: preserve the brand/accent sample and use a charcoal action with white labels. These are explicitly library adaptations for readable small text, not claims about the current source CTA.
- Nike, SpaceX, Shopify: remove separately maintained, inconsistent swatch palettes. All swatches now read directly from the same active-theme tokens as the preview and export.
- Figma: keep the sample weight at 400 and remove the contradictory 340-weight principle. Exact pastel values remain unverified.
- Wise: remove the inaccurate prohibition on bright-green backgrounds. The retrieved CSS supports that background treatment.
- All remaining uncertain color, geometry, and attribution claims stay clearly scoped and labeled; this correction does not invent missing official values.

## CSS export

`theme.js` defines the shared mapping used by the preview, swatches, and export. The export uses the preview's variable names, includes action/brand separation, display/body/control fonts, weight, tracking, casing, and OpenType features, and carries evidence comments. It imports only the hosted preview font families required by that theme; native-only themes do not make an empty font request. Font ranges now support the sample variable weights. The exported CSS defines variables for components that consume them; it does not include the preview layout.

## Color declaration changes

All active color declaration changes are in `systems.js`; `styles.css` changes the consumer for solid actions from `var(--accent)` to `var(--action)`. Original hex values are retained where supported by source; no invented replacement brand ramp was introduced. New `action` fields are listed relative to the old implicit action (`accent`).

| Study | Field | Before | After | Reason |
|---|---|---|---|---|
| Linear | `surface` | `#1C1E22` | `#1C1C1F` | --color-bg-secondary |
| Stripe | `muted` | `#425466` | `#50617A` | --hds-color-text-soft → --hds-color-core-neutral-600 |
| Airbnb | `action` | `#FF385C` | `#222222` | Charcoal sample action chosen for readable small labels; not a sampled website CTA. |
| Claude | `surface` | `#F5F0E8` | `#F5F4ED` | --theme-background-tertiary → --color-gray-100 |
| Claude | `ink` | `#181715` | `#141413` | --theme-foreground-primary → --color-gray-950 |
| Claude | `muted` | `#6B6560` | `#30302E` | --theme-foreground-secondary → --color-gray-750 |
| Claude | `accent` | `#CC785C` | `#D97757` | --theme-accent-clay-primary → --color-clay |
| Claude | `action` | `#CC785C` | `#141413` | light theme --theme-button-primary-bg → --color-gray-950 |
| Claude | `on` | `#FFFFFF` | `#FAF9F5` | light theme --theme-button-primary-fg → --color-gray-050 |
| Claude | `line` | `#E8E0D2` | `#DEDCD1` | --theme-border-secondary → --color-gray-250 |
| Claude | `c2` | `#5DB8A6` | `#BCD1CA` | --theme-brand-cactus → --color-cactus |
| Claude | `c3` | `#E8A55A` | `#EBC9B7` | --theme-brand-peach → --color-peach |
| Notion | `accent` | `#5645D4` | `#0075DE` | Get Notion free, computed background on homepage |
| Notion | `action` | `#5645D4` | `#0075DE` | Get Notion free, computed background on homepage |
| Raycast | `muted` | `#A0A0A0` | `#C2C7CA` | --color-fg-200 |
| Raycast | `on` | `#000000` | `#18191A` | --color-button-fg |
| Cursor | `action` | `#F54E00` | `#26251E` | Download for macOS, computed background on homepage |
| Cursor | `on` | `#FFFFFF` | `#F7F7F4` | Download for macOS, computed color on homepage |
| Zapier | `action` | `#FF4F00` | `#201515` | Charcoal sample action chosen for readable small labels; not a sampled website CTA. |
| Mistral | `action` | `#FA520F` | `#1F1F1F` | Charcoal sample action chosen for readable small labels; not a sampled website CTA. |
| A24 | `bg` | `#0E0E0E` | `#0E0E0D` | dark --theme-background-default → --color-warm-neutral-1000 |
| A24 | `surface` | `#0E0E0E` | `#141313` | dark --theme-background-subtle → --color-warm-neutral-975 |
| A24 | `ink` | `#F4F1EA` | `#FFFFFF` | dark --theme-text-default → --color-white |
| A24 | `muted` | `#A39E96` | `#B2ADA6` | dark --theme-text-subtle → --color-warm-neutral-400 |
| A24 | `accent` | `#F4F1EA` | `#FFFFFF` | Exact value present in retrieved source; this role is not certified. |
| A24 | `action` | `#F4F1EA` | `#FFFFFF` | Library sample action; not a sampled website CTA. |
| A24 | `on` | `#0E0E0E` | `#0E0E0D` | Exact value present in retrieved source; this role is not certified. |
| A24 | `line` | `rgba(244,241,234,.24)` | `#31302E` | dark --theme-border-default → --color-warm-neutral-950 |
| A24 | `c2` | `#8C3A2F` | `#F2F0ED` | --color-warm-neutral-50 |
| A24 | `c3` | `#D8CBB8` | `#FCFBFA` | --color-warm-neutral-25 |
| Teenage Engineering | `bg` | `#FFFFFF` | `#F5F5F5` | --te-white, selected as study canvas |
| Teenage Engineering | `surface` | `#FFFFFF` | `#F5F5F5` | --te-white, selected as study card |
| Teenage Engineering | `ink` | `#111111` | `#0F0E12` | --te-black |
| Teenage Engineering | `accent` | `#111111` | `#0F0E12` | --te-black |
| Teenage Engineering | `action` | `#111111` | `#0F0E12` | Library sample action; not a sampled website CTA. |
| Teenage Engineering | `on` | `#FFFFFF` | `#F5F5F5` | --button-text → --te-white |
| Teenage Engineering | `line` | `#111111` | `#0F0E12` | Study approximation; no current source role verified. |
| Teenage Engineering | `c2` | `#F2F2F2` | `#E5E5E5` | --te-grey-100 |
| Teenage Engineering | `c3` | `#FF5A1F` | `#F05A24` | --te-orange |

## Validation

- `node --test tests/themes.test.cjs`: 7 regression tests pass, covering preview/export parity, swatch consistency, source labels, corrected action mapping, and native-font exports.
- 150 opaque base-color text/action pairs meet normal-text AA. This does not certify image/gradient overlays, all interaction states, or the entire site against WCAG.
- All 12 distinct hosted-font stylesheet requests returned 200 with font-face declarations.
- All 30 detail pages were checked at 390px width: 10 swatches each, no page or specimen horizontal overflow.
- Five standalone pages using the exported CSS reproduce the expected action colors, font stacks, radius, weight, and Raycast font features (Cursor, Raycast, Notion, Claude, Teenage Engineering).
- Actual in-browser copying was checked against the displayed CSS text.

The [machine-readable correction log](audit/remediation.json) records each changed field and the current contrast checks. The [original machine-readable audit](audit/design-system-audit.json) retains its pre-fix values and source hashes for comparison.
