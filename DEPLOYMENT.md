# Deployment Guide

This guide covers deployment of both the Sanity Studio and Next.js frontend.

## Prerequisites

- Sanity account (https://www.sanity.io)
- Vercel account (https://vercel.com) - recommended for frontend
- Git repository (GitHub, GitLab, or Bitbucket)

## Part 1: Sanity Studio Deployment

### Step 1: Create Sanity Project

1. Go to https://www.sanity.io/manage
2. Click "Create new project"
3. Enter project name: "Mix Expert CMS"
4. Choose a dataset name: "production"
5. Copy your Project ID

### Step 2: Configure Studio

Update `studio/.env`:
```env
SANITY_STUDIO_PROJECT_ID=your-project-id-here
SANITY_STUDIO_DATASET=production
```

### Step 3: Deploy Studio

```bash
cd studio
npm install
npm run build
npm run deploy
```

Choose a studio hostname (e.g., `mixexpert`)

Studio will be available at: `https://mixexpert.sanity.studio`

### Step 4: Configure CORS

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to API settings
4. Add allowed origins:
   - `http://localhost:3000` (for development)
   - `https://your-domain.com` (for production)
   - `https://*.vercel.app` (for Vercel previews)

## Part 2: Frontend Deployment (Vercel)

### Step 1: Push to Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js

### Step 3: Configure Build Settings

**Root Directory:** `frontend`

**Build Command:** `npm run build` (auto-detected)

**Output Directory:** `.next` (auto-detected)

**Install Command:** `npm install` (auto-detected)

### Step 4: Configure Environment Variables

Add the following in Vercel project settings:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Optional (for preview/draft content):
```
SANITY_API_TOKEN=your-api-token
```

### Step 5: Deploy

Click "Deploy" - Vercel will build and deploy your site.

Your site will be available at: `https://your-project.vercel.app`

### Step 6: Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Configure DNS as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## Part 3: Post-Deployment

### Verify Deployment

1. **Studio:** Visit your studio URL and verify you can log in
2. **Frontend:** Visit your site URL
3. **Language Switching:** Test all three languages (pl, en, de)
4. **Content:** Verify content loads correctly
5. **Images:** Check that images display properly
6. **Navigation:** Test all navigation links

### Content Population

1. Log into Sanity Studio
2. Follow the [Content Migration Guide](./CONTENT_MIGRATION_GUIDE.md)
3. Add content for all three languages
4. Upload all images
5. Verify content appears on the frontend

### Testing in Production

```bash
cd frontend
PLAYWRIGHT_BASE_URL=https://your-domain.com npm run test
```

## Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to your repository:

- **Production:** Push to `main` branch
- **Preview:** Push to other branches or create PR

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from frontend directory
cd frontend
vercel

# Production deployment
vercel --prod
```

## Environment-Specific Configuration

### Development
```env
NEXT_PUBLIC_SANITY_DATASET=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Staging
```env
NEXT_PUBLIC_SANITY_DATASET=staging
NEXT_PUBLIC_SITE_URL=https://staging.your-domain.com
```

### Production
```env
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Monitoring & Analytics

### Vercel Analytics

1. Go to Vercel project settings
2. Enable "Analytics"
3. View performance metrics in dashboard

### Sanity Analytics

1. Go to https://www.sanity.io/manage
2. Select your project
3. View usage and API metrics

## Backup & Recovery

### Content Backup

```bash
cd studio
sanity dataset export production backup-$(date +%Y%m%d).tar.gz
```

### Content Restore

```bash
cd studio
sanity dataset import backup.tar.gz production
```

### Scheduled Backups

Sanity provides automatic daily backups. Configure in project settings.

## Performance Optimization

### Frontend Optimization

1. **Images:** Automatically optimized by Next.js
2. **Fonts:** Using `next/font` for optimization
3. **Caching:** Configured in `next.config.ts`
4. **CDN:** Automatic via Vercel

### Sanity Optimization

1. **CDN:** Images served via Sanity CDN
2. **Caching:** Configure in API settings
3. **Image Optimization:** Use URL parameters for responsive images

## Security

### Best Practices

1. **API Tokens:** Never commit tokens to git
2. **Environment Variables:** Use Vercel secrets
3. **CORS:** Only allow necessary origins
4. **Rate Limiting:** Configure in Sanity settings

### Security Headers

Configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

## Troubleshooting

### Build Failures

**Issue:** Build fails in Vercel
- Check build logs in Vercel dashboard
- Verify environment variables are set
- Test build locally: `npm run build`

**Issue:** TypeScript errors
- Run: `npm run lint`
- Fix type errors
- Ensure all dependencies are installed

### Content Not Showing

**Issue:** Content doesn't appear on frontend
- Verify Sanity project ID matches
- Check dataset name
- Verify content exists in Studio
- Check browser console for errors

### Image Loading Issues

**Issue:** Images not loading
- Verify Sanity project ID in image URLs
- Check CORS settings in Sanity
- Verify image domain in `next.config.ts`

## Rollback Procedure

### Frontend Rollback

1. Go to Vercel project
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." → "Promote to Production"

### Content Rollback

```bash
cd studio
sanity dataset import backup-YYYYMMDD.tar.gz production
```

## Support

For deployment issues:
- **Vercel:** https://vercel.com/support
- **Sanity:** https://www.sanity.io/help
- **Next.js:** https://nextjs.org/docs

## Checklist

Before going live:

- [ ] Sanity Studio deployed and accessible
- [ ] All content migrated (PL, EN, DE)
- [ ] All images uploaded
- [ ] Frontend deployed to Vercel
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set
- [ ] CORS configured
- [ ] All pages tested
- [ ] Language switching tested
- [ ] Mobile responsiveness verified
- [ ] Performance metrics checked
- [ ] SEO meta tags verified
- [ ] Analytics configured
- [ ] Backup system in place

## Post-Launch

After successful deployment:

1. Monitor Vercel analytics
2. Check for errors in logs
3. Test all functionality
4. Train content editors on Sanity Studio
5. Set up monitoring/alerting
6. Plan regular content updates
7. Schedule regular backups
