import { test } from '@playwright/test'
import { ProductsPage } from '../../pages/products.page'

test.describe('@smoke Products - Inventory', () => {
  test('User can add a product to the cart', async ({ page }) => {
    const productsPage = new ProductsPage(page)

    await productsPage.goto()
    await productsPage.addProductToCart('Sauce Labs Backpack')
    await productsPage.assertCartCount(1)
  })
})
