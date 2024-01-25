const{Page} = require('playwright');
const changeAccountInfoPage = require ('../locators/changeAccountInfoPage');
import { expect } from '@playwright/test';

class ChangeAccountInfoPage {
    
    constructor (page) {
        this.page = page;
    }
   
      async accountLoginPage() {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page.locator(changeAccountInfoPage.signOn)).toContainText('Please enter your username and password.');
        await this.page.getByLabel('Username:').click();
        await this.page.getByLabel('Username:').fill('Tommy32');
        await this.page.getByLabel('Password:').click();
        await this.page.getByLabel('Password:').fill('Apples');
        await this.page.getByRole('button', { name: 'Login' }).click();
      }
        async accountLoginLink() {
        
        await expect(this.page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
        await this.page.getByRole('link', { name: 'My Account' }).click();
        }
        async changingAccountInfoPage() {
        await expect(this.page.locator(changeAccountInfoPage.centerForm)).toContainText('Account Information');
        await this.page.locator('input[name="firstName"]').click();
        await this.page.locator('input[name="firstName"]').fill('John');
        await this.page.locator('input[name="lastName"]').click();
        await this.page.locator('input[name="lastName"]').fill('Doe');
        await this.page.locator('input[name="email"]').click();
        await this.page.locator('input[name="email"]').fill('JohnDoe@gmail.com');
        await this.page.getByRole('button', { name: 'Save Account Information' }).click();
      }

}

module.exports = ChangeAccountInfoPage;
