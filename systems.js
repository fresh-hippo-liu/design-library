/* Website style studies. Field evidence is dated 2026-10-22; not official brand kits. */
window.SYSTEMS = [
  {
    "id": "linear",
    "name": "Linear",
    "title": "Precision dark",
    "cat": "Product",
    "url": "https://linear.app",
    "kind": "window",
    "face": "Inter Variable",
    "css": "\"Inter\", \"SF Pro Display\", sans-serif",
    "weight": 510,
    "track": "-0.03em",
    "bg": "#010102",
    "surface": "#1C1C1F",
    "ink": "#F7F8F8",
    "muted": "#8A8F98",
    "accent": "#5E6AD2",
    "on": "#FFFFFF",
    "line": "#23252A",
    "c2": "#828FFF",
    "c3": "#27A644",
    "r": "8px",
    "rc": "12px",
    "shadow": "none",
    "headline": "The issue, already moving.",
    "note": "Dark layers, with separate brand and semantic colors.",
    "cta": "New issue",
    "use": "A tool that should feel fast, dense, and quiet.",
    "principles": [
      "Use lifted dark surfaces and thin dividers in this example.",
      "Keep a separate lavender brand accent, link color, and semantic green.",
      "Use a medium display weight; the website defines a 510 medium token."
    ],
    "action": "#5E6AD2",
    "bodyFace": "Inter Variable",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark marketing study",
      "notes": "The site defines distinct marketing, secondary, and panel surfaces. This study uses its secondary surface for the sample card.",
      "sources": [
        "https://linear.app"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "--color-bg-marketing"
        },
        "surface": {
          "status": "observed",
          "reference": "--color-bg-secondary"
        },
        "ink": {
          "status": "observed",
          "reference": "--color-text-primary"
        },
        "muted": {
          "status": "observed",
          "reference": "--color-text-tertiary"
        },
        "accent": {
          "status": "observed",
          "reference": "--color-brand-bg"
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "line": {
          "status": "observed",
          "reference": "--color-border-primary"
        },
        "c2": {
          "status": "observed",
          "reference": "--color-link-primary"
        },
        "c3": {
          "status": "observed",
          "reference": "--color-green"
        }
      }
    }
  },
  {
    "id": "stripe",
    "name": "Stripe",
    "title": "Light ribbon",
    "cat": "Finance",
    "url": "https://stripe.com",
    "kind": "mesh",
    "face": "Söhne (sohne-var)",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 300,
    "track": "-0.02em",
    "bg": "#FFFFFF",
    "surface": "#F6F9FC",
    "ink": "#061B31",
    "muted": "#50617A",
    "accent": "#533AFD",
    "on": "#FFFFFF",
    "line": "#E5EDF5",
    "c2": "#FF6118",
    "c3": "#FB76FA",
    "r": "999px",
    "rc": "16px",
    "shadow": "0 13px 27px -5px rgba(50,50,93,.18), 0 8px 16px -8px rgba(0,0,0,.12)",
    "headline": "Money, drawn in light.",
    "note": "A solid action sits apart from decorative color.",
    "cta": "Start now",
    "use": "A complex product that should feel exact, with one expensive flourish.",
    "principles": [
      "Keep the decorative color treatment separate from the solid action.",
      "Use the observed HDS solid-action and text-soft tokens in this sample.",
      "Treat the light headline, pill shape, and shadow as study choices."
    ],
    "action": "#533AFD",
    "bodyFace": "Söhne (sohne-var)",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light marketing study",
      "notes": "HDS defines semantic color roles. The sample typography, radius, and shadow are approximations, not global Stripe rules.",
      "sources": [
        "https://stripe.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "observed",
          "reference": "--hds-color-text-solid → --hds-color-core-neutral-990"
        },
        "muted": {
          "status": "observed",
          "reference": "--hds-color-text-soft → --hds-color-core-neutral-600"
        },
        "accent": {
          "status": "observed",
          "reference": "--hds-color-core-brand-600"
        },
        "action": {
          "status": "observed",
          "reference": "--hds-color-action-bg-solid → --hds-color-core-brand-600"
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "vercel",
    "name": "Vercel",
    "title": "Black and white",
    "cat": "Product",
    "url": "https://vercel.com",
    "kind": "stack",
    "face": "Geist / GeistSans",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 500,
    "track": "-0.04em",
    "bg": "#FAFAFA",
    "surface": "#FFFFFF",
    "ink": "#171717",
    "muted": "#4D4D4D",
    "accent": "#171717",
    "on": "#FFFFFF",
    "line": "#EBEBEB",
    "c2": "#7928CA",
    "c3": "#0070F3",
    "r": "6px",
    "rc": "12px",
    "shadow": "none",
    "headline": "Preview. Then ship.",
    "note": "Monochrome base; semantic colors remain available.",
    "cta": "Deploy",
    "use": "A developer product whose page should read like a clean deploy log.",
    "principles": [
      "Use a quiet monochrome base for this particular example.",
      "Keep semantic colors available; Geist includes multiple color scales.",
      "Use the sample 6px controls without treating that radius as universal."
    ],
    "action": "#171717",
    "bodyFace": "Geist / GeistSans",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light marketing-inspired study",
      "notes": "This is a marketing-inspired example, not the full Geist system. Official buttons include rounded and shadow variants.",
      "sources": [
        "https://vercel.com/geist/colors",
        "https://vercel.com/geist/button"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "apple",
    "name": "Apple",
    "title": "Product white",
    "cat": "Retail",
    "url": "https://apple.com",
    "kind": "pills",
    "face": "SF Pro Display",
    "css": "-apple-system, \"SF Pro Display\", \"Inter\", sans-serif",
    "weight": 600,
    "track": "-0.02em",
    "bg": "#F5F5F7",
    "surface": "#FFFFFF",
    "ink": "#1D1D1F",
    "muted": "#6E6E73",
    "accent": "#0071E3",
    "on": "#FFFFFF",
    "line": "#D2D2D7",
    "c2": "#000000",
    "c3": "#FAFAFC",
    "r": "999px",
    "rc": "18px",
    "shadow": "none",
    "headline": "The object, larger than the page.",
    "note": "A product-page study with a blue action.",
    "cta": "Learn more",
    "use": "A launch page: one product, one sentence, one large image.",
    "principles": [
      "Give the product image room and keep supporting copy concise.",
      "Use the sampled blue for the example action; verify links separately.",
      "Treat the 18px card and 600 display weight as sample settings."
    ],
    "action": "#0071E3",
    "bodyFace": "SF Pro Text",
    "bodyCss": "-apple-system, \"SF Pro Text\", \"Inter\", sans-serif",
    "controlCss": "-apple-system, \"SF Pro Text\", \"Inter\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light product-page study",
      "notes": "The source contains these colors and SF Pro families. The sample does not represent every Apple page or Human Interface Guideline.",
      "sources": [
        "https://apple.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "airbnb",
    "name": "Airbnb",
    "title": "Coral",
    "cat": "Retail",
    "url": "https://airbnb.com",
    "kind": "pills",
    "face": "Unverified",
    "css": "\"DM Sans\", \"Circular\", sans-serif",
    "weight": 700,
    "track": "-0.03em",
    "bg": "#FFFFFF",
    "surface": "#F7F7F7",
    "ink": "#222222",
    "muted": "#6A6A6A",
    "accent": "#FF385C",
    "on": "#FFFFFF",
    "line": "#DDDDDD",
    "c2": "#FFD1DA",
    "c3": "#E00B41",
    "r": "999px",
    "rc": "16px",
    "shadow": "0 6px 16px rgba(0,0,0,.08)",
    "headline": "A place, then a date.",
    "note": "Photo-led study; action color adapted for readability.",
    "cta": "Search",
    "use": "A photo sells the stay. Spend the brand color sparingly.",
    "principles": [
      "Keep photography dominant in this proposed layout.",
      "Retain coral as an unverified brand-color sample.",
      "Use a charcoal action for readable labels; this is a library adaptation."
    ],
    "action": "#222222",
    "bodyFace": "Unverified",
    "bodyCss": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "unverified",
      "checkedAt": "2026-10-22",
      "scope": "Unverified light retail study",
      "notes": "The source request returned a script redirect, not usable page CSS. Colors, Cereal attribution, and shapes remain unverified.",
      "sources": [
        "https://airbnb.com"
      ],
      "fontStatus": "unverified",
      "fontNote": "Current website typefaces could not be verified. The preview families are library choices.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Charcoal sample action chosen for readable small labels; not a sampled website CTA."
        },
        "on": {
          "status": "adapted",
          "reference": "White label paired with the library charcoal action for contrast."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "aesop",
    "name": "Aesop",
    "title": "Apothecary",
    "cat": "Retail",
    "url": "https://www.aesop.com",
    "kind": "paper",
    "face": "Unverified",
    "css": "\"Newsreader\", \"Iowan Old Style\", serif",
    "weight": 460,
    "track": "0em",
    "bg": "#FFFEF2",
    "surface": "#FFFEF2",
    "ink": "#333333",
    "muted": "#6E6A62",
    "accent": "#333333",
    "on": "#FFFEF2",
    "line": "#E4E0D0",
    "c2": "#C5C1B0",
    "c3": "#F3F1E4",
    "r": "0px",
    "rc": "0px",
    "shadow": "none",
    "headline": "A formulation for the hands.",
    "note": "Paper, charcoal, and square study components.",
    "cta": "Add",
    "use": "Retail that should feel restrained and readable, not on sale.",
    "principles": [
      "Use parchment and charcoal as the proposed palette.",
      "Keep the example square and shadow-free.",
      "Pair the serif preview heading with a quiet sans body."
    ],
    "action": "#333333",
    "bodyFace": "Unverified",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "unverified",
      "checkedAt": "2026-10-22",
      "scope": "Unverified paper retail study",
      "notes": "The site blocked CSS retrieval. Suisse Intl / humanist serif was the earlier attribution, not a confirmed current font. Newsreader and Inter are preview choices.",
      "sources": [
        "https://www.aesop.com"
      ],
      "fontStatus": "unverified",
      "fontNote": "Current website typefaces could not be verified. The preview families are library choices.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "arc",
    "name": "Arc",
    "title": "Electric blue",
    "cat": "Product",
    "url": "https://arc.net",
    "kind": "signal",
    "face": "Marlin family",
    "css": "\"Outfit\", \"Avenir Next\", sans-serif",
    "weight": 560,
    "track": "-0.03em",
    "bg": "#FFFCEC",
    "surface": "#FFFFFF",
    "ink": "#141414",
    "muted": "#5C5848",
    "accent": "#3139FB",
    "on": "#FFFFFF",
    "line": "#E7E2C8",
    "c2": "#FFB38A",
    "c3": "#FFF6C2",
    "r": "999px",
    "rc": "20px",
    "shadow": "none",
    "headline": "Meet the next tab.",
    "note": "Cream and electric blue; supporting colors are approximations.",
    "cta": "Download",
    "use": "Consumer software with a poster feeling that still behaves like a product.",
    "principles": [
      "Use the observed cream and electric-blue brand tokens.",
      "Keep the proposed supporting peach and yellow secondary.",
      "Use generous sample radii without making them a site-wide rule."
    ],
    "action": "#3139FB",
    "bodyFace": "Inter / Marlin families declared",
    "bodyCss": "\"Outfit\", \"Avenir Next\", sans-serif",
    "controlCss": "\"Outfit\", \"Avenir Next\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Cream marketing study",
      "notes": "Brand blue and off-white are directly named tokens. The supporting palette, exact font roles, and shapes need element-level evidence.",
      "sources": [
        "https://arc.net"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "--colors-brandOffwhite"
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "observed",
          "reference": "--colors-brandBlue"
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "claude",
    "name": "Claude",
    "title": "Clay",
    "cat": "Editorial",
    "url": "https://claude.com",
    "kind": "paper",
    "face": "anthropicSerif",
    "css": "\"Newsreader\", \"Iowan Old Style\", serif",
    "weight": 460,
    "track": "-0.02em",
    "bg": "#FAF9F5",
    "surface": "#F5F4ED",
    "ink": "#141413",
    "muted": "#30302E",
    "accent": "#D97757",
    "on": "#FAF9F5",
    "line": "#DEDCD1",
    "c2": "#BCD1CA",
    "c3": "#EBC9B7",
    "r": "12px",
    "rc": "16px",
    "shadow": "none",
    "headline": "A slower kind of answer.",
    "note": "Warm paper, clay accent, and a neutral primary action.",
    "cta": "Ask",
    "use": "Research, writing, and conversation. Humanist, not neon.",
    "principles": [
      "Use the observed warm secondary background as this study canvas.",
      "Separate clay accent from the neutral primary-action tokens.",
      "Use serif display and sans body substitutes; choose motion per interaction."
    ],
    "action": "#141413",
    "bodyFace": "anthropicSans",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Warm light theme-token study",
      "notes": "The current CSS declares anthropic font families and distinct primary/clay actions. This study uses the observed gray and clay tokens; it does not prescribe a universal motion duration.",
      "sources": [
        "https://claude.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "--color-gray-050, selected as study canvas"
        },
        "surface": {
          "status": "observed",
          "reference": "--theme-background-tertiary → --color-gray-100"
        },
        "ink": {
          "status": "observed",
          "reference": "--theme-foreground-primary → --color-gray-950"
        },
        "muted": {
          "status": "observed",
          "reference": "--theme-foreground-secondary → --color-gray-750"
        },
        "accent": {
          "status": "observed",
          "reference": "--theme-accent-clay-primary → --color-clay"
        },
        "action": {
          "status": "observed",
          "reference": "light theme --theme-button-primary-bg → --color-gray-950"
        },
        "on": {
          "status": "observed",
          "reference": "light theme --theme-button-primary-fg → --color-gray-050"
        },
        "line": {
          "status": "observed",
          "reference": "--theme-border-secondary → --color-gray-250"
        },
        "c2": {
          "status": "observed",
          "reference": "--theme-brand-cactus → --color-cactus"
        },
        "c3": {
          "status": "observed",
          "reference": "--theme-brand-peach → --color-peach"
        }
      }
    }
  },
  {
    "id": "notion",
    "name": "Notion",
    "title": "Blue action",
    "cat": "Product",
    "url": "https://www.notion.com",
    "kind": "blocks",
    "face": "NotionInter",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 600,
    "track": "-0.03em",
    "bg": "#FFFFFF",
    "surface": "#F6F5F4",
    "ink": "#1A1A1A",
    "muted": "#5D5B54",
    "accent": "#0075DE",
    "on": "#FFFFFF",
    "line": "#E5E3DF",
    "c2": "#F5D75E",
    "c3": "#D9F3E1",
    "r": "8px",
    "rc": "12px",
    "shadow": "0 12px 32px rgba(0,0,0,.08)",
    "headline": "A page with many rooms.",
    "note": "White chrome with the observed blue homepage action.",
    "cta": "Get Notion",
    "use": "A workspace. Color belongs to the user's content, not the navigation.",
    "principles": [
      "Use the observed blue Get Notion free action and 8px control radius.",
      "Keep content colors separate from navigation and action roles.",
      "Use a plain sans hierarchy; other pages and product themes may differ."
    ],
    "action": "#0075DE",
    "bodyFace": "NotionInter",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Current light homepage study",
      "notes": "The browser measured the homepage primary action as #0075DE with white text and an 8px radius. Earlier purple-only guidance was incorrect for this page.",
      "sources": [
        "https://www.notion.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Control radius observed on the homepage; card radius and shadow are sample settings.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "observed",
          "reference": "--tatami-color-gray-200"
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "observed",
          "reference": "Get Notion free, computed background on homepage"
        },
        "action": {
          "status": "observed",
          "reference": "Get Notion free, computed background on homepage"
        },
        "on": {
          "status": "observed",
          "reference": "Get Notion free, computed color on homepage"
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "figma",
    "name": "Figma",
    "title": "Color blocks",
    "cat": "Product",
    "url": "https://www.figma.com",
    "kind": "blocks",
    "face": "figmaSans",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 400,
    "track": "-0.04em",
    "bg": "#FFFFFF",
    "surface": "#F7F7F5",
    "ink": "#000000",
    "muted": "#4A4A4A",
    "accent": "#000000",
    "on": "#FFFFFF",
    "line": "#E6E6E6",
    "c2": "#DCEEB1",
    "c3": "#C5B0F4",
    "r": "999px",
    "rc": "24px",
    "shadow": "none",
    "headline": "A clean desk. Then a note.",
    "note": "Neutral chrome with proposed pastel panels.",
    "cta": "Try Figma",
    "use": "A serious tool that can still change color between sections.",
    "principles": [
      "Keep neutral controls separate from the proposed pastel panels.",
      "Use 400 for this preview heading; this is not an official 340-weight rule.",
      "Choose radii by component; the site exposes several radius tokens."
    ],
    "action": "#000000",
    "bodyFace": "figmaSans",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light marketing-inspired study",
      "notes": "figmaSans is declared in the source. These exact pastel values and the preview weight are unverified study choices.",
      "sources": [
        "https://www.figma.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "framer",
    "name": "Framer",
    "title": "Black stage",
    "cat": "Product",
    "url": "https://www.framer.com",
    "kind": "mesh",
    "face": "GT Walsheim Medium",
    "css": "\"Outfit\", \"Avenir Next\", sans-serif",
    "weight": 500,
    "track": "-0.045em",
    "bg": "#090909",
    "surface": "#141414",
    "ink": "#FFFFFF",
    "muted": "#999999",
    "accent": "#FFFFFF",
    "on": "#000000",
    "line": "#262626",
    "c2": "#D44DF0",
    "c3": "#FF7A3D",
    "r": "999px",
    "rc": "16px",
    "shadow": "none",
    "headline": "The page is the artboard.",
    "note": "Dark stage, medium display type, and showcase color.",
    "cta": "Start",
    "use": "A portfolio or a builder. The page itself should move, and it should be large.",
    "principles": [
      "Use a dark stage and give the showcase room.",
      "Use the observed medium headline as the typographic direction.",
      "Treat these vivid accents and pill controls as sample approximations."
    ],
    "action": "#FFFFFF",
    "bodyFace": "Unverified",
    "bodyCss": "\"Outfit\", \"Avenir Next\", sans-serif",
    "controlCss": "\"Outfit\", \"Avenir Next\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark marketing study",
      "notes": "The browser measured GT Walsheim Medium at 500 on the main heading. Exact sample accents, body font, and button radius remain unverified.",
      "sources": [
        "https://www.framer.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "raycast",
    "name": "Raycast",
    "title": "Command bar",
    "cat": "Tools",
    "url": "https://www.raycast.com",
    "kind": "window",
    "face": "Inter",
    "css": "\"Inter\", \"SF Pro Text\", sans-serif",
    "weight": 500,
    "track": "-0.02em",
    "bg": "#07080A",
    "surface": "#18191A",
    "ink": "#F4F4F6",
    "muted": "#C2C7CA",
    "accent": "#FFFFFF",
    "on": "#18191A",
    "line": "#242728",
    "c2": "#FF6363",
    "c3": "#FFD60A",
    "r": "10px",
    "rc": "12px",
    "shadow": "none",
    "headline": "Type the next action.",
    "note": "Layered dark surfaces, Inter alternates, rounded controls.",
    "cta": "Download",
    "use": "A desktop tool's website should look like the tool.",
    "principles": [
      "Separate canvas, lifted panel, and secondary text roles.",
      "Use the observed Inter feature settings, including ss03, in the preview.",
      "Use rounded 10px sample controls; do not describe them as pills."
    ],
    "features": "\"liga\" 1, \"calt\" 1, \"kern\" 1, \"ss03\" 1",
    "action": "#FFFFFF",
    "bodyFace": "Inter",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark command-palette study",
      "notes": "The source names canvas, panel, border, and secondary foreground tokens. The sample action uses opaque white as an adaptation of the site’s translucent white button token.",
      "sources": [
        "https://www.raycast.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "--color-bg → --grey-900"
        },
        "surface": {
          "status": "observed",
          "reference": "--color-bg-200"
        },
        "ink": {
          "status": "observed",
          "reference": "--color-fg"
        },
        "muted": {
          "status": "observed",
          "reference": "--color-fg-200"
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Opaque white approximation of the source translucent --color-button-bg:#ffffffd0."
        },
        "on": {
          "status": "observed",
          "reference": "--color-button-fg"
        },
        "line": {
          "status": "observed",
          "reference": "--color-border"
        },
        "c2": {
          "status": "observed",
          "reference": "--color-red / brand red"
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "title": "Night",
    "cat": "Media",
    "url": "https://open.spotify.com",
    "kind": "window",
    "face": "Spotify Mix",
    "css": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "weight": 700,
    "track": "0em",
    "bg": "#121212",
    "surface": "#181818",
    "ink": "#FFFFFF",
    "muted": "#B3B3B3",
    "accent": "#1ED760",
    "on": "#000000",
    "line": "#282828",
    "c2": "#1F1F1F",
    "c3": "#1DB954",
    "r": "999px",
    "rc": "8px",
    "shadow": "none",
    "headline": "Play.",
    "note": "Dark player study; Spotify Mix attribution, DM Sans preview.",
    "cta": "Play",
    "caps": true,
    "use": "When the content has its own color, the interface should recede to charcoal.",
    "principles": [
      "Keep the example interface charcoal so artwork can carry color.",
      "Use black labels on the proposed green action.",
      "Use Spotify Mix as the current attribution; DM Sans is the preview substitute."
    ],
    "action": "#1ED760",
    "bodyFace": "Spotify Mix",
    "bodyCss": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark web-player-inspired study",
      "notes": "Spotify announced Spotify Mix in May 2024. This study is scoped to the web player, not the spotify.com marketing homepage; the exact palette remains unverified in this audit.",
      "sources": [
        "https://newsroom.spotify.com/2024-05-22/introducing-spotify-mix-our-new-and-exclusive-font/",
        "https://open.spotify.com/"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "nike",
    "name": "Nike",
    "title": "Giant type",
    "cat": "Retail",
    "url": "https://www.nike.com",
    "kind": "poster",
    "face": "Nike Futura / Nike Futura ND",
    "css": "\"Barlow Condensed\", \"Futura\", sans-serif",
    "weight": 700,
    "track": "0em",
    "bg": "#111111",
    "surface": "#1A1A1A",
    "ink": "#FFFFFF",
    "muted": "#C8C8C8",
    "accent": "#FFFFFF",
    "on": "#111111",
    "line": "#2A2A2A",
    "c2": "#F5F5F5",
    "c3": "#D30005",
    "r": "999px",
    "rc": "0px",
    "shadow": "none",
    "headline": "RUN",
    "note": "Large type and one consistent dark palette.",
    "cta": "Shop",
    "caps": true,
    "use": "Sport, fashion, events. Type should be large enough to be part of the picture.",
    "principles": [
      "Use large condensed preview type alongside photography.",
      "Keep the dark sample palette separate from light retail-page tokens.",
      "Use white sample actions and square image containers."
    ],
    "action": "#FFFFFF",
    "bodyFace": "Helvetica Now Text",
    "bodyCss": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "controlCss": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark campaign-inspired study",
      "notes": "The source declares Nike Futura and Helvetica Now Text. This dark campaign interpretation is not a token specification for all Nike retail pages.",
      "sources": [
        "https://www.nike.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "wise",
    "name": "Wise",
    "title": "Acid green",
    "cat": "Finance",
    "url": "https://wise.com",
    "kind": "pills",
    "face": "Wise Sans",
    "css": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "weight": 700,
    "track": "-0.03em",
    "bg": "#E8EBE6",
    "surface": "#FFFFFF",
    "ink": "#0E0F0C",
    "muted": "#454745",
    "accent": "#9FE870",
    "on": "#163300",
    "line": "#D5DDD0",
    "c2": "#163300",
    "c3": "#CDFFAD",
    "r": "999px",
    "rc": "16px",
    "shadow": "none",
    "headline": "The real price, up front.",
    "note": "Sage canvas and green action; bright fields are also possible.",
    "cta": "Send money",
    "use": "A money product that should feel simple, bright, and plain-spoken.",
    "principles": [
      "Use the observed bright-green and forest-green pairing for this sample action.",
      "Keep the content hierarchy readable with the observed primary and secondary text.",
      "Allow bright-green backgrounds in other compositions; this sample uses sage."
    ],
    "action": "#9FE870",
    "bodyFace": "Inter",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light finance study",
      "notes": "The site defines these green and content tokens and includes bright-green backgrounds. Sample line and card shapes still need direct evidence.",
      "sources": [
        "https://wise.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "observed",
          "reference": "--color-content-primary (light)"
        },
        "muted": {
          "status": "observed",
          "reference": "--color-content-secondary (light)"
        },
        "accent": {
          "status": "observed",
          "reference": "--color-bright-green"
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "observed",
          "reference": "--color-forest-green"
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "posthog",
    "name": "PostHog",
    "title": "Sketchbook",
    "cat": "Tools",
    "url": "https://posthog.com",
    "kind": "paper",
    "face": "IBM Plex Sans Variable",
    "css": "\"IBM Plex Sans\", \"Helvetica Neue\", sans-serif",
    "weight": 600,
    "track": "-0.02em",
    "bg": "#EEEFE9",
    "surface": "#FFFFFF",
    "ink": "#23251D",
    "muted": "#4D4F46",
    "accent": "#F7A501",
    "on": "#23251D",
    "line": "#DCDFD2",
    "c2": "#23251D",
    "c3": "#FCFCFA",
    "r": "6px",
    "rc": "8px",
    "shadow": "none",
    "headline": "Notes from the build.",
    "note": "Tan study canvas, olive text, and yellow accents.",
    "cta": "Get started",
    "use": "A developer product that should not dress as a bank or as neon.",
    "principles": [
      "Use the proposed tan canvas with observed olive text and yellow.",
      "Keep drawing subordinate to the information hierarchy in this example.",
      "Treat 6px controls and 8px cards as selected study settings."
    ],
    "action": "#F7A501",
    "bodyFace": "IBM Plex Sans Variable",
    "bodyCss": "\"IBM Plex Sans\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"IBM Plex Sans\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light developer-site study",
      "notes": "The palette includes source values, but tan is not proven to be every page’s canvas. Border color and sample geometry remain unverified.",
      "sources": [
        "https://posthog.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "resend",
    "name": "Resend",
    "title": "Serif black",
    "cat": "Editorial",
    "url": "https://resend.com",
    "kind": "stack",
    "face": "Domaine (headline)",
    "css": "\"Fraunces\", \"Iowan Old Style\", serif",
    "weight": 460,
    "track": "-0.03em",
    "bg": "#000000",
    "surface": "#141418",
    "ink": "#FCFDFF",
    "muted": "#A1A4A5",
    "accent": "#FCFDFF",
    "on": "#000000",
    "line": "rgba(255,255,255,.14)",
    "c2": "#3B9EFF",
    "c3": "#FF801F",
    "r": "12px",
    "rc": "12px",
    "shadow": "none",
    "headline": "Email, set in serif.",
    "note": "Dark canvas, serif display, and quiet code accents.",
    "cta": "Get started",
    "use": "A developer tool borrowing the tone of print, not another dark dashboard.",
    "principles": [
      "Let a large serif preview heading lead this example.",
      "Keep near-white actions separate from code and status colors.",
      "Use the sample border and radius values without making global claims."
    ],
    "action": "#FCFDFF",
    "bodyFace": "Inter / ABC Favorit declared",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark marketing study",
      "notes": "The homepage h1 uses font-domaine; the CSS also declares Inter, ABC Favorit, and Commit Mono. Fraunces and Inter are the loaded preview fonts.",
      "sources": [
        "https://resend.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "slack",
    "name": "Slack",
    "title": "Aubergine",
    "cat": "Product",
    "url": "https://slack.com",
    "kind": "pills",
    "face": "Salesforce Avant Garde",
    "css": "\"Outfit\", \"Avenir Next\", sans-serif",
    "weight": 700,
    "track": "-0.03em",
    "bg": "#F4EDE4",
    "surface": "#FFFFFF",
    "ink": "#1D1D1D",
    "muted": "#696969",
    "accent": "#4A154B",
    "on": "#FFFFFF",
    "line": "#E6E6E6",
    "c2": "#ECB22E",
    "c3": "#F9F0FF",
    "r": "8px",
    "rc": "12px",
    "shadow": "none",
    "headline": "Where the thread lives.",
    "note": "Warm marketing study with a historical aubergine sample.",
    "cta": "Get started",
    "use": "Collaboration. One deep brand color, on warm paper.",
    "principles": [
      "Use a warm light ground in this proposed composition.",
      "Keep the historical aubergine sample clearly separate from verified current roles.",
      "Use geometric sans display and neutral sans body substitutes."
    ],
    "action": "#4A154B",
    "bodyFace": "Salesforce Sans",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light marketing-inspired study",
      "notes": "Current marketing CSS declares Salesforce Avant Garde and Salesforce Sans. Aubergine and yellow are retained as unverified current-role samples, not certified homepage action colors.",
      "sources": [
        "https://slack.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "title": "Warm orange",
    "cat": "Tools",
    "url": "https://cursor.com",
    "kind": "paper",
    "face": "CursorGothic",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 400,
    "track": "-0.03em",
    "bg": "#F7F7F4",
    "surface": "#FFFFFF",
    "ink": "#26251E",
    "muted": "#5A5852",
    "accent": "#F54E00",
    "on": "#F7F7F4",
    "line": "#E6E5E0",
    "c2": "#9FBBE0",
    "c3": "#9FC9A2",
    "r": "999px",
    "rc": "12px",
    "shadow": "none",
    "headline": "The editor stays quiet.",
    "note": "Cream canvas, charcoal action, orange accent.",
    "cta": "Download",
    "use": "A developer tool that wants an editorial calm, not the black of an IDE.",
    "principles": [
      "Use the observed cream canvas and charcoal text.",
      "Keep orange as the brand accent; use charcoal and cream for the primary action.",
      "Use a 400 preview heading and a pill-shaped sample action."
    ],
    "action": "#26251E",
    "bodyFace": "CursorGothic",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Current light homepage study",
      "notes": "The browser measured Download for macOS with #26251E background, #F7F7F4 text, a pill shape, and CursorGothic. Other sample card values are not certified.",
      "sources": [
        "https://cursor.com/",
        "https://cursor.com/en-US/brand"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Control radius observed on the homepage; card radius and shadow are sample settings.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "--color-theme-bg (light)"
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "observed",
          "reference": "--color-theme-fg (light)"
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "observed",
          "reference": "--color-theme-accent (light)"
        },
        "action": {
          "status": "observed",
          "reference": "Download for macOS, computed background on homepage"
        },
        "on": {
          "status": "observed",
          "reference": "Download for macOS, computed color on homepage"
        },
        "line": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "pinterest",
    "name": "Pinterest",
    "title": "Pin",
    "cat": "Media",
    "url": "https://www.pinterest.com",
    "kind": "pills",
    "face": "Pin Sans",
    "css": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "weight": 600,
    "track": "-0.02em",
    "bg": "#FBFBF9",
    "surface": "#FFFFFF",
    "ink": "#262622",
    "muted": "#5C5C56",
    "accent": "#E60023",
    "on": "#FFFFFF",
    "line": "#E5E5E0",
    "c2": "#F6F6F3",
    "c3": "#211922",
    "r": "999px",
    "rc": "32px",
    "shadow": "none",
    "headline": "Save the picture.",
    "note": "Image-first study with a red action.",
    "cta": "Explore",
    "use": "An image product. The interface yields to the picture. Red is only a marker.",
    "principles": [
      "Let imagery dominate the proposed layout.",
      "Use the source red sample as the primary-action direction.",
      "Treat 32px as this example image-container radius, not a universal card token."
    ],
    "action": "#E60023",
    "bodyFace": "Pin Sans",
    "bodyCss": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light discovery-inspired study",
      "notes": "The source declares Pin Sans and contains the red and warm-neutral values. Existence alone does not certify every role; this is not the full Gestalt system.",
      "sources": [
        "https://www.pinterest.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "theverge",
    "name": "The Verge",
    "title": "Hazard tape",
    "cat": "Media",
    "url": "https://www.theverge.com",
    "kind": "poster",
    "face": "Manuka Condensed Black",
    "css": "\"Barlow Condensed\", \"Arial Narrow\", sans-serif",
    "weight": 700,
    "track": "0em",
    "bg": "#131313",
    "surface": "#2D2D2D",
    "ink": "#FFFFFF",
    "muted": "#949494",
    "accent": "#3CFFD0",
    "on": "#000000",
    "line": "#3CFFD0",
    "c2": "#5200FF",
    "c3": "#FFE14A",
    "r": "0px",
    "rc": "0px",
    "shadow": "none",
    "headline": "HAZARD",
    "note": "Dark variant with mint and ultraviolet accents.",
    "cta": "Read",
    "caps": true,
    "use": "A media homepage. Loud, but still a grid, not a collage of posters.",
    "principles": [
      "Use a dark editorial grid for this selected variant.",
      "Pair bright mint blocks with dark text in the sample.",
      "Keep Light, System, and Dark support in mind; this is only the dark study."
    ],
    "action": "#3CFFD0",
    "bodyFace": "PolySans",
    "bodyCss": "\"Space Grotesk\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Space Grotesk\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark media-theme study",
      "notes": "The current site offers Light, System, and Dark. Manuka and PolySans resources are present; this library does not claim to supply the site’s light theme.",
      "sources": [
        "https://www.theverge.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "spacex",
    "name": "SpaceX",
    "title": "Launch",
    "cat": "Media",
    "url": "https://www.spacex.com",
    "kind": "poster",
    "face": "D-DIN / D-DIN-PRO",
    "css": "\"Barlow Condensed\", \"DIN Alternate\", sans-serif",
    "weight": 500,
    "track": "0.08em",
    "bg": "#000000",
    "surface": "#000000",
    "ink": "#FFFFFF",
    "muted": "#A8A8B0",
    "accent": "#FFFFFF",
    "on": "#000000",
    "line": "#3A3A3F",
    "c2": "#F0F0FA",
    "c3": "#000000",
    "r": "0px",
    "rc": "0px",
    "shadow": "none",
    "headline": "STARSHIP",
    "note": "Black, white, uppercase; one consistent dark sample.",
    "cta": "Watch",
    "caps": true,
    "use": "One enormous thing to say. The picture moves on its own.",
    "principles": [
      "Give full-bleed launch imagery room in the proposed layout.",
      "Use uppercase condensed display type in the sample.",
      "Keep one consistent dark palette; other source sections may use cards."
    ],
    "action": "#FFFFFF",
    "bodyFace": "D-DIN / Roboto Mono declared",
    "bodyCss": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "controlCss": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark launch-page study",
      "notes": "D-DIN and Roboto Mono are declared by the source. Sample muted text, borders, and page-wide layout restrictions are not verified official rules.",
      "sources": [
        "https://www.spacex.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        }
      }
    }
  },
  {
    "id": "zapier",
    "name": "Zapier",
    "title": "Coffee orange",
    "cat": "Tools",
    "url": "https://zapier.com",
    "kind": "paper",
    "face": "DegularDisplay",
    "css": "\"DM Sans\", \"Helvetica Neue\", sans-serif",
    "weight": 700,
    "track": "-0.03em",
    "bg": "#FFFEFB",
    "surface": "#F8F4F0",
    "ink": "#201515",
    "muted": "#605D52",
    "accent": "#FF4F00",
    "on": "#FFFFFF",
    "line": "#E6DFD6",
    "c2": "#C5C0B1",
    "c3": "#2F2A26",
    "r": "999px",
    "rc": "16px",
    "shadow": "none",
    "headline": "Connect the two tools.",
    "note": "Paper, coffee ink, and an orange accent.",
    "cta": "Start free",
    "use": "Automation, forms, and back office. Mature, not another purple.",
    "principles": [
      "Separate the source orange accent from a readable sample action.",
      "Use the observed paper and coffee colors in this composition.",
      "Use the sample pill geometry without making a global rule."
    ],
    "action": "#201515",
    "bodyFace": "Inter",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light automation-site study",
      "notes": "The source declares DegularDisplay, Inter, and Serrif. The charcoal action is a library adaptation for readable small labels, not a sampled current CTA.",
      "sources": [
        "https://zapier.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Charcoal sample action chosen for readable small labels; not a sampled website CTA."
        },
        "on": {
          "status": "adapted",
          "reference": "White label paired with the library charcoal action for contrast."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "mistral",
    "name": "Mistral",
    "title": "Sunset",
    "cat": "Editorial",
    "url": "https://mistral.ai",
    "kind": "mesh",
    "face": "Unverified",
    "css": "\"Newsreader\", \"Iowan Old Style\", serif",
    "weight": 500,
    "track": "-0.02em",
    "bg": "#FFF8E0",
    "surface": "#FFFFFF",
    "ink": "#1F1F1F",
    "muted": "#4A4A4A",
    "accent": "#FA520F",
    "on": "#FFFFFF",
    "line": "#E5E5E5",
    "c2": "#FFD06A",
    "c3": "#FF8105",
    "r": "999px",
    "rc": "16px",
    "shadow": "none",
    "headline": "Light on the ridge.",
    "note": "Sunset-inspired palette; type and UI values are unverified.",
    "cta": "Try it",
    "use": "A technical brand that wants a landscape, not a circuit board.",
    "principles": [
      "Use the proposed warm sunset palette as a visual study.",
      "Keep pixel artwork in mind when exploring this brand direction.",
      "Use a charcoal sample action; do not treat the proposed serif as confirmed."
    ],
    "action": "#1F1F1F",
    "bodyFace": "Unverified",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "unverified",
      "checkedAt": "2026-10-22",
      "scope": "Unverified sunset-inspired study",
      "notes": "The official brand page confirms pixel artwork and logo variants. Page CSS timed out, so exact UI colors, type, and radii remain unverified. The neutral action is a readability adaptation.",
      "sources": [
        "https://mistral.ai/brand/",
        "https://mistral.ai/"
      ],
      "fontStatus": "unverified",
      "fontNote": "Current website typefaces could not be verified. The preview families are library choices.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Charcoal sample action chosen for readable small labels; not a sampled website CTA."
        },
        "on": {
          "status": "adapted",
          "reference": "White label paired with the library charcoal action for contrast."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "miro",
    "name": "Miro",
    "title": "Canary",
    "cat": "Product",
    "url": "https://miro.com",
    "kind": "blocks",
    "face": "Roobert PRO family",
    "css": "\"Outfit\", \"Avenir Next\", sans-serif",
    "weight": 600,
    "track": "-0.03em",
    "bg": "#FFFFFF",
    "surface": "#FFF4C4",
    "ink": "#1C1C1E",
    "muted": "#4A4A4E",
    "accent": "#1C1C1E",
    "on": "#FFFFFF",
    "line": "#E6E6EA",
    "c2": "#FFD02F",
    "c3": "#FF9999",
    "r": "999px",
    "rc": "16px",
    "shadow": "none",
    "headline": "Stick it on the wall.",
    "note": "Dark controls and proposed colored notes.",
    "cta": "Get started",
    "use": "A collaborative whiteboard. Color should feel like sticky notes. The button should feel like black ink.",
    "principles": [
      "Use a quiet ground and dark sample controls.",
      "Keep proposed note colors separate from functional states.",
      "Treat this card radius and pastel palette as study choices."
    ],
    "action": "#1C1C1E",
    "bodyFace": "Roobert PRO family",
    "bodyCss": "\"Outfit\", \"Avenir Next\", sans-serif",
    "controlCss": "\"Outfit\", \"Avenir Next\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light whiteboard-inspired study",
      "notes": "The source declares Roobert PRO and #1C1C1E primary/black. #FFD02F appears in a border utility; its brand role and the remaining pastels are not certified.",
      "sources": [
        "https://miro.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "observed",
          "reference": "--tw-color-primary"
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "observed",
          "reference": "--tw-color-black"
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "sentry",
    "name": "Sentry",
    "title": "Night violet",
    "cat": "Tools",
    "url": "https://sentry.io",
    "kind": "blocks",
    "face": "Dammit Sans",
    "css": "\"Space Grotesk\", \"Avenir Next\", sans-serif",
    "weight": 600,
    "track": "-0.03em",
    "bg": "#150F23",
    "surface": "#1F1633",
    "ink": "#FFFFFF",
    "muted": "#BDB8C0",
    "accent": "#C2EF4E",
    "on": "#150F23",
    "line": "#362D59",
    "c2": "#FA7FAA",
    "c3": "#6A5FC1",
    "r": "8px",
    "rc": "12px",
    "shadow": "none",
    "headline": "It broke. Here.",
    "note": "Violet layers, pink accent, and a proposed lime action.",
    "cta": "Get started",
    "use": "A developer tool can have a mascot, and the grid still has to be readable as a log.",
    "principles": [
      "Use violet-tinted dark layers in the proposed composition.",
      "Keep the observed pink and violet values distinct from status roles.",
      "Treat lime as this study action mapping, not a universal source rule."
    ],
    "action": "#C2EF4E",
    "bodyFace": "Rubik",
    "bodyCss": "\"Rubik\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Rubik\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark developer-site study",
      "notes": "The source declares Dammit Sans and Rubik. Violet, pink, and lime values exist, but lime as the site-wide primary action has not been confirmed.",
      "sources": [
        "https://sentry.io"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "observed",
          "reference": "--color-rich-black"
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "observed",
          "reference": "--color-dk-violet"
        },
        "c2": {
          "status": "observed",
          "reference": "--color-lt-pink"
        },
        "c3": {
          "status": "observed",
          "reference": "--color-blurple"
        }
      }
    }
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "title": "Parchment",
    "cat": "Editorial",
    "url": "https://lovable.dev",
    "kind": "paper",
    "face": "Unverified",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 500,
    "track": "-0.03em",
    "bg": "#F7F4ED",
    "surface": "#F7F4ED",
    "ink": "#1C1C1C",
    "muted": "#5F5F5D",
    "accent": "#1C1C1C",
    "on": "#FCFBF8",
    "line": "#ECEAE4",
    "c2": "#ECEAE4",
    "c3": "#FCFBF8",
    "r": "12px",
    "rc": "12px",
    "shadow": "none",
    "headline": "Make the page first.",
    "note": "Parchment and charcoal, explicitly an unverified study.",
    "cta": "Start",
    "use": "Warmth without adding a clay accent.",
    "principles": [
      "Use parchment and charcoal as the proposed palette.",
      "Keep sample cards quiet with a border and no shadow.",
      "Treat the gray values as selected samples, not a verified opacity ramp."
    ],
    "action": "#1C1C1C",
    "bodyFace": "Unverified",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "unverified",
      "checkedAt": "2026-10-22",
      "scope": "Unverified parchment-inspired study",
      "notes": "Both source fetching and browser access were blocked by verification. Camera Plain was an earlier attribution, not a confirmed current font; all visual values remain unverified.",
      "sources": [
        "https://lovable.dev"
      ],
      "fontStatus": "unverified",
      "fontNote": "Current website typefaces could not be verified. The preview families are library choices.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "shopify",
    "name": "Shopify",
    "title": "Merchant night",
    "cat": "Retail",
    "url": "https://www.shopify.com",
    "kind": "poster",
    "face": "Shopify-Inter",
    "css": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "weight": 500,
    "track": "-0.04em",
    "bg": "#000000",
    "surface": "#0A0A0A",
    "ink": "#FFFFFF",
    "muted": "#C8C8C8",
    "accent": "#FFFFFF",
    "on": "#000000",
    "line": "rgba(255,255,255,.2)",
    "c2": "#C1FBD4",
    "c3": "#FBFBF5",
    "r": "999px",
    "rc": "20px",
    "shadow": "none",
    "headline": "The shop is the story.",
    "note": "Dark marketing sample with a consistent border palette.",
    "cta": "Start",
    "use": "The brand page wants cinema. The checkout returns to bright paper.",
    "principles": [
      "Use a dark stage for this particular marketing interpretation.",
      "Keep the dark border separate from any light-page palette.",
      "Treat storefront, checkout, and admin systems as separate scopes."
    ],
    "action": "#FFFFFF",
    "bodyFace": "Shopify-Inter",
    "bodyCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Inter\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark marketing-inspired study",
      "notes": "Current marketing CSS declares Shopify-Inter. This sample does not represent storefront themes, checkout, or the merchant admin design system.",
      "sources": [
        "https://www.shopify.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "surface": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "ink": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "c3": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        }
      }
    }
  },
  {
    "id": "a24",
    "name": "A24",
    "title": "Cinema",
    "cat": "Media",
    "url": "https://a24films.com",
    "kind": "poster",
    "face": "Neue Montreal",
    "css": "\"Space Grotesk\", \"Helvetica Neue\", sans-serif",
    "weight": 485,
    "track": "-0.04em",
    "bg": "#0E0E0D",
    "surface": "#141313",
    "ink": "#FFFFFF",
    "muted": "#B2ADA6",
    "accent": "#FFFFFF",
    "on": "#0E0E0D",
    "line": "#31302E",
    "c2": "#F2F0ED",
    "c3": "#FCFBFA",
    "r": "0px",
    "rc": "0px",
    "shadow": "none",
    "headline": "Now showing",
    "note": "Warm dark theme tokens and a restrained type hierarchy.",
    "cta": "Tickets",
    "use": "Screenings, publishing, exhibitions. The picture is already full. The interface should leave.",
    "principles": [
      "Use the observed dark-theme background and foreground mappings.",
      "Keep text and borders on their own warm-neutral roles.",
      "Let imagery carry additional color; the preview remains a library composition."
    ],
    "action": "#FFFFFF",
    "bodyFace": "Neue Montreal Mono / Neue Montreal",
    "bodyCss": "\"Space Grotesk\", \"Helvetica Neue\", sans-serif",
    "controlCss": "\"Space Grotesk\", \"Helvetica Neue\", sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Dark theme-token study",
      "notes": "The browser measured Neue Montreal on h1 at weight 485. Dark theme tokens are taken from the current CSS; the complete homepage composition and action styling are not reproduced.",
      "sources": [
        "https://a24films.com"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "dark --theme-background-default → --color-warm-neutral-1000"
        },
        "surface": {
          "status": "observed",
          "reference": "dark --theme-background-subtle → --color-warm-neutral-975"
        },
        "ink": {
          "status": "observed",
          "reference": "dark --theme-text-default → --color-white"
        },
        "muted": {
          "status": "observed",
          "reference": "dark --theme-text-subtle → --color-warm-neutral-400"
        },
        "accent": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "found",
          "reference": "Exact value present in retrieved source; this role is not certified."
        },
        "line": {
          "status": "observed",
          "reference": "dark --theme-border-default → --color-warm-neutral-950"
        },
        "c2": {
          "status": "observed",
          "reference": "--color-warm-neutral-50"
        },
        "c3": {
          "status": "observed",
          "reference": "--color-warm-neutral-25"
        }
      }
    }
  },
  {
    "id": "teenage",
    "name": "Teenage Engineering",
    "title": "Manual",
    "cat": "Retail",
    "url": "https://teenage.engineering",
    "kind": "grid",
    "face": "te-20 / te-40",
    "css": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "weight": 400,
    "track": "0em",
    "bg": "#F5F5F5",
    "surface": "#F5F5F5",
    "ink": "#0F0E12",
    "muted": "#6A6A6A",
    "accent": "#0F0E12",
    "on": "#F5F5F5",
    "line": "#0F0E12",
    "c2": "#E5E5E5",
    "c3": "#F05A24",
    "r": "0px",
    "rc": "0px",
    "shadow": "none",
    "headline": "OP–1 field",
    "note": "Catalog study using te colors and sans preview type.",
    "cta": "Buy",
    "use": "Hardware, catalogs, and tool shops. Captions should read like a manual.",
    "principles": [
      "Use the observed te-white, te-black, and product-orange values.",
      "Use a plain sans substitute for the custom te typefaces.",
      "Keep the sample square and caption-led without claiming every component is square."
    ],
    "action": "#0F0E12",
    "bodyFace": "te-20 / te-40",
    "bodyCss": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "controlCss": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "features": "normal",
    "study": {
      "status": "partial",
      "checkedAt": "2026-10-22",
      "scope": "Light catalog-token study",
      "notes": "Current source font stacks use te-20 / te-40 with Unicode and sans-serif fallbacks, not a universal monospace. Control and card shapes remain sample settings.",
      "sources": [
        "https://teenage.engineering"
      ],
      "fontStatus": "observed",
      "fontNote": "Website family declarations or the measured heading, not fonts bundled by this library.",
      "shapeNote": "Radius, shadow, weight, and tracking are sample settings unless explicitly noted above.",
      "evidence": {
        "bg": {
          "status": "observed",
          "reference": "--te-white, selected as study canvas"
        },
        "surface": {
          "status": "observed",
          "reference": "--te-white, selected as study card"
        },
        "ink": {
          "status": "observed",
          "reference": "--te-black"
        },
        "muted": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "accent": {
          "status": "observed",
          "reference": "--te-black"
        },
        "action": {
          "status": "adapted",
          "reference": "Library sample action; not a sampled website CTA."
        },
        "on": {
          "status": "observed",
          "reference": "--button-text → --te-white"
        },
        "line": {
          "status": "unverified",
          "reference": "Study approximation; no current source role verified."
        },
        "c2": {
          "status": "observed",
          "reference": "--te-grey-100"
        },
        "c3": {
          "status": "observed",
          "reference": "--te-orange"
        }
      }
    }
  }
];
