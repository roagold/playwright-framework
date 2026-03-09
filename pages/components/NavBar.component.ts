import { Page, Locator } from "@playwright/test";

export class NavBar {
    readonly page: Page
   readonly navBarContainer: Locator
   readonly loggedInIcon: Locator

    constructor(page: Page) {
        this.page = page
        this.navBarContainer = this.navBarContainer = page.locator('.navbar-nav')
        this.loggedInIcon = this.navBarContainer.locator('.fa-user')
    }

    getItem(itemName: string): Locator {
        return this.navBarContainer.locator('li a').filter({hasText: itemName})
    }
}