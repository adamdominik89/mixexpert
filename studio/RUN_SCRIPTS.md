# 🚀 Mix Expert Studio - Migration Scripts

## Environment Setup

All scripts now automatically use the token from `.env` file!

**No need to manually set `SANITY_API_TOKEN` anymore.**

---

## Available Scripts

### Quick Commands

```bash
# Run full migration (clean + import all data + upload images)
npm run import-full

# Import content only (faster)
npm run import

# Clean up old language fields
npm run cleanup

# Link category images
npm run link-images
```

---

## Detailed Script Guide

### 1. Full Migration (Recommended)
**Command:** `npm run import-full`

**What it does:**
1. Cleans dataset (deletes all documents)
2. Downloads 21 images from original site
3. Uploads images to Sanity CDN
4. Creates 13 product categories (with 7 languages each)
5. Creates main pages (homepage, offer, contact)
6. Creates 7 partners with logos
7. Links all images to documents

**Use when:** Starting fresh or resetting everything

**Time:** ~1 minute

---

### 2. Import Content Only
**Command:** `npm run import`

**What it does:**
- Creates documents with i18n structure
- Imports all content in 7 languages
- Does NOT upload images (faster)

**Use when:** Images already uploaded, just updating content

**Time:** ~30 seconds

---

### 3. Cleanup Language Fields
**Command:** `npm run cleanup`

**What it does:**
- Removes old "language" field from all documents
- Fixes "Unknown field" warnings in Studio

**Use when:** Seeing "Unknown field language" warnings

**Time:** ~20 seconds

---

### 4. Link Category Images
**Command:** `npm run link-images`

**What it does:**
- Links uploaded images to category icons
- Updates all category documents

**Use when:** Images uploaded but not linked to categories

**Time:** ~15 seconds

---

## Environment Variables

All scripts automatically read from `.env` file:

```env
SANITY_STUDIO_PROJECT_ID=y0cdogbw
SANITY_STUDIO_DATASET=production
SANITY_API_TOKEN=your-token-here
```

**No need to manually set environment variables anymore!**

---

## Examples

### Fresh Start:
```bash
cd studio
npm run import-full
```

### Content Update Only:
```bash
cd studio
npm run import
```

### Fix Warnings:
```bash
cd studio
npm run cleanup
```

---

## Security Note

**IMPORTANT:** The `.env` file contains your API token!

- ✅ Already added to `.gitignore`
- ❌ Never commit `.env` to git
- ✅ Use `.env.example` for documentation
- ✅ Token is read automatically by scripts

---

## Troubleshooting

### If script fails:
1. Check `.env` file exists
2. Verify `SANITY_API_TOKEN` is set
3. Check token has Editor/Admin permissions
4. Ensure project ID and dataset are correct

### Check your configuration:
```bash
# View env vars (without showing token)
cat .env | grep -v TOKEN
```

---

## 🎉 Benefits

**Before:**
```bash
$env:SANITY_IMPORT_TOKEN="very-long-token"; npx tsx script.ts
```

**After:**
```bash
npm run import-full
```

**Much simpler!** ✨

---

## Quick Reference

| Command | What It Does | Time |
|---------|-------------|------|
| `npm run import-full` | Complete migration | ~1 min |
| `npm run import` | Content only | ~30 sec |
| `npm run cleanup` | Fix warnings | ~20 sec |
| `npm run link-images` | Link images | ~15 sec |

**All scripts use token from `.env` automatically!**
