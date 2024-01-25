import { test, expect } from '@playwright/test';

test('Verify if user can check order history', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#Signon')).toContainText('Please enter your username and password.');
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Tommy32');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('Pancakes');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#SidebarContent')).toContainText('Fish Saltwater, Freshwater Dogs Various Breeds Cats Various Breeds, Exotic Varieties Reptiles Lizards, Turtles, Snakes Birds Exotic Varieties');
  await page.getByRole('link', { name: 'My Orders' }).click();
});