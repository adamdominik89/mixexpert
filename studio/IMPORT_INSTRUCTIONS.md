# Content Import Instructions

## Step 1: Create API Token

1. Go to: https://www.sanity.io/manage/personal/tokens
2. Click "Add API token"
3. Name it: "Import Token"
4. Permissions: Choose "Editor" or "Admin"
5. Copy the token (you won't see it again!)

## Step 2: Run Import

Open PowerShell in the `studio` folder and run:

```powershell
$env:SANITY_IMPORT_TOKEN="your-token-here"
npm run import
```

Replace `your-token-here` with your actual token.

## What Will Be Imported

The script will import:
- 3 Site Settings (PL, EN, DE)
- 3 Home Pages (PL, EN, DE) with all 13 categories
- 3 Offer Pages (PL, EN, DE)
- 3 Contact Pages (PL, EN, DE)
- 3 Brand documents (Dr. GF in PL, EN, DE)
- 7 Partner documents

Total: 22 documents with complete content in all languages!

## After Import

1. Visit http://localhost:3333 to see the Studio
2. Check that all documents exist
3. Start your frontend: `cd ../frontend && npm run dev`
4. Visit http://localhost:3000 to see your website!
