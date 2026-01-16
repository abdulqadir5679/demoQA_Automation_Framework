import { test, expect } from '@playwright/test';


test('Elements Suite: Text_Box', async ({ page }) => {
  await page.goto('/text-box', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  await page.fill('#userName', 'Hamza');
  await page.fill('#userEmail', 'hamza@gmail.com');
  await page.fill('#currentAddress', 'Karachi, Pakistan');
  await page.fill('#permanentAddress', 'Karachi, Pakistan');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#name')).toHaveText('Name:Hamza');
  await expect(page.locator('#email')).toHaveText('Email:hamza@gmail.com');
});
