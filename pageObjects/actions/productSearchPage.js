const{Page} = require('playwright');
const productSearchPage = require ('../locators/productSearchPage');
import { expect } from '@playwright/test';

class ProductSearchPage {
    
    constructor (page) {
        this.page = page;
    }
   
    async clickOnProductSearch () {
        await this.page.getByPlaceholder('Product Search').click();
        await this.page.getByPlaceholder('Product Search').fill('fish');
        await this.page.getByRole('button', { name: 'Search' }).click();
    }

}

module.exports = ProductSearchPage;