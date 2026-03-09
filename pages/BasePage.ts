import { Page } from '@playwright/test'
import { NavBar } from './components/NavBar.component';

export abstract class BasePage {
    protected page: Page;
    readonly navBar: NavBar

    constructor(page: Page) {
        this.page = page
        this.navBar = new NavBar(this.page)
    }

    async navigate(path: string) {
        await this.page.goto(path)
        await this.page.waitForLoadState('networkidle')
    }
}
