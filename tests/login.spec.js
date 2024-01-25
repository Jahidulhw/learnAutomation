import { test, expect } from '@playwright/test';
const loginPage = require('../pageObjects/actions/loginPage');
const CommonPage = require('../pageObjects/actions/common');
test('Verify a user is able to login', async ({ page }) => {
  const LoginPage = new loginPage(page);
  const commonPage = new CommonPage(page);
  
  await LoginPage.verifyLoginPage();
  
  

});