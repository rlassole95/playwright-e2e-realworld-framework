import { Page, Locator, expect } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly cartItem: Locator
  readonly checkoutButton: Locator
  readonly continueShoppingButton: Locator

  constructor(page: Page) {
    this.page = page
    this.cartItem = page.locator('.cart_item')
    this.checkoutButton = page.locator('[data-test="checkout"]')
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
  }

  async goto() {
    await this.page.goto('/cart.html')
    await expect(this.cartItem.first()).toBeVisible()
  }

  async assertProductInCart(productName: string) {
    const item = this.cartItem.filter({ hasText: productName })
    await expect(item).toBeVisible()
  }

  async removeProduct(productName: string) {
    const item = this.cartItem.filter({ hasText: productName })
    await item.locator('button').click()
  }

  async goToCheckout() {
    await expect(this.checkoutButton).toBeVisible()
    await this.checkoutButton.click()
  }
}
