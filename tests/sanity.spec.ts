import { test, expect } from '@playwright/test'

test('Saucedemo loads correctly', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Swag Labs')
})
