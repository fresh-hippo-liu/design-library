# Design library

Thirty website style studies with reusable sample CSS variables.

Open `index.html`, or the [GitHub Pages site](https://fresh-hippo-liu.github.io/design-library/). Each card shows the study scope, source links, color evidence, website typeface attribution, loaded preview substitutes, and sample CSS.

These are independent studies, not official brand kits or complete design systems. Guidelines describe the library's example. A checked date does not mean every field was verified.

- **Observed**: the source role or a specific rendered element was identified.
- **Value found**: the exact color appears in source; its sample role is unconfirmed.
- **Adapted**: a library choice, including accessible sample actions.
- **Unverified**: no current source confirmation. This includes values retained from earlier studies.

`systems.js` holds one set of sample values and their evidence. `theme.js` supplies the same variables to the preview, swatches, and CSS export. Display, body, and control fonts are explicit; exports load the preview fonts rather than claiming to bundle proprietary website fonts. Brand accent and primary action are separate roles. The exported CSS defines variables for your own components, not the specimen layout.

Run `node --test tests/themes.test.cjs` to check export parity, swatch consistency, evidence labeling, and 150 base-color contrast pairs. The contrast checks cover normal-text AA for the sample's opaque action and text pairs; they do not certify full-page accessibility, gradients, or interaction states.

See [the original audit](DESIGN-AUDIT.md) and [the correction log](CORRECTIONS.md). GitHub Pages publishes the root of `main`; pushing a commit triggers its build and deployment.
