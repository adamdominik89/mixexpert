# Mix Expert - Modern Website Rebuild

Complete rebuild of the Mix Expert website (http://www.mixexpert.com.pl/) as a modern, production-ready Next.js application with Sanity CMS.

## Project Overview

This project consists of two main parts:
1. **Sanity Studio** (`/studio`) - Headless CMS for content management
2. **Next.js Frontend** (`/frontend`) - Modern website with App Router

## Features

✅ **Modern Tech Stack**
- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- Sanity CMS v3

✅ **Multi-Language Support**
- Polish (default)
- English
- German
- Document-level translations

✅ **Content Management**
- All content managed through Sanity Studio
- Comprehensive schemas for all content types
- Easy content updates without code changes

✅ **Modern Design**
- Responsive (mobile-first)
- Performance optimized
- Accessibility compliant
- SEO optimized

✅ **Testing & Quality**
- Playwright E2E tests
- Comprehensive test coverage
- CI/CD ready

## Project Structure

```
mixexpert/
├── studio/                 # Sanity Studio CMS
│   ├── schemas/           # Content schemas
│   │   ├── documents/     # Document types
│   │   └── objects/       # Reusable objects
│   ├── structure.ts       # Studio structure
│   └── sanity.config.ts   # Sanity configuration
│
├── frontend/              # Next.js Application
│   ├── app/              # App Router
│   │   └── [lang]/       # Language routing
│   ├── components/       # React components
│   ├── lib/             # Utilities
│   └── tests/           # Playwright tests
│
├── CONTENT_MIGRATION_GUIDE.md  # Content migration instructions
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Sanity account (free at https://www.sanity.io)

### 1. Sanity Studio Setup

```bash
cd studio
npm install
```

Create `.env` file:
```env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

Start the studio:
```bash
npm run dev
```

Studio will be available at `http://localhost:3333`

Deploy the studio:
```bash
npm run deploy
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` file:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Start the development server:
```bash
npm run dev
```

Frontend will be available at `http://localhost:3000`

### 3. Content Migration

Follow the [Content Migration Guide](./CONTENT_MIGRATION_GUIDE.md) to populate Sanity with content from the original website.

## Development Workflow

### Adding Content

1. Open Sanity Studio (locally or deployed)
2. Navigate to the content type you want to edit
3. Create/edit documents
4. Content is immediately available to the frontend

### Making Changes

**Frontend Changes:**
```bash
cd frontend
npm run dev
```

**Schema Changes:**
```bash
cd studio
npm run dev
```

After schema changes, restart both servers.

### Testing

Run Playwright tests:
```bash
cd frontend
npm run test
```

Run tests with UI:
```bash
npm run test:ui
```

## Deployment

### Sanity Studio

Deploy to Sanity's hosting:
```bash
cd studio
npm run deploy
```

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

Alternatively, use Vercel CLI:
```bash
cd frontend
vercel
```

## Content Structure

### Document Types

1. **Site Settings** - Global configuration (logo, contact, navigation)
2. **Home Page** - Homepage with hero, about, and category cards
3. **Offer Page** - Product catalog page
4. **Contact Page** - Contact information and team
5. **Product Category** - 13 main product categories
6. **Product** - Individual products
7. **Brand** - Company brands (e.g., Dr. GF)
8. **Partner** - Business partners

### Languages

All documents support three languages with separate documents per language:
- Polish (pl) - Primary
- English (en)
- German (de)

## Key Features Implemented

### 1. Multi-Language Routing

- URL structure: `/{lang}/{page}`
- Automatic language detection and redirect
- Language switching preserves current page
- Middleware handles language routing

### 2. Content Management

- Document-level translations
- Rich text editing with Portable Text
- Image optimization with Sanity CDN
- Flexible content schemas

### 3. Performance

- Static generation where possible
- Image optimization with Next.js Image
- CDN delivery via Vercel
- Optimized bundle sizes

### 4. SEO

- Meta tags per page
- Open Graph support
- Structured data ready
- Sitemap generation ready

### 5. Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- Keyboard navigation
- Screen reader support

## Testing

### Test Coverage

- Homepage tests
- Navigation tests
- Language switching tests
- Accessibility tests
- Responsive design tests

### Running Tests

```bash
cd frontend

# Run all tests
npm run test

# Run specific test file
npx playwright test tests/home.spec.ts

# Run with UI
npm run test:ui

# Run in specific browser
npx playwright test --project=chromium
```

## Maintenance

### Updating Dependencies

```bash
# Studio
cd studio
npm update

# Frontend
cd frontend
npm update
```

### Content Backups

Sanity provides automatic backups. To export manually:
```bash
cd studio
sanity dataset export production backup.tar.gz
```

## Troubleshooting

### Common Issues

**Issue: Sanity content not showing**
- Check environment variables are correct
- Verify Sanity project ID matches
- Check dataset name (production vs development)

**Issue: Images not loading**
- Verify Sanity project ID in image URLs
- Check Next.js image configuration
- Ensure images are uploaded to Sanity

**Issue: Language switching not working**
- Check middleware configuration
- Verify language codes in content
- Check URL structure

## Support & Documentation

- **Next.js:** https://nextjs.org/docs
- **Sanity:** https://www.sanity.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Playwright:** https://playwright.dev/docs/intro

## License

Copyright © 2026 Mix Expert. All rights reserved.

## Contributors

Developed as a complete rebuild of the original Mix Expert website with modern technologies and best practices.
