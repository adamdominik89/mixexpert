import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to offer page', async ({ page }) => {
    await page.goto('/pl')
    
    // Look for "Oferta" link in navigation
    const offerLink = page.getByRole('link', { name: /oferta/i })
    if (await offerLink.isVisible()) {
      await offerLink.click()
      await expect(page).toHaveURL(/\/pl\/oferta/)
    }
  })

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/pl')
    
    // Look for "Kontakt" link in navigation
    const contactLink = page.getByRole('link', { name: /kontakt/i })
    if (await contactLink.isVisible()) {
      await contactLink.click()
      await expect(page).toHaveURL(/\/pl\/kontakt/)
    }
  })

  test('should navigate back to home from logo', async ({ page }) => {
    await page.goto('/pl/kontakt')
    
    // Click logo or home link
    await page.locator('header a[href*="/pl"]').first().click()
    await expect(page).toHaveURL(/\/pl$/)
  })

  test('should maintain language when navigating', async ({ page }) => {
    await page.goto('/en')
    
    // Navigate to another page
    const offerLink = page.getByRole('link', { name: /offer/i })
    if (await offerLink.isVisible()) {
      await offerLink.click()
      
      // Should still be in English
      await expect(page).toHaveURL(/\/en\//)
    }
  })
})
