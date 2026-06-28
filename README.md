# Portofolio Gacor

Personal portfolio website **MahesTzy** (Mahesa Bagus Raditya), dibangun dengan **Next.js 16 (App Router)**, React 19, TypeScript, dan Tailwind CSS v4.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + Turbopack
- **Bahasa:** TypeScript
- **UI:** React 19, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/) (Radix UI), `lucide-react`
- **Animasi & Efek:** Framer Motion / `motion`, GSAP (`@gsap/react`), Lenis (smooth scroll), OGL (background particles)
- **Font:** Plus Jakarta Sans (`@fontsource-variable`)
- **Image Optimization:** `sharp`

## Persyaratan

- Node.js 18.18+ (disarankan LTS terbaru)
- npm (lockfile menggunakan `package-lock.json`)

## Menjalankan Project

```bash
# install dependency
npm install

# development (dengan Turbopack)
npm run dev

# build untuk produksi
npm run build

# jalankan hasil build produksi
npm run start

# lint
npm run lint
```

Aplikasi berjalan di http://localhost:3000. Route `/` otomatis redirect ke `/home`.

## Struktur Folder

```
src/
├─ app/                  # App Router
│  ├─ layout.tsx         # Root layout (Navbar, Footer, Lenis, CursorFollower)
│  ├─ page.tsx           # Redirect ke /home
│  ├─ not-found.tsx      # Halaman 404
│  ├─ globals.css        # Global styles + Tailwind
│  └─ home/
│     ├─ page.tsx        # Halaman utama
│     └─ _components/     # Jumbotron, Education, Experience
├─ components/
│  ├─ custom/             # Navbar, Footer, LenisProvider, CursorFollower
│  ├─ ui/                 # Komponen shadcn/ui
│  └─ background/         # Background particles (OGL)
├─ constants/             # Data (education, experience, footer)
├─ lib/                   # Utilities (cn, dll)
└─ assets/                # Aset lokal
```

## Konfigurasi

- `next.config.ts` — image formats (webp/avif) & konfigurasi Turbopack
- `components.json` — konfigurasi shadcn/ui
- `eslint.config.js`, `.prettierrc` — linting & formatting
