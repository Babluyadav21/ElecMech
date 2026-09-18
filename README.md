# ElecMech Engineering Solutions — Website

A premium, production-ready B2B website for ElecMech Engineering Solutions, built with React 19, Vite, TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Enable the enquiry form (required before launch)

The "Request a Quote" form on `/contact` uses [EmailJS](https://www.emailjs.com) to deliver enquiries straight to **enquiry.elecmech@gmail.com** without ever exposing a secret API key in the frontend — EmailJS's "public key" is designed to be used from the browser.

1. Create a free EmailJS account and connect the Gmail account that should receive enquiries.
2. Create an Email Service and an Email Template. In the template, use these variable names (they match the form's field names): `name`, `company`, `email`, `phone`, `industry`, `product_service`, `project_location`, `message`, `submitted_at`, `to_email`, and `attachment` (for the uploaded file).
3. Copy your **Service ID**, **Template ID** and **Public Key** into `src/data/site.ts`:

```ts
export const emailjsConfig = {
  serviceId: "service_xxxxxxx",
  templateId: "template_xxxxxxx",
  publicKey: "xxxxxxxxxxxxxxxx",
};
```

Until these are filled in, the form validates and shows a success state (for design review) but does not actually send email — a console warning notes this.

**Note on attachments:** EmailJS's free plan supports small file attachments sent via `sendForm`. If you outgrow the size/volume limits, swap the call in `src/components/EnquiryForm.tsx` for Formspree or a small serverless function (e.g. Resend API) — the form's validation, honeypot and UI states don't need to change.

## Light & dark mode

The theme toggle (sun/moon icon, top right of the navbar and mobile header) switches instantly between light and dark, remembers the choice in `localStorage`, and otherwise follows the visitor's OS setting on first visit. There's no flash of the wrong theme on load — a small inline script in `index.html` applies the right class before React even mounts.

Every color in the site is a semantic CSS variable (`--color-base`, `--color-surface`, `--color-fg`, `--color-muted`, `--color-border`, `--color-accent`, etc.), defined once in `src/index.css` with light values, then re-defined inside a `.dark` block. Components use Tailwind utilities like `bg-surface` or `text-muted` — never a hardcoded hex — so a new component only needs to reuse those tokens to support both themes automatically; no `dark:` prefix needed except for the handful of genuinely theme-specific touches (e.g. the hero illustration's dark-only glow, the map's dark-mode filter). The footer intentionally stays in its dark, branded treatment in both site themes — this is done by scoping the `.dark` variable overrides to that one subtree, not by hardcoding footer colors.

To adjust the palette, edit the two token blocks (`@theme { ... }` for light, `.dark { ... }` for dark) at the top of `src/index.css`.

## Editing content

All editable business content lives in `src/data/`, separate from UI components:

- `site.ts` — company name, tagline, contact details, address, nav/footer links, EmailJS config
- `products.ts` — every electrical & automation panel, grouped by category
- `services.ts` — engineering services list
- `industries.ts` — industries served, grouped by sector
- `clients.ts` — client names shown on the Clients page

## Content notes

The About, Vision and Infrastructure copy was taken from the company portfolio PDF, lightly cleaned up (typos and a couple of grammar fixes) and adapted for the web. In a few places the source text still read "SBS ENGINEERS" or "Standard Control Panels India" — leftover branding from what looks like a template the portfolio was built from — these were replaced with ElecMech Engineering Solutions throughout. Double-check `src/pages/About.tsx` and `src/pages/Infrastructure.tsx` against this if anything reads differently than expected.

The client list in `src/data/clients.ts` reflects the fuller list from the portfolio (35 companies).

## Imagery

Real photos and the logo from the ElecMech company portfolio are used throughout the site — in `src/assets/images/`, imported via the barrel file `src/assets/images/index.ts`. These cover the homepage hero, About page, product detail pages (one representative photo per category), the Infrastructure gallery, and the Contact page.

One photo from the source portfolio was deliberately left out: it carried a visible third-party watermark (a repeated logo stamp and "...ENGINEERS" text) that isn't ElecMech's own branding, so it wasn't safe to publish. Replace it with a clean version or your own photography when available.

A few gallery slots and the Products listing still use `src/components/ImagePlaceholder.tsx` — a styled placeholder with a label describing what should go there. Swap it for a real `<img>` tag using the same pattern as the rest of the site once more photography is available.

## Project structure

```
src/
  components/       Reusable UI (Navbar, Footer, EnquiryForm, cards, etc.)
  components/graphics/  Decorative SVG illustrations (hero schematic, grid backdrop)
  pages/            One file per route
  data/             All editable content, separate from UI
public/
  robots.txt, sitemap.xml, favicon.svg
```

## Notes

- Update `elecmech.example` in `src/components/Seo.tsx` and `public/sitemap.xml` / `public/robots.txt` to your real production domain before launch.
- The Google Maps embed in `src/pages/Contact.tsx` uses a text query (`site.mapsQuery`); replace it with an exact address/place if you want a pinpoint location.
- Reduced-motion preferences are respected globally (see `src/index.css`).
