import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
    readonly itemList: Locator
    readonly searchInput: Locator
    readonly searchButton: Locator
    readonly itemListTitle: Locator

    constructor(page: Page){
        super(page)
        this.itemList = this.page.locator('.features_items .col-sm-4');
        this.searchInput = this.page.locator('#search_product')
        this.searchButton = this.page.locator('#submit_search')
        this.itemListTitle = this.page.locator('.features_items .title')
    }

    async goto() {
        await this.navigate('/products')
    }

    async searchProduct(name: string) {
        await this.searchInput.fill(name)
        await this.searchButton.click()
    }
}