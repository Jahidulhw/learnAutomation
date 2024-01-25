const {Page} = require('playwright');
import { expect } from '@playwright/test';
const addCartPageLocators = require('../locators/addCartPage');

class AddCartPage {
    
    constructor (page) {
        this.page = page;
    }
    
    async addCartPageLink () {
        await expect(this.page.locator('#SidebarContent').getByRole('link', { name: addCartPageLocators.addCartLink })).toBeVisible();
        await this.page.locator('#SidebarContent').getByRole('link', { name: addCartPageLocators.addCartLink}).click();
   }
    async verifyAddCartPage () {
        await expect(this.page.locator('h3')).toContainText('Fish');
        await this.page.getByRole('link', { name: 'FI-SW-01' }).click();
        await expect(this.page.locator('h3')).toContainText('Angelfish');
        await this.page.getByRole('link', { name: 'Add to Cart' }).first().click();
    }


}

module.exports = AddCartPage;
