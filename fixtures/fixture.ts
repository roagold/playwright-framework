import { test as base } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ApiClient } from '../utils/ApiClient';


type MyFixture = {
    homePage: HomePage
    loginPage: LoginPage
    productsPage: ProductsPage
    api: ApiClient
}

export const test = base.extend<MyFixture>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },

    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },

    productsPage: async({page}, use) => {
        await use(new ProductsPage(page))
    },

    api: async({request}, use) => {
        await use(new ApiClient(request))
    }
})

export { expect } from '@playwright/test'