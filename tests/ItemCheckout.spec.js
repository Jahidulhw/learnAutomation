import { test, expect } from '@playwright/test';

test('Verify user able to check out 1 quantity', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.locator('#SidebarContent').getByRole('link', { name: 'Fish' }).click();
  await expect(page.locator('h3')).toContainText('Fish');
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await expect(page.locator('h3')).toContainText('Angelfish');
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await expect(page.locator('h3')).toContainText('Shopping Cart');
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Tommy32');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Pancakes');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#CenterForm')).toContainText('Payment Details');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('#CenterForm')).toContainText('Order');
  await page.getByRole('button', { name: 'Confirm' }).click();
});

