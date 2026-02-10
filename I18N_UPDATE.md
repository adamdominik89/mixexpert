# ✅ Translation Architecture Updated to Single Document Per Content Type

## What Changed

### Before (Document-Level Translations)
Each content type had **3 separate documents** (one per language):
```
- category-koncentraty-pl
- category-koncentraty-en
- category-koncentraty-de
```

**Problems:**
- Had to maintain 3 documents
- Duplicate content structure
- Hard to keep translations in sync
- Confusing Studio navigation

### After (Field-Level Translations - i18n)
Each content type is now **1 single document** with translation fields:
```
- category-i18n-koncentraty
  ├── title:
  │   ├── pl: "Koncentraty spożywcze..."
  │   ├── en: "Food concentrates..."
  │   └── de: "Lebensmittelkonzentrate..."
  ├── description:
  │   ├── pl: [Polish text]
  │   ├── en: [English text]
  │   └── de: [German text]
  └── ... (other fields)
```

**Benefits:**
✅ **Single source of truth** - All languages in one place  
✅ **Easier to manage** - Edit all translations together  
✅ **Better UX** - See all languages side-by-side  
✅ **No duplication** - Images and settings shared across languages  
✅ **Cleaner Studio** - 13 category documents instead of 39  

---

## What Was Done

### 1. ✅ Installed i18n Plugin
```bash
npm install @sanity/document-internationalization
```

### 2. ✅ Created Localized Field Types
**New object types created:**
- `localizedString` - For short text (title, name, etc.)
- `localizedText` - For longer text (descriptions)
- `localizedRichText` - For rich formatted content

**Structure:**
```typescript
{
  pl: string,  // Polish
  en: string,  // English
  de: string,  // German
}
```

### 3. ✅ Updated productCategory Schema
Changed from:
```typescript
title: string
description: richText
language: 'pl' | 'en' | 'de'  // Separate docs per language
```

To:
```typescript
title: {
  pl: string,
  en: string,
  de: string
}
description: {
  pl: richText,
  en: richText,
  de: richText
}
// No language field - one document for all languages!
```

### 4. ✅ Migrated All 13 Categories
**Migration script created and executed:**
- Took 39 old documents (13 × 3 languages)
- Combined into 13 new i18n documents
- Preserved all content and images
- Linked translations together

**Result:**
```
Before: 39 category documents
After:  13 category documents (with 3 languages each)
```

### 5. ✅ Updated Frontend Queries
Changed from:
```typescript
*[_type == "productCategory" && language == $language]
```

To:
```typescript
*[_type == "productCategory"]{
  "title": title.${language},
  "description": description.${language}
}
```

Queries now extract the correct language from localized fields.

### 6. ✅ Updated Sanity Studio Config
Added i18n plugin:
```typescript
documentInternationalization({
  supportedLanguages: [
    {id: 'pl', title: 'Polish', isDefault: true},
    {id: 'en', title: 'English'},
    {id: 'de', title: 'German'},
  ],
  schemaTypes: ['productCategory', ...],
})
```

---

## How It Works in Studio

### Editing Categories Now:

1. **Open Sanity Studio**: http://localhost:3333
2. **Navigate to Product Categories**
3. **See 13 documents** (not 39!)
4. **Click on any category** (e.g., "Koncentraty spożywcze")
5. **Edit all 3 languages in tabs or side-by-side**

**Example: Editing "Koncentraty spożywcze"**
```
Category ID: koncentraty-spozywcze

Title:
  [PL] Koncentraty spożywcze, mieszanki ciast i gofrów
  [EN] Food concentrates, cake and waffle mixes
  [DE] Lebensmittelkonzentrate, Kuchen- und Waffelmischungen

Description:
  [PL] W naszej ofercie znajdziesz...
  [EN] In our offer you will find...
  [DE] In unserem Angebot finden Sie...

Icon: [Single image used for all languages]
Order: 0
```

All in ONE document!

---

## Migration Scripts Created

### 1. `import-categories.ts`
- Creates all 13 categories with i18n structure
- Imports content in all 3 languages
- Sets up proper field structure

### 2. `migrate-to-i18n.ts`
- Converts old document-level translations
- Combines PL/EN/DE documents into one
- Preserves all content and images

### 3. `download-upload-images.ts`
- Downloads images from original site
- Uploads to Sanity CDN
- Links to documents

### 4. `link-category-images.ts`
- Connects category icons to documents
- Updates all homepage cards
- Updates offer page cards

---

## What Needs To Be Migrated Next

Currently only **productCategory** uses i18n. These should be migrated too:

### High Priority:
- [ ] `homePage` - Homepage content
- [ ] `offerPage` - Offer page
- [ ] `contactPage` - Contact page
- [ ] `siteSettings` - Global settings
- [ ] `brand` - Brand information

### Lower Priority:
- [ ] `product` - Individual products (when added)

---

## How to Migrate Other Content Types

### Example: Migrating siteSettings

**1. Update schema to use localized fields:**
```typescript
{
  name: 'siteName',
  type: 'localizedString'  // Instead of: type: 'string'
}
```

**2. Update frontend queries:**
```typescript
"siteName": siteName.${language}
```

**3. Run migration script:**
```typescript
// Combine siteSettings-pl, siteSettings-en, siteSettings-de
// Into single siteSettings document with i18n fields
```

**4. Update Studio config:**
```typescript
documentInternationalization({
  schemaTypes: ['productCategory', 'siteSettings', ...]
})
```

---

## Current Status

### ✅ Working:
- Product categories use i18n (13 documents instead of 39)
- All 3 languages accessible from one document
- Images shared across languages
- Migration scripts working

### ⚠️ Still Using Old System:
- Home pages (still 3 documents)
- Offer pages (still 3 documents)
- Contact pages (still 3 documents)
- Site settings (still 3 documents)
- Brands (still 3 documents)

**These can be migrated using the same pattern.**

---

## Testing the New i18n Categories

### In Studio:
1. Start studio: `cd studio && npm run dev`
2. Open: http://localhost:3333
3. Go to "Product Categories"
4. You'll see **13 documents** (not 39!)
5. Click any category
6. You'll see translation fields with PL/EN/DE tabs

### On Website:
Visit http://localhost:3000/pl/kategoria/koncentraty-spozywcze

You should see:
- Polish title and description
- Same category in EN: /en/kategoria/koncentraty-spozywcze
- Same category in DE: /de/kategoria/koncentraty-spozywcze

---

## Benefits of New System

### For Content Editors:
✅ Edit all translations in one place  
✅ See all languages side-by-side  
✅ Easier to keep translations in sync  
✅ Less clicking and navigation  
✅ Single image for all languages  

### For Developers:
✅ Simpler data structure  
✅ Fewer documents to manage  
✅ Easier queries  
✅ Better performance  
✅ More maintainable  

### For Website:
✅ Faster queries (fewer documents)  
✅ Better cache efficiency  
✅ Guaranteed consistency across languages  
✅ Easier to add new languages in future  

---

## Next Steps (Optional)

If you want to migrate all content to i18n:

1. **Backup first:**
   ```bash
   cd studio
   sanity dataset export test backup.tar.gz
   ```

2. **Migrate remaining types:**
   - Update schemas (use localizedString/localizedText)
   - Create migration scripts
   - Update frontend queries

3. **Test thoroughly:**
   - Run E2E tests
   - Check all pages
   - Verify all languages

4. **Deploy:**
   - When satisfied, deploy to production

---

## Summary

✅ **Product Categories migrated to i18n**  
✅ **13 documents instead of 39**  
✅ **All languages in single document**  
✅ **Much easier content management**  
✅ **Migration scripts created and tested**  

**The new system is live for categories. Other content types can be migrated using the same pattern when you're ready.**
