import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    readonly sortText: Locator;
    readonly filterText: Locator;
    readonly sortDropdown: Locator;
    readonly homeTab: Locator;
    readonly categoryTab: Locator;

    private getProduct(productName: string): Locator {
        return this.homePage.getByText(productName);
    }

    constructor(private homePage: Page){
        this.sortText = homePage.getByText('Sort');    
        this.filterText = homePage.getByRole('heading',{name: 'Filters'});
        this.sortDropdown = homePage.getByTestId('sort');
        this.homeTab = homePage.getByRole('link', { name: 'Home' });
        this.categoryTab = homePage.getByRole('link', { name: 'Categories' });    
    }

    async verifyProductVisible(...products: string[]) {
        for (const product of products) {
            await expect(this.getProduct(product)).toBeVisible();
        }
    }

    async navigateHome(){
        await this.homeTab.click();
        await expect(this.sortText).toBeVisible();
    }

    async sortBy(sort:string){
        await this.filterText.scrollIntoViewIfNeeded();
        await this.sortDropdown.selectOption(sort);
    }

    async verifyAscending(){
        await this.verifyProductVisible('Adjustable Wrench','Angled Spanner','Belt Sander');
    }

    async verifyDescending(){
        await this.verifyProductVisible('Wood Saw','Wood Carving Chisels','Washers');
    }    


}
