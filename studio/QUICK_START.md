# Quick Start Guide - Sanity Studio

## Initial Setup

### 1. Create Sanity Project

Go to https://www.sanity.io/manage and:
1. Create a new project
2. Name it "Mix Expert CMS"
3. Choose dataset: "production"
4. Copy your Project ID

### 2. Configure Environment

Create `studio/.env`:
```
SANITY_STUDIO_PROJECT_ID=your-project-id-here
SANITY_STUDIO_DATASET=production
```

### 3. Install & Run

```bash
cd studio
npm install
npm run dev
```

Visit: http://localhost:3333

### 4. Add Sample Content

Use the Studio UI to create documents. Here's the minimum required:

#### Site Settings (Polish)
- Document ID: `siteSettings-pl`
- Language: `pl`
- Site Name: `Mix Expert`
- Phone: `+48 663 902 452`
- Navigation Items:
  - O nas → `/`
  - Oferta → `/oferta`
  - Kontakt → `/kontakt`

#### Home Page (Polish)
- Language: `pl`
- Title: `Mix Expert`
- Slug: Generate from title
- Offer Title: `Nasza oferta`
- Hero Section:
  - Title: `Mix Expert`
  - Subtitle: Short company description
- About Section:
  - Title: `Mix Expert`
  - Subtitle: `Jakość naszą pasją`
  - Description: Company description
- Category Cards: Add at least one category

#### Repeat for English and German

Create English (en) and German (de) versions of:
- Site Settings
- Home Page
- Offer Page (if needed)
- Contact Page (if needed)

### 5. Deploy Studio (Optional)

```bash
npm run deploy
```

Choose a studio hostname when prompted.

## Tips

- Start with Polish content first
- Use the same structure for all languages
- Upload images through the Studio interface
- Test content appears on frontend after adding

## Next Steps

1. Add all content as per CONTENT_MIGRATION_GUIDE.md
2. Upload images
3. Create product categories
4. Add products
5. Add brands and partners
