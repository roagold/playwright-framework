import { test, expect } from '../../fixtures/fixture'

test.beforeEach('go to products page', async ({ productsPage }) => {
    await productsPage.goto()
})

test('check that list of products is visible', async ({ productsPage }) => {
    await expect(productsPage.itemList).toBeVisible
})

test('search for product', async ({ productsPage }) => {
    await productsPage.searchProduct('dress')
    const resultCount = await productsPage.itemList.count()
    expect(resultCount).toBeGreaterThan(0)
    await expect(productsPage.itemListTitle).toHaveText('Searched Products')

})