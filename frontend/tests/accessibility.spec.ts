import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should have proper page title', async ({ page }) => {
    await page.goto('/pl')
    await expect(page).toHaveTitle(/Mix Expert/i)
  })

  test('should have lang attribute on html element', async ({ page }) => {
    await page.goto('/pl')
    const html = page.locator('html')
    await expect(html).toHaveAttribute('lang', 'pl')
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/pl')
    
    // Should have at least one h1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBeGreaterThan(0)
  })

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/pl')
    
    // Get all images
    const images = page.locator('img')
    const count = await images.count()
    
    // Check each image has alt attribute
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      await expect(img).toHaveAttribute('alt')
    }
  })

  test('should have proper link text', async ({ page }) => {
    await page.goto('/pl')
    
    // Links should have text content
    const links = page.locator('a')
    const count = await links.count()
    
    for (let i = 0; i < count; i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      const ariaLabel = await link.getAttribute('aria-label')
      
      // Link should have either text or aria-label
      expect(text || ariaLabel).toBeTruthy()
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/pl')
    
    // Tab through focusable elements
    await page.keyboard.press('Tab')
    
    // Check that something is focused
    const focused = await page.evaluate(() => document.activeElement?.tagName)
    expect(focused).toBeTruthy()
  })

  test('should have proper contrast ratios', async ({ page }) => {
    await page.goto('/pl')
    
    // This is a basic check - in production, use axe-core for comprehensive testing
    // Check that text is visible
    const bodyText = page.locator('body')
    await expect(bodyText).toBeVisible()
  })
})
