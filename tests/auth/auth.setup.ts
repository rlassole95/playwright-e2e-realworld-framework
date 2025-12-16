import { test as setup, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login.page'
import { users } from '../../fixtures/users'

const authFile = '.auth/user.json'

setup('Authenticate user', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login(
    users.standard.username,
    users.standard.password
  )

  await expect(page).toHaveURL(/inventory.html/)

  await page.context().storageState({ path: authFile })
})
