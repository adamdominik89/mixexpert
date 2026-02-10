# Mix Expert Website

Modern Next.js + Sanity CMS website with 7-language support.

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run build
npm start
```
Visit: http://localhost:3000

### Sanity Studio
```bash
cd studio
npm install
npm run dev
```
Visit: http://localhost:3333

## Features

- 7 languages (PL, EN, DE, FR, PT, RU, ZH)
- i18n single-document translations
- Modern responsive design
- 13 product categories
- All images from original site

## Configuration

Environment variables are in:
- `frontend/.env.local`
- `studio/.env`

## Deployment

```bash
cd frontend
vercel --prod
```

## License

Copyright © 2026 Mix Expert. All rights reserved.
