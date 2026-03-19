import { test, expect } from '../../fixtures/fixture'
import { newUser } from '../../test-data/testData';

test('create new user', async ({api}) => {
    const response = await api.postForm('/api/createAccount', { ...newUser })
    const data = await response.json()
    expect(data.responseCode).toBe(201)
})