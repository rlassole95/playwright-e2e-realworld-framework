import { test } from '@playwright/test'
import { ProductsPage } from '../../pages/products.page'
import { CartPage } from '../../pages/cart.page'

test.describe('Cart', () => {
  test('User sees added product in the cart', async ({ page }) => {
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)

    await productsPage.goto()
    await productsPage.addProductToCart('Sauce Labs Backpack')

    await cartPage.goto()
    await cartPage.assertProductInCart('Sauce Labs Backpack')
  })
})
