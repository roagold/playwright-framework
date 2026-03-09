import { test, expect } from '@playwright/test'
import { ApiClient } from "../../utils/ApiClient";

let api: ApiClient

test.beforeEach('init apiClient', async({request}) => {
    api = new ApiClient(request)
})

test('GET list of products', async ({}) => {
    const response = await api.get('/api/productsList')
    expect(response.ok()).toBe(true)
    const data = await response.json()
    expect(data.products.length).toBeGreaterThan(0)
})

test('POST search for product', async ({}) => {
    const response = await api.post('/api/searchProduct', { search_product: 'dress' })
    expect(response.ok()).toBe(true)
    const data = await response.json()
    expect(data.products.length).toBeGreaterThan(0)
})
