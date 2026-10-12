# IsoForm Studio website (Angular 18)

Business website for a 3D isometric building-plan visualisation service. It features the
**Pradeep Residence** (Varadharajapuram) as a live, interactive sample project.

## Run it

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build in dist/isoform-studio/browser
```

Requires Node.js 18.19+ (Node 20 or 22 recommended).

## What's inside

| Path | What it is |
|---|---|
| `src/app/shared/site.ts` | **Edit this first**: business name, phone, WhatsApp, email, prices, FAQ |
| `src/app/pages/home/` | Home page: hero with live 3D model, before/after, how it works, audiences, showcase, pricing, FAQ, contact form |
| `src/app/pages/showcase/` | Full-screen viewer at `/work/pradeep-residence` |
| `public/models/pradeep-residence.html` | The Pradeep Residence 3D model (three.js). Add `?embed` to the URL for the compact auto-rotating view |
| `public/favicon.svg` | Logo mark |

## Adding a new project to the gallery

1. Put the new model file in `public/models/` (for example `kumar-villa.html`).
2. Copy `pages/showcase/showcase.component.ts`, change the title, text and iframe `src`.
3. Add a route for it in `src/app/app.routes.ts`.

## Contact form

The form validates input and builds a pre-filled WhatsApp message. To also receive form
submissions by email, connect `submit()` in `home.component.ts` to a service such as
Formspree, EmailJS or your own API.

## Deploying

The `dist/isoform-studio/browser` folder is a static site. It can be hosted on Netlify,
Vercel, Firebase Hosting or any web server. Configure the host to send unknown paths to
`index.html` so the `/work/...` pages load on refresh.
