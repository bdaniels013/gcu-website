# Gulf Coast Underground

The website for **Gulf Coast Underground** — a mission hub on the Mississippi Gulf Coast advancing the _Missio Dei_ by equipping everyday people to live in missional rhythms.

This is a rebuild of [gulfcoastunderground.org](https://gulfcoastunderground.org) on a modern stack, with three new headline features:

- 🪟 **Full-page event popup** that takes over the screen on first visit (dismiss with the ✕, Escape, or the backdrop).
- ⏱️ **Sticky scrolling countdown bar** pinned to the bottom of every page, counting down to the featured event.
- 📅 **Events page** with a featured event, a live countdown, and a full list of upcoming gatherings.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx              # Root layout — navbar, footer, popup, countdown bar
  page.tsx                # Home
  who-we-are/             # Background, manifesto, organization
  connect/                # DBS, IDE's, microchurch, connect with us
  events/                 # NEW — featured event + upcoming list
  discover-your-part/     # Discovery journey + tracks
  support/                # Giving
  contact/                # Contact details + form
components/
  Navbar, Footer, Logo
  EventPopup.tsx          # NEW — full-page takeover modal
  CountdownBar.tsx        # NEW — sticky scrolling countdown
  FeaturedEventCard, EventCard, ContactForm, ui.tsx
lib/
  event.ts                # ⭐ Edit this to change the featured event + event list
  useCountdown.ts         # Shared live-countdown hook
```

## Editing the featured event

All event content — including what the popup and countdown bar advertise — lives in
[`lib/event.ts`](lib/event.ts). Update `featuredEvent` to change the popup/countdown,
and the `events` array to change the Events page listing. Dates are ISO 8601 strings in
local time (e.g. `2026-07-18T18:00:00`).

## Things to wire up before launch

- **Giving link** — `GIVING_URL` in [`app/support/page.tsx`](app/support/page.tsx)
  currently points at a placeholder Tithe.ly URL. Replace with the ministry's real link.
- **Contact form** — submits via `mailto:` to `gcundergroundmission@gmail.com`. Swap in a
  form backend (Formspree, Resend, etc.) if you want server-side handling.
- **Images** — the site currently uses typography + brand color; drop real photos into
  `public/` and reference them as needed.

## Deploy

The app deploys cleanly to [Vercel](https://vercel.com/) — import the repo and it builds
with zero configuration.
