# Mix Expert - Sanity Studio

This is the Sanity Studio for the Mix Expert website CMS.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your Sanity project details:

```bash
cp .env.example .env
```

Get your project ID and dataset from [Sanity.io Manage](https://www.sanity.io/manage).

### 3. Run the Studio

```bash
npm run dev
```

This will start the studio on `http://localhost:3333`.

## Content Structure

### Document-Level Translations

All content types support three languages:
- **Polish (pl)** - Default language
- **English (en)**
- **German (de)**

Each document has a `language` field. Create separate documents for each language version.

### Document Types

1. **Site Settings** - Global site configuration (logo, contact info, navigation)
2. **Home Page** - Homepage content with hero, about section, and category cards
3. **Offer Page** - Offer/catalog page
4. **Contact Page** - Contact information and team
5. **Product Category** - Product categories (13 main categories)
6. **Product** - Individual products
7. **Brand** - Company brands (e.g., Dr. GF)
8. **Partner** - Business partners (no translation needed)

### Content Organization

The Studio is organized by:
1. **Site Settings** - By language
2. **Pages** - Grouped by page type, then by language
3. **Product Categories** - By language, ordered by display order
4. **Products** - By language, ordered by display order
5. **Brands** - By language
6. **Partners** - Single list (no translations)

## Deployment

Deploy the Studio to Sanity's hosting:

```bash
npm run deploy
```

## GraphQL API

Deploy the GraphQL API:

```bash
npm run deploy-graphql
```

## Schema Updates

After modifying schemas in `./schemas`, restart the dev server to see changes.

## Support

For Sanity documentation, visit [sanity.io/docs](https://www.sanity.io/docs).
