import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
   readonly logo: Locator
    readonly loginItem: Locator
    
    constructor(page: Page) {
        super(page)
        this.logo = page.getByAltText('Website for automation practice')
        this.loginItem = this.navBar.getItem(' Signup / Login')
    }

    async goto(){
        await this.navigate('/')
    }
}