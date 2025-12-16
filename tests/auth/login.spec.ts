import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login.page'
import { users } from '../../fixtures/users'
import { errorMessages } from '../../fixtures/messages'

test.describe('Login - Saucedemo', () => {
  test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login(
      users.standard.username,
      users.standard.password
    )

    await expect(page).toHaveURL(/inventory.html/)
  })

  test('User sees error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login(
      users.invalid.username,
      users.invalid.password
    )

    await loginPage.assertLoginError(
      errorMessages.invalidCredentials
    )
  })

  test('Locked out user sees proper error message', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login(
      users.locked.username,
      users.locked.password
    )

    await loginPage.assertLoginError(
      errorMessages.lockedUser
    )
  })
})
