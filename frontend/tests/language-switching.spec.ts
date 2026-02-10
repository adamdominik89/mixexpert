import { test, expect } from '@playwright/test'

test.describe('Language Switching', () => {
  test('should switch from Polish to English', async ({ page }) => {
    await page.goto('/pl')
    await page.getByRole('button', { name: /EN/i }).click()
    await expect(page).toHaveURL(/\/en/)
  })

  test('should switch from Polish to German', async ({ page }) => {
    await page.goto('/pl')
    await page.getByRole('button', { name: /DE/i }).click()
    await expect(page).toHaveURL(/\/de/)
  })

  test('should switch from English to German', async ({ page }) => {
    await page.goto('/en')
    await page.getByRole('button', { name: /DE/i }).click()
    await expect(page).toHaveURL(/\/de/)
  })

  test('should maintain current page when switching language', async ({ page }) => {
    // Navigate to offer page in Polish
    await page.goto('/pl/oferta')
    
    // Switch to English
    await page.getByRole('button', { name: /EN/i }).click()
    
    // Should be on English offer page
    await expect(page).toHaveURL(/\/en\/oferta/)
  })

  test('should highlight active language', async ({ page }) => {
    await page.goto('/pl')
    
    // Polish button should be active
    const plButton = page.getByRole('button', { name: /PL/i })
    await expect(plButton).toHaveClass(/bg-primary-600/)
  })

  test('should work on all pages', async ({ page }) => {
    const pages = ['/pl', '/pl/oferta', '/pl/kontakt']
    
    for (const pagePath of pages) {
      await page.goto(pagePath)
      
      // Switch to English
      await page.getByRole('button', { name: /EN/i }).click()
      
      // Should switch to English
      await expect(page).toHaveURL(/\/en\//)
      
      // Switch back to Polish for next iteration
      await page.getByRole('button', { name: /PL/i }).click()
    }
  })
})
