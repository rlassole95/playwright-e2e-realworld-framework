import { test } from '@playwright/test'
import { ProductsPage } from '../../pages/products.page'
import { CartPage } from '../../pages/cart.page'
import { CheckoutPage } from '../../pages/checkout.page'

test.describe('@smoke @regression Checkout - Happy Path', () => {
  test('User can complete checkout successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const checkoutPage = new CheckoutPage(page)

    await productsPage.goto()
    await productsPage.addProductToCart('Sauce Labs Backpack')

    await cartPage.goto()
    await cartPage.goToCheckout()

    await checkoutPage.fillCheckoutInformation(
      'John',
      'Doe',
      '12345'
    )

    await checkoutPage.completeCheckout()
    await checkoutPage.assertCheckoutCompleted()
  })
})
