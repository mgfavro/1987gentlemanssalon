# 1987 Gentleman's Salon

Marketing website for **1987 Gentleman's Salon**, a premier barbershop in
Fairfax, Virginia. Precision fades, classic cuts, beard shaping and hot-towel
shaves — open daily, walk-ins welcome.

A vintage, gentleman's-club aesthetic built to match the name: warm brass on
deep charcoal, a rotating barber-pole motif, condensed uppercase labels and an
elegant serif display face.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) primitives
- Google Fonts: Playfair Display, Oswald, Inter

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (this project defaults to an uncommon port in
development; `npm run dev` uses Next's default `3000` unless you set `PORT`):

```bash
PORT=43187 npm run dev
```

Open the printed URL in your browser.

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server               |
| `npm run build` | Production build                   |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Editing content

All salon details — address, phone, hours, services, barbers and reviews — live
in a single file:

```
src/lib/site.ts
```

Update that file to change copy across the whole site.

## Project structure

```
src/
  app/
    layout.tsx        # fonts + metadata
    page.tsx          # page composition + JSON-LD
    globals.css       # theme tokens + custom utilities
  components/
    site/             # Header, Hero, About, Services, Team, Reviews, Visit, Footer, icons
    ui/               # shadcn/ui primitives
  lib/
    site.ts           # all salon content
    utils.ts
```

## Deployment

This is a standard Next.js app and deploys to [Vercel](https://vercel.com/) with
zero configuration — import the repository and Vercel auto-detects the
framework, build command and output.

## Business information

- **Address:** 8558 Lee Hwy, Unit D, Fairfax, VA 22031
- **Phone:** (703) 254-1140
- **Hours:** Daily, 11:00 AM – 9:00 PM

> Service prices shown on the site are illustrative starting points for display
> purposes. Confirm current pricing with the shop.
