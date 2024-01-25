const {Page} = require('playwright');
import { expect } from '@playwright/test';
const loginPage = require('../locators/loginPage');

class LoginPage {
    
    constructor (page) {
        this.page = page;
    }
    
    async verifyLoginPage () {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page.locator('#Signon')).toContainText('Please enter your username and password.');
        await this.page.getByLabel('Username:').click();
        await this.page.getByLabel('Username:').fill('Tommy32');
        await this.page.getByLabel('Password:').click();
        await this.page.getByLabel('Password:').fill('Apples');
        await this.page.getByRole('button', { name: 'Login' }).click();
      };
    
   

}

module.exports = LoginPage;