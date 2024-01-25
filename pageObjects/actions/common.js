const{Page} = require('playwright');
const commonLocators = require ('../../pageObjects/locators/common');
import { expect } from '@playwright/test';

class CommonPage {
    
    constructor (page) {
        this.page = page;
    }

    async vistHomePage() {
        await this.page.goto('https://jpetstore.aspectran.com/catalog/');
    }
    
    async waitForSidebarContent(){
        const sidebarContent = await this.page.locator(commonLocators.sidebarContent);
        sidebarContent.waitFor();
        await expect(sidebarContent).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
    }

    async oneLetterSearchUp () {
        await this.page.getByPlaceholder('Product Search').click();
        await this.page.getByPlaceholder('Product Search').fill('c');
        await this.page.getByPlaceholder('Product Search').press('Enter');
    }


    async productDoesNotExistPage () {
        await this.page.getByPlaceholder('Product Search').click();
        await this.page.getByPlaceholder('Product Search').fill('kdsv');
        await this.page.getByRole('button', { name: 'Search' }).click();
    }
    async returnMainMenuPage () {
        await this.page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
        await expect(this.page.locator('h3')).toContainText('Fish');
        await this.page.getByRole('link', { name: 'Return to Main Menu' }).click();

    } 
}

module.exports = CommonPage;
