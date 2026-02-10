# Content Migration Guide

This guide provides instructions for migrating content from the original Mix Expert website to Sanity CMS.

## Overview

The original website (http://www.mixexpert.com.pl/) needs to be migrated to Sanity CMS with content in three languages:
- Polish (pl) - Primary language
- English (en)
- German (de)

## Migration Strategy

### 1. Document Structure

Each content type requires separate documents for each language:
- All documents have a `language` field
- Related documents across languages share the same ID (e.g., `categoryId`, `productId`, `brandId`)

### 2. Content Types to Migrate

#### A. Site Settings (3 documents - one per language)

**Polish (pl):**
- Site Name: "Mix Expert"
- Phone: "+48 663 902 452"
- Email: "biuro@mixexpert.com.pl"
- Navigation Items:
  - O nas → "/"
  - Oferta → "/oferta"
  - Kontakt → "/kontakt"

**English (en) & German (de):** Translate accordingly

#### B. Home Page (3 documents)

**Polish Content:**

**Hero Section:**
- Title: "Mix Expert"
- Subtitle: "Producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r."

**About Section:**
- Title: "Mix Expert"
- Subtitle: "Jakość naszą pasją"
- Description: 
  - "producent wafli do lodów, jako przedsiębiorstwo rodzinne istnieje w branży lodziarskiej, cukierniczej i piekarniczej od 1985r. Zaczynając od wypieku wafli do lodów i deserów, stopniowo udoskonalaliśmy nasze produkty tak aby zawsze gwarantować najwyższą jakość oferowanych wyrobów."
  - "W miarę upływu czasu spostrzegliśmy zmieniające się tendencje rynku i od 1996 roku jesteśmy producentem szerokiej gamy koncentratów spożywczych w proszku takich jak: ciasta, gofry, lody, kremy cukiernicze oraz wiele innych. Nasze zaawansowane technologie oraz unikalne receptury są wynikiem wieloletniej pracy i starań aby sprostać wymaganiom rynku. Dlatego też nasze produkty cechuje wysoka i niezmienna jakość."

**Offer Title:** "Nasza oferta"

**Category Cards (13 categories):**

1. **Koncentraty spożywcze, mieszanki ciast i gofrów**
   - Link: "/kategoria/koncentraty-spozywcze"
   - Category ID: "concentrates"

2. **Lody w proszku, proszek lodowy do automatów**
   - Link: "/kategoria/lody-w-proszku"
   - Category ID: "ice-cream-powder"

3. **Wafle do lodów i deserów**
   - Link: "/kategoria/wafle-do-lodow"
   - Category ID: "wafer-cones"

4. **Syropy do granitorów, sorbetów i shake'ów**
   - Link: "/kategoria/syropy"
   - Category ID: "syrups"

5. **Granita w proszku**
   - Link: "/kategoria/granita-w-proszku"
   - Category ID: "granita-powder"

6. **Specjalistyczne mieszanki mleczne oraz produkty mleczne**
   - Link: "/kategoria/produkty-mleczne"
   - Category ID: "dairy-products"

7. **Produkty bezglutenowe**
   - Link: "/kategoria/produkty-bezglutenowe"
   - Category ID: "gluten-free"

8. **Skrobie pszenne glutenowe oraz bezglutenowe**
   - Link: "/kategoria/skrobie"
   - Category ID: "starches"

9. **Zaopatrzenie lodziarni, cukierni i piekarni**
   - Link: "/kategoria/zaopatrzenie"
   - Category ID: "supplies"

10. **Maszyny i automaty do lodów**
    - Link: "/kategoria/maszyny-lodowe"
    - Category ID: "ice-cream-machines"

11. **Granitory**
    - Link: "/kategoria/granitory"
    - Category ID: "slush-machines"

12. **Gofrownice**
    - Link: "/kategoria/gofrownice"
    - Category ID: "waffle-makers"

13. **Mieszanie i pakowanie usługowe**
    - Link: "/kategoria/mieszanie-pakowanie"
    - Category ID: "mixing-packing"

#### C. Contact Page (3 documents)

**Polish:**
- Title: "Kontakt"
- Company Name: "Mix Expert"
- Headquarters Label: "Siedziba Firmy:"
- Address:
  - Street: "ul. Torowa 14"
  - Postal Code: "84-230"
  - City: "Rumia"
  - Country: "Polska"
- Email: "biuro@mixexpert.com.pl"
- Phone: "+48 663 902 452"
- Administration Label: "Administracja:"
- Sales Department Label: "Dział Handlowy:"

**Contact Persons:**
1. Katarzyna Rutkowska
   - Role: "Administracja"
   - Phone: "+48 663 902 452"
   - Language Flags: ["pl", "en", "de"]

2. Adam Dominik
   - Role: "Dział Handlowy"
   - Language Flags: ["pl", "en", "de"]

#### D. Brands (3 documents - one per language)

**Dr. GF Brand:**
- Brand ID: "drgf"
- Name: "Dr. GF"
- Description (Polish): "Dr. GF został stworzony w trosce o ludzi borykających się z coraz bardziej szerzącą się nietolerancją na gluten. Pragniemy zaoferować Państwu wysokiej jakości linię produktów bezglutenowych, które są w 100% bezpieczne - potwierdzają to stosowne badania w akredytowanym laboratorium, co gwarantuje utrzymanie niezmiennego, wysokiego poziomu jakości naszych produktów."
- Website: "http://drgf.com.pl"

#### E. Partners (no language variants)

Partners to add:
1. Baj
2. Dezal
3. Instalmasz
4. Jureko
5. Logobeztla
6. Maszyny do lodów
7. Savpol

### 3. Product Categories

For each of the 13 categories, create:
- Polish document
- English document (translated)
- German document (translated)

Each category should include:
- Title
- Description
- Header image
- Icon image
- Order number (0-12)
- Subcategories (if applicable)

### 4. Migration Steps

#### Step 1: Set Up Sanity Project

1. Create a Sanity account at https://www.sanity.io
2. Create a new project
3. Copy the Project ID
4. Update `.env` files in both `/studio` and `/frontend`

#### Step 2: Deploy Sanity Studio

```bash
cd studio
npm run deploy
```

#### Step 3: Add Content

1. Open Sanity Studio (local or deployed)
2. Create Site Settings for each language
3. Create Home Page for each language
4. Create Offer Page for each language
5. Create Contact Page for each language
6. Create all 13 Product Categories (3 documents each = 39 total)
7. Add Products (as needed)
8. Add Brand (Dr. GF) for each language
9. Add all 7 Partners

#### Step 4: Image Migration

Images from the original site should be downloaded and uploaded to Sanity:

**Key Images:**
- Logo: `/templates/mix_expert/images/logo.png`
- Category icons: Various from `/images/glowna_nowe/`
- Partner logos: From `/images/partnerzy/`
- Dr. GF logo: `/images/drgf-logo.png`

Upload each image to Sanity and attach to appropriate documents.

### 5. Content Translation

For English and German versions:

1. Use the Polish content as a base
2. Translate all text fields
3. Keep the same structure and IDs
4. Maintain the same slug patterns (e.g., "kontakt" → "contact" → "kontakt")

### 6. Verification Checklist

After migration, verify:
- [ ] All 3 language versions exist for each content type
- [ ] All images are uploaded and properly referenced
- [ ] Navigation items are correctly configured
- [ ] Category cards link to correct URLs
- [ ] Contact information is complete
- [ ] Partner logos are visible
- [ ] Brand information is complete
- [ ] All slugs are properly generated

### 7. Testing

After content migration:

```bash
cd frontend
npm run dev
```

Test each language:
- http://localhost:3000/pl
- http://localhost:3000/en
- http://localhost:3000/de

Verify:
- All pages load correctly
- Images display properly
- Navigation works
- Language switching maintains context
- Content is properly formatted

## Notes

- Original website excludes "Aktualności" (News) section - do not migrate
- Maintain original content structure and information architecture
- Ensure all text is managed through Sanity (no hardcoded content)
- Use document-level translations (separate documents per language)

## Support

For issues or questions:
1. Check Sanity documentation: https://www.sanity.io/docs
2. Review schema files in `/studio/schemas`
3. Check frontend queries in `/frontend/lib/sanity.queries.ts`
