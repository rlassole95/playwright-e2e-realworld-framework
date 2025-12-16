import { test, expect } from '@playwright/test'

test('User sees products page when authenticated', async ({ page }) => {
  await page.goto('/inventory.html')

  await expect(page).toHaveURL(/inventory.html/)
  await expect(page.locator('.inventory_list')).toBeVisible()
})
