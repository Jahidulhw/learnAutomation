import { test, expect } from '@playwright/test';
const CommonPage = require ('../pageObjects/actions/common');
const AddCartPage = require ('../pageObjects/actions/addCartPage');
const SignOutPage = require ('../pageObjects/actions/signOutPage');
const ChangeAccountInfoPage = require ('../pageObjects/actions/changeAccountInfoPage');
const ChangeProfileInfoPage = require ('../pageObjects/actions/changeProfileInfoPage');

let commonPage;
let addCartPage;
let signOutPage;
let changeAccountInfoPage;
let changeProfileInfoPage;


test.describe('pet website for pet owners tests', () => {

  test.beforeEach(async ({page}) =>  {
     commonPage = new CommonPage(page);
    await commonPage.vistHomePage();
    await commonPage.waitForSidebarContent();
  });

test('Verify if user can add to cart', async ({ page }) => {
  addCartPage = new AddCartPage(page);
  await addCartPage.addCartPageLink();
  await addCartPage.verifyAddCartPage();

  
});

test('Verify a user can search up product using one letter', async ({ page }) => {
 
  await commonPage.oneLetterSearchUp();


});

test('Verify a user can return to main menu', async ({ page }) => {
  await commonPage.returnMainMenuPage();
  
});

test('Verify if a user can attempt search for a product that does not exist', async ({ page }) => {
  
  await commonPage.productDoesNotExistPage();
});

test('Verify if a user can sign out', async ({ page }) => {
  
  signOutPage = new SignOutPage(page);
  await signOutPage.verifySignOutPage();
});


test('Verify if a user can change account information', async ({ page }) => {
  changeAccountInfoPage = new ChangeAccountInfoPage(page);
  await changeAccountInfoPage.accountLoginPage();
   await changeAccountInfoPage.accountLoginLink();
   await changeAccountInfoPage.changingAccountInfoPage();
  
});


test('Verify if a user can change profile information', async ({ page }) => {
  changeProfileInfoPage = new ChangeProfileInfoPage(page);
   await changeProfileInfoPage.signLinkPage();
   await changeProfileInfoPage.profileInfoPageSign();
   await changeProfileInfoPage.profileInfoPageMenu();
   await changeProfileInfoPage.profileInfoMainPage();
   
  
});


test('Verify if a user can add to cart by pet favorite list', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Tommy32');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Apples');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByRole('link', { name: 'Rattlesnake' }).click();
  await expect(page.locator('h3')).toContainText('Rattlesnake');
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
});

test('Verify if a user can return to product menu', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
  await expect(page.locator('h3')).toContainText('Fish');
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await expect(page.locator('h3')).toContainText('Angelfish');
  await page.getByRole('link', { name: 'Return to FISH' }).click();
});

test('Verify if user can remove cart', async ({ page }) => {
    await page.goto('https://jpetstore.aspectran.com/catalog/');
    await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
    await page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
    await expect(page.locator('h3')).toContainText('Fish');
    await page.getByRole('link', { name: 'FI-SW-01' }).click();
    await expect(page.locator('h3')).toContainText('Angelfish');
    await page.getByRole('link', { name: 'Add to Cart' }).first().click();
    await expect(page.locator('h3')).toContainText('Shopping Cart');
    await page.getByRole('link', { name: 'Remove', exact: true }).click();
  });


});


