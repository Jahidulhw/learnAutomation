const{Page} = require('playwright');
const changeProfileInfoPage = require ('../locators/changeProfileInfoPage');
import { expect } from '@playwright/test';

class ChangeProfileInfoPage {
    
    constructor (page) {
        this.page = page;
    }
    async signLinkPage(){
    await this.page.getByRole('link', { name: 'Sign In' }).click();
    await expect(this.page.locator(changeProfileInfoPage.signOn)).toContainText('Please enter your username and password.');
    }
    async profileInfoPageSign(){
    await this.page.getByLabel('Username:').click();
    await this.page.getByLabel('Username:').fill('Tommy32');
    await this.page.getByLabel('Password:').click();
    await this.page.getByLabel('Password:').fill('Apples');
    await this.page.getByRole('button', { name: 'Login' }).click();
    }
    
    async profileInfoPageMenu(){
    await expect(this.page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
    await this.page.getByRole('link', { name: 'My Account' }).click();
    }
    
    async profileInfoMainPage(){
    await expect(this.page.locator(changeProfileInfoPage.centerForm)).toContainText('Profile Information');
    await this.page.locator('select[name="languagePreference"]').selectOption('japanese');
    await this.page.locator('select[name="favouriteCategoryId"]').selectOption('REPTILES');
    await this.page.locator('input[name="listOption"]').check();
    await this.page.locator('input[name="bannerOption"]').check();
    await this.page.getByRole('button', { name: 'Save Account Information' }).click();
    }
   

}

module.exports = ChangeProfileInfoPage;
