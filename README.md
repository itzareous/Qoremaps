# Qore Maps

Qore Maps is the navigation and discovery app built for Nigeria — turn-by-turn directions, landmark-based search, and a discovery layer for the places we actually go. It's a product of Qore Technologies LTD, the company behind Qorelly. This repo is the marketing landing page for the waitlist.

## How to run

```bash
npm install
cp .env.example .env       # then fill in Supabase URL + anon key
npm run dev                # http://localhost:5173
npm run build
npm run preview
npm run typecheck
```

## Folder structure

```
.
├── index.html                       # Vite entry, OG/meta tags
├── src/
│   ├── main.tsx                     # React + Helmet root
│   ├── App.tsx                      # page composition (sections wired here)
│   ├── index.css                    # Tailwind + @font-face for Ciscela & Anderson Grotesk
│   ├── components/
│   │   ├── sections/                # one file per landing-page section
│   │   └── ui/                      # buttons, badges, eyebrow labels, etc.
│   ├── lib/                         # Supabase client, helpers
│   └── assets/icons/
│       ├── Bold/                    # Solar Bold SVGs (imported via ?react)
│       └── Outline/                 # Solar Outline SVGs
├── public/
│   ├── fonts/                       # Ciscela-Regular.woff2, AndersonGrotesk.otf
│   └── images/placeholders/         # Hudhud photos held over as visual placeholders
├── docs/
│   └── PLACEHOLDER_IMAGES.md        # asset replacement list — what each placeholder needs to become
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## Design system

- **Headlines:** Ciscela serif, applied via inline `style={{ fontFamily: 'Ciscela, serif' }}` only — never via a Tailwind class.
- **Body:** Anderson Grotesk (set as default sans).
- **Primary color:** `#7856ff` (`primary`). Hover: `#6344e0` (`primary-dark`). Light bg: `#f0ecff` (`primary-light`).
- **No box shadows.** Use `border border-gray-100` / `border border-gray-200` instead.
- **No border radius on sections.** Only buttons, badges, dots, and small components are rounded; buttons are always `rounded-full`.
- **Container:** `max-w-[1280px] mx-auto`, padding `px-6 md:px-12 lg:px-20`, vertical `py-20`. Sections alternate `bg-white` / `bg-[#f9fafb]` / `bg-gray-900`.
- **Icons:** Solar only (placed under `src/assets/icons/{Bold,Outline}` and imported via `vite-plugin-svgr`).
- **Breakpoint:** Tailwind `lg:` is the mobile/desktop boundary.

## Placeholders

Every image under `public/images/placeholders/` is a Hudhud photo held over as a stand-in. See `docs/PLACEHOLDER_IMAGES.md` for the full asset shopping list — what each one currently shows and what it needs to become for Nigeria.
