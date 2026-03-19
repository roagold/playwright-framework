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


/*
Задача №1
Контекст: automationexercise.com, сторінка Products.
Завдання: напиши тест який:

Відкриває сторінку /products
Перевіряє що на сторінці є мінімум 1 продукт
Бере назву першого продукту
Шукає цей продукт через пошук
Перевіряє що в результатах є продукт з такою назвою
*/

test('search for product ', async({ page }) => {
    await page.goto('automationexercise.com/products')
    const allProducts = await page.locator('.features_items .product-image-wrapper').all()
    expect(allProducts.length).toBeGreaterThan(0)
    const firstProduct = await page.locator('.features_items').first()
    const productName = await firstProduct.locator('p').textContent()
    await page.locator('#search_product').fill(productName!)
    await page.locator('#submit_search').click()
    await expect(allProducts.length).toBe(1)

})