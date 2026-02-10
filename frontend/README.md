# Mix Expert - Frontend

Modern Next.js website for Mix Expert with Sanity CMS integration.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Multi-language support (Polish, English, German)
- ✅ Sanity CMS integration
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Performance optimized

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update the environment variables with your Sanity project details.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                  # Next.js App Router
│   ├── [lang]/          # Language-based routing
│   │   ├── layout.tsx   # Language layout with header/footer
│   │   ├── page.tsx     # Homepage
│   │   ├── oferta/      # Offer page
│   │   ├── kontakt/     # Contact page
│   │   └── kategoria/   # Category pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Root redirect
│   └── globals.css      # Global styles
├── components/          # React components
├── lib/                 # Utilities and configurations
│   ├── sanity.client.ts # Sanity client
│   ├── sanity.queries.ts # Sanity queries
│   ├── sanity.image.ts  # Image URL builder
│   ├── languages.ts     # Language configuration
│   └── types.ts         # TypeScript types
└── middleware.ts        # Next.js middleware for language routing
```

## Language Support

The website supports three languages:
- **Polish (pl)** - Default
- **English (en)**
- **German (de)**

Language routing is handled automatically via middleware. URLs follow the pattern:
- `/{lang}` - Homepage
- `/{lang}/oferta` - Offer page
- `/{lang}/kontakt` - Contact page
- `/{lang}/kategoria/{slug}` - Category pages

## Sanity CMS Integration

Content is fetched from Sanity CMS using the `@sanity/client` package. All queries are defined in `lib/sanity.queries.ts`.

### Key Features:
- Document-level translations (separate documents per language)
- Image optimization with `@sanity/image-url`
- Portable Text rendering with `@portabletext/react`

## Testing

Run Playwright E2E tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The project is configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel
4. Deploy

### Required Environment Variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SITE_URL`

## License

Copyright © 2026 Mix Expert. All rights reserved.
