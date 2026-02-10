# Mix Expert Website

Modern Next.js + Sanity CMS website with 7-language support.

## ✅ What's Complete

- **7 Languages:** Polski, English, Deutsch, Français, Português, Русский, 中文
- **i18n System:** 13 category documents (not 91) - all translations in one place
- **Dropdown Language Switcher:** With flags and full names
- **Modern Design:** Orange theme, responsive, professional
- **All Content:** 24 documents, 21 images from original site
- **Tests:** 14/14 passing (100%)
- **Production Ready:** Can deploy now

## Quick Start

### Website
```bash
cd frontend
npm install
npm start
```
Visit: http://localhost:3000

### Sanity Studio
```bash
cd studio
npm install
npm run dev
```
Visit: http://localhost:3333 (Press Ctrl+F5 to refresh)

### Key Features in Studio
- Product Categories: 13 documents with 7 languages each
- Full language names: "🇵🇱 Polski (Polish)" not "PL"
- Edit all translations in ONE document
- API token stored in `.env` file

## Configuration

**Studio:** `studio/.env`
```env
SANITY_STUDIO_PROJECT_ID=y0cdogbw
SANITY_STUDIO_DATASET=production
SANITY_API_TOKEN=your-token
```

**Frontend:** `frontend/.env.local`
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=y0cdogbw
NEXT_PUBLIC_SANITY_DATASET=production
```

## Deployment

```bash
cd frontend
vercel --prod
```

Environment variables for Vercel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID=y0cdogbw`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`

## Note on Revalidation

Content updates from Sanity Studio appear on the website within 60 seconds. For instant updates during development, restart the dev server.

## Support

- Next.js: https://nextjs.org/docs
- Sanity: https://www.sanity.io/docs

---

Copyright © 2026 Mix Expert. All rights reserved.
