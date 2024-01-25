
const{Page} = require('playwright');
const incorrectLoginPage = require ('../../pageObjects/locators/incorrectLoginPage');
import { expect } from '@playwright/test';

class IncorrectLoginPage {
    
    constructor (page) {
        this.page = page;
    }

    async verifyIncorrectLogin() {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page.locator(incorrectLoginPage.signOn)).toContainText('Please enter your username and password.');
        await this.page.getByLabel('Username:').click();
        await this.page.getByLabel('Username:').fill('tommydoe');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.locator(incorrectLoginPage.signOn)).toContainText('Please enter your username and password.');
    }
   







}

module.exports = IncorrectLoginPage;