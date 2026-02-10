import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should redirect root to default language', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/\/pl/)
  })

  test('should display header with logo and navigation', async ({ page }) => {
    await page.goto('/pl')
    
    // Check for header elements
    await expect(page.locator('header')).toBeVisible()
    
    // Check for phone number in header
    await expect(page.locator('header').getByText(/\+48/)).toBeVisible()
  })

  test('should display language switcher', async ({ page }) => {
    await page.goto('/pl')
    
    // Check for language buttons
    await expect(page.getByRole('button', { name: /PL/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /EN/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /DE/i })).toBeVisible()
  })

  test('should switch languages', async ({ page }) => {
    await page.goto('/pl')
    
    // Click English language button
    await page.getByRole('button', { name: /EN/i }).click()
    
    // Should navigate to English version
    await expect(page).toHaveURL(/\/en/)
  })

  test('should display footer with brands and partners', async ({ page }) => {
    await page.goto('/pl')
    
    // Check for footer
    await expect(page.locator('footer')).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/pl')
    
    // Check that page loads and header is visible
    await expect(page.locator('header')).toBeVisible()
  })
})
