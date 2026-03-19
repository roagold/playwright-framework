import { test, expect } from '../../fixtures/fixture'

test.describe('api tests for product page', () => {
    test('GET list of products', async ({ api }) => {
        const response = await api.get('/api/productsList')
        expect(response.ok()).toBe(true)
        const data = await response.json()
        expect(data.products.length).toBeGreaterThan(0)
    })
    
    test('POST search for product', async ({api}) => {
        const response = await api.postForm('/api/searchProduct', { search_product: 'dress' })
        expect(response.ok()).toBe(true)
        const data = await response.json()
        expect(data.products.length).toBeGreaterThan(0)
    })
})



