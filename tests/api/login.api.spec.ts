import { test, expect } from '../../fixtures/fixture'

test('POST login with valid data', async ({ api }) => {
    const response = await api.postForm('/api/verifyLogin',
        {
            email: process.env.USER_EMAIL!,
            password: process.env.USER_PASS!
        }
    )
    expect(response.ok()).toBeTruthy()
    const data = await response.json()
    console.log(data)
})