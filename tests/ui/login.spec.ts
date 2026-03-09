import { test, expect } from '../../fixtures/fixture'
import {users} from '../../test-data/testData'

test.beforeEach('go to login page', async ({ loginPage }) => {
    await loginPage.goto()
})

test('login with valid user', async ({ loginPage }) => {
    await loginPage.login(users.validUser.email, users.validUser.password)
    await expect(loginPage.navBar.loggedInIcon).toBeVisible()
})

test('login with invalid user', async ({ loginPage }) => {
    await loginPage.login(users.invalidUser.email, users.invalidUser.password)
    await expect(loginPage.loginError).toHaveText('Your email or password is incorrect!')
})