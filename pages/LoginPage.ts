import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly emailInput: Locator
    readonly passInput: Locator
    readonly loginButton: Locator
    readonly loginError: Locator

    constructor(page: Page) {
        super(page)
        this.emailInput = page.locator('[data-qa="login-email"]')
        this.passInput = page.locator('[data-qa="login-password"]')
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.loginError = page.locator('.login-form p');
    }

    async goto(){
        await this.navigate('/login')
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passInput.fill(password)
        await this.loginButton.click()
    }
}