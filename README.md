# OneNEX Asignment Challenge

A software-company demo site containing dummy data and example pages built with Next.js, TypeScript and Tailwind CSS. This repository contains components and pages used to present example software company content (services, contact, showcases).

## Key Features
- Next.js 16.x app with TypeScript and React 19
- Tailwind CSS for utility-first styling
- Reusable component library under `components/`
- Email/contact actions implemented in `lib/actions/`

## Tech Stack
- Framework: Next.js 16.1.6
- Language: TypeScript
- UI: React 19, Tailwind CSS
- Tooling: ESLint, PostCSS
 - Validation: Zod
 - Animation: Framer Motion

## Quick Start
1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

4. Lint

```bash
npm run lint
```

## Project Structure (high level)
- `app/` — Next.js app routes, pages and templates
- `components/` — UI components and animations
- `lib/` — utilities and server actions (e.g. email sending)
- `hooks/` — custom React hooks
- `public/` — static assets
- `types/` — TypeScript types

## Environment & Notes
- If the project sends email or uses external APIs, add the required environment variables to a `.env.local` file. Check `lib/actions/` for hints on required keys.
- This project uses the versions listed in `package.json`. Update carefully when bumping dependencies.

## Contributing
- Open an issue or submit a PR for improvements, bug fixes or updates.

## License
This repository does not include a license file. Add one if you intend to publish or share under a specific license.

---

File: [package.json](package.json)
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.