import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ]

  for (const viewport of viewports) {
    test(`should render correctly on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto('/pl')
      
      // Check that essential elements are visible
      await expect(page.locator('header')).toBeVisible()
      await expect(page.locator('main')).toBeVisible()
      await expect(page.locator('footer')).toBeVisible()
    })

    test(`should have clickable elements on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto('/pl')
      
      // Check that language switcher is clickable
      const enButton = page.getByRole('button', { name: /EN/i })
      await expect(enButton).toBeVisible()
      
      // Verify it's clickable
      await enButton.click()
      await expect(page).toHaveURL(/\/en/)
    })
  }

  test('should show mobile-optimized navigation on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/pl')
    
    // Navigation should be visible (even if styled differently)
    await expect(page.locator('nav')).toBeVisible()
  })

  test('should maintain layout integrity on different screen sizes', async ({ page }) => {
    await page.goto('/pl')
    
    // Start with desktop
    await page.setViewportSize({ width: 1920, height: 1080 })
    await expect(page.locator('header')).toBeVisible()
    
    // Resize to tablet
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.locator('header')).toBeVisible()
    
    // Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('header')).toBeVisible()
  })
})
