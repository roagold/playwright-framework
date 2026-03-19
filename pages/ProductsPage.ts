import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

interface Product {
    name: string;
    price: string;
}

export class ProductsPage extends BasePage {
    readonly itemListContainer: Locator
    readonly itemList: Locator
    readonly searchInput: Locator
    readonly searchButton: Locator
    readonly itemListTitle: Locator
    readonly addedModalPopup: Locator
    readonly continueShoppingButton: Locator

    constructor(page: Page) {
        super(page)
        this.itemListContainer = this.page.locator('.features_items')
        this.itemList = this.itemListContainer.locator('.col-sm-4');
        this.searchInput = this.page.locator('#search_product')
        this.searchButton = this.page.locator('#submit_search')
        this.itemListTitle = this.page.locator('.features_items .title')
        this.addedModalPopup = this.page.locator('#cartModal')
        this.continueShoppingButton = this.addedModalPopup.getByRole('button', { name: /continue shopping/i })
    }

    async goto() {
        await this.navigate('/products')
    }

    async searchProduct(name: string) {
        await this.searchInput.fill(name)
        await this.searchButton.click()
    }

    async getProductCount(): Promise<number> {
        return await this.itemList.count()
    }

    async openProductByName(productName: string): Promise<void> {
        const product = this.itemList.filter({ hasText: productName })
        await product.getByRole('link', { name: /view product/i }).click()
    }

    async addProductToCartByName(productName: string): Promise<void> {
        const product = this.itemList.filter({ hasText: productName })
        await product.getByRole('link', { name: /add to cart/i }).click()
        await this.continueShoppingButton.click()
    }

    async getAllProducts(): Promise<Product[]> {
        const count = await this.itemList.count()
        const products: Product[] = []

        for(let i = 0; i < count; i++) {
            const name = await this.itemList.nth(i).locator('.productinfo p').innerText()
            const price = await this.itemList.nth(i).locator('.productinfo h2').innerText()

            products.push({name, price})
        }
        
        return products
    }
}