const {Page} = require('playwright');
import { expect } from '@playwright/test';
const signOutPageLocators = require('../locators/signOutPage');

class SignOutPage {
    
    constructor (page) {
        this.page = page;
    }
    
    async verifySignOutPage () {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page.locator('#Signon')).toContainText('Please enter your username and password.');
        await this.page.getByLabel('Username:').click();
        await this.page.getByLabel('Username:').fill('Tommy32');
        await this.page.getByLabel('Password:').click();
        await this.page.getByLabel('Password:').fill('Apples');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
        await this.page.getByRole('link', { name: 'Sign Out' }).click();


}
}

module.exports = SignOutPage;