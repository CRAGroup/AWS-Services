# AWS Services Directory

A searchable, category-filtered reference for popular Amazon Web Services. Built with React 19, TanStack Start, TanStack Router, and Tailwind CSS v4.

## Features

- Browse 15 popular AWS services across 7 categories
- Filter by category: Compute, Storage, Database, Networking, Security, Analytics, AI & ML
- Live search by service name or description
- Each card links directly to the official AWS product page
- Server-side rendered with TanStack Start

## Tech Stack

| Layer | Library / Tool |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | Tailwind CSS v4 + Bootstrap utility classes |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Build | Vite 8 + Nitro |
| Testing | Vitest + Testing Library |
| Linting | ESLint + Prettier |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/) 1+

### Install dependencies

```bash
# with npm
npm install

# or with bun
bun install
```

### Run the development server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components (Button, Card, Dialog, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and error handling helpers
├── routes/
│   ├── __root.tsx   # Root layout
│   └── index.tsx    # Home page — service list and search
├── router.tsx       # Router configuration
├── server.ts        # SSR server entry
├── start.ts         # App entry point
└── styles.css       # Global styles
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests once with Vitest |
| `npm run test:watch` | Run tests in watch mode |

## Adding a New Service

Open `src/routes/index.tsx` and add an entry to the `services` array:

```ts
{ name: "Amazon XYZ", category: "Compute", description: "Short description.", icon: Server },
```

Available categories are defined in the `Category` type at the top of the file.

## Disclaimer

This project is not affiliated with or endorsed by Amazon Web Services. All service names and descriptions are trademarks of Amazon.com, Inc.
