import { test, expect } from '@playwright/test'

test.describe('Basic Functionality', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/pl')
    await expect(page).toHaveTitle(/Mix Expert/)
    await expect(page.locator('h1')).toContainText('Mix Expert')
  })

  test('all language homepages load', async ({ page }) => {
    // Polish
    await page.goto('/pl')
    await expect(page.locator('body')).toBeVisible()
    
    // English
    await page.goto('/en')
    await expect(page.locator('body')).toBeVisible()
    
    // German
    await page.goto('/de')
    await expect(page.locator('body')).toBeVisible()
  })

  test('navigation menu works', async ({ page }) => {
    await page.goto('/pl')
    
    // Wait for page to load
    await page.waitForLoadState('networkidle')
    
    // Check navigation exists
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    
    // Check links exist (use role to be more specific)
    await expect(page.getByRole('link', { name: 'O nas' })).toBeVisible()
    await expect(page.getByRole('link', { name: /oferta/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Kontakt' })).toBeVisible()
  })

  test('offer page loads', async ({ page }) => {
    await page.goto('/pl/oferta')
    await expect(page.locator('h1')).toContainText('Oferta')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/pl/kontakt')
    await expect(page.locator('h1')).toContainText('Kontakt')
    await expect(page.getByText('Rumia')).toBeVisible()
  })

  test('category page loads', async ({ page }) => {
    await page.goto('/pl/kategoria/koncentraty-spozywcze')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('body')).toContainText(/Koncentraty|spożywcze/)
  })

  test('all category pages exist', async ({ page }) => {
    const categories = [
      'koncentraty-spozywcze',
      'lody-w-proszku',
      'wafle-do-lodow',
      'syropy',
      'granita-w-proszku',
      'produkty-mleczne',
      'produkty-bezglutenowe',
      'skrobie',
      'zaopatrzenie',
      'maszyny-lodowe',
      'granitory',
      'gofrownice',
      'mieszanie-pakowanie',
    ]

    for (const slug of categories) {
      const response = await page.goto(`/pl/kategoria/${slug}`, { waitUntil: 'domcontentloaded' })
      // Check response status is 200, not 404
      expect(response?.status()).toBe(200)
      // Should have an h1 on the page
      await expect(page.locator('h1')).toBeVisible({ timeout: 5000 })
    }
  })

  test('404 page works', async ({ page }) => {
    await page.goto('/pl/nieistniejaca-strona')
    await expect(page.locator('h1')).toContainText('404')
  })

  test('phone number is clickable', async ({ page }) => {
    await page.goto('/pl')
    const phone = page.getByText('+48 663 902 452').first()
    await expect(phone).toBeVisible()
    await expect(phone).toHaveAttribute('href', /tel/)
  })

  test('categories are displayed', async ({ page }) => {
    await page.goto('/pl')
    await page.waitForLoadState('networkidle')
    
    // Should have category cards
    await expect(page.getByText('Koncentraty spożywcze')).toBeVisible()
    await expect(page.getByText('Lody w proszku')).toBeVisible()
  })
})
