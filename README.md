# Agentic Salaam Landing Page

Modern bilingual landing page built with Next.js 14 that greets visitors in Persian and English.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to view the site.

## Production Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Deployment

The project is optimized for deployment on Vercel. After installing dependencies and building, run:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-6d9e82ce
```

Then verify:

```bash
curl https://agentic-6d9e82ce.vercel.app
```

## Project Highlights

- Fully static Next.js app with App Router
- Responsive, glassmorphic hero layout and feature cards
- Bilingual Persian/English messaging with accessible semantic HTML
- Custom SVG accent illustration stored in `public/waves.svg`
