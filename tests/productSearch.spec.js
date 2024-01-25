import { test } from '@playwright/test';
const productSearchPage = require('../pageObjects/actions/productSearchPage')
const CommonPage = require('../pageObjects/actions/common');


test('Verify if user can search up a item', async ({ page }) => {
  const ProductSearchPage = new productSearchPage(page);
  const commonPage = new CommonPage(page);
  await commonPage.vistHomePage();
  await commonPage.waitForSidebarContent(); 
  await ProductSearchPage.clickOnProductSearch();
  
});