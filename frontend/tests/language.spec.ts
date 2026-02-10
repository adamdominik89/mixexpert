import { test, expect } from '@playwright/test'

test.describe('Language Functionality', () => {
  test('can navigate to all three languages', async ({ page }) => {
    // Visit Polish
    await page.goto('/pl')
    await expect(page.locator('html')).toHaveAttribute('lang', 'pl')
    await expect(page.locator('body')).toContainText('Nasza oferta')
    
    // Visit English
    await page.goto('/en')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator('body')).toContainText('Our Offer')
    
    // Visit German
    await page.goto('/de')
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')
    await expect(page.locator('body')).toContainText('Unser Angebot')
  })

  test('language switcher is visible', async ({ page }) => {
    await page.goto('/pl')
    await page.waitForLoadState('networkidle')
    
    // Look for language buttons in header
    const plButton = page.locator('button:has-text("PL")')
    const enButton = page.locator('button:has-text("EN")')
    const deButton = page.locator('button:has-text("DE")')
    
    await expect(plButton).toBeVisible()
    await expect(enButton).toBeVisible()
    await expect(deButton).toBeVisible()
  })

  test('contact page works in all languages', async ({ page }) => {
    await page.goto('/pl/kontakt')
    await expect(page.locator('h1')).toContainText('Kontakt')
    
    await page.goto('/en/kontakt')
    await expect(page.locator('h1')).toContainText('Contact')
    
    await page.goto('/de/kontakt')
    await expect(page.locator('h1')).toContainText('Kontakt')
  })

  test('offer page works in all languages', async ({ page }) => {
    await page.goto('/pl/oferta')
    await expect(page.locator('h1')).toContainText('Oferta')
    
    await page.goto('/en/oferta')
    await expect(page.locator('h1')).toContainText('Offer')
    
    await page.goto('/de/oferta')
    await expect(page.locator('h1')).toContainText('Angebot')
  })
})
