const {Page} = require('playwright');
import { expect } from '@playwright/test';
const petFavoriteListPage = require('../locators/petFavoriteListPage');

class petFavoriteListPage {
    
    constructor (page) {
        this.page = page;
    }

    async listPageLink () {  
        
    await this.listpage.getByRole('link', { name: 'Sign In' }).click();
    await expect(this.page.locator('#Signon')).toContainText('Please enter your username and password.');
    await this.page.getByLabel('Username:').click();
    await this.page.getByLabel('Username:').fill('Tommy32');
    await this.page.getByLabel('Password:').click();
    await this.page.getByLabel('Password:').fill('Apples');
    await this.page.getByRole('button', { name: 'Login' }).click();
    }
    
    async listAddingToCartPage () {
    await expect(this.page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
    await this.page.getByRole('link', { name: 'Rattlesnake' }).click();
    await expect(this.page.locator('h3')).toContainText('Rattlesnake');
    await this.page.getByRole('link', { name: 'Add to Cart' }).first().click();
}
}