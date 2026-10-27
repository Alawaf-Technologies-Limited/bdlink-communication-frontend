# BD Link Communication Ltd. — Progressive Web App

Production-oriented React PWA implementing the BD Link UI/UX redesign proposal with brand tokens from the bdlink-logo-sheet-A4.pdf, Bdlink_Proposal2_Vodafone_Preview-1.pdf  and business content from [bdlink.com.bd](https://bdlink.com.bd/).

## Stack

- React 19 + TypeScript (strict)
- Vite 7
- Tailwind CSS 4
- React Router 7
- Lucide React icons
- `vite-plugin-pwa` (installable app, service worker, offline shell)

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Typecheck + production build + PWA assets |
| `npm run preview` | Serve `dist/` locally |
| `npm run typecheck` | TypeScript project references check |
| `npm run lint` | ESLint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | Company Overview |
| `/about/management` | Management |
| `/about/board` | Board of Directors |
| `/about/team` | Team |
| `/services/international` | International (+ submarine cable section) |
| `/services/domestic` | Domestic |
| `/experience` | Experience / SLA |
| `/partners` | Partners |
| `/contact` | Contact form |
| `/offline` | Offline help |
| `*` | 404 |

## Design sources

- `new-ui-ux-srs/Bdlink_Proposal2_Vodafone_Preview-1.pdf` — authoritative UI layouts
- `new-ui-ux-srs/bdlink-logo-sheet-A4.pdf` — brand colours / logo rules

## Contact form / API

No backend is specified in the proposal. Submissions are validated client-side and persisted through `src/lib/contactApi.ts` (local mock abstraction). Replace that module with a real endpoint when available.

## PWA

- Manifest: name, theme `#D60000`, background `#1A1A1A`, icons under `public/icons/`
- Service worker precaches app shell and static assets
- Offline banner + `/offline` page
- Update prompt when a new service worker is waiting

## Deployment

1. `npm run build`
2. Deploy the `dist/` directory to any static host (Nginx, Cloudflare Pages, Netlify, S3+CloudFront, etc.)
3. Ensure the host serves `index.html` for SPA fallback routes
4. Prefer HTTPS so installation and service workers work in production browsers


