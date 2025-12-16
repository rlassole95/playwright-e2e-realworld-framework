import { Page, Locator, expect } from '@playwright/test'

export class ProductsPage {
  readonly page: Page
  readonly inventoryList: Locator
  readonly cartBadge: Locator

  constructor(page: Page) {
    this.page = page
    this.inventoryList = page.locator('.inventory_list')
    this.cartBadge = page.locator('.shopping_cart_badge')
  }

  async goto() {
    await this.page.goto('/inventory.html')
    await expect(this.inventoryList).toBeVisible()
  }

  async addProductToCart(productName: string) {
    const productCard = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })

    await expect(productCard).toBeVisible()

    await productCard
      .locator('button')
      .click()
  }

  async assertCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count))
  }
}
