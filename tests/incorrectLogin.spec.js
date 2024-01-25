import { test } from '@playwright/test';
const incorrectLoginPage = require('../pageObjects/actions/incorrectLoginPage');
const CommonPage = require('../pageObjects/actions/common');
test('Verify user entering wrong login', async ({ page }) => {
  const IncorrectLoginPage = new incorrectLoginPage(page);
  const commonPage = new CommonPage(page);
  await commonPage.vistHomePage();
  await commonPage.waitForSidebarContent(); 
  await IncorrectLoginPage.verifyIncorrectLogin();

  
});