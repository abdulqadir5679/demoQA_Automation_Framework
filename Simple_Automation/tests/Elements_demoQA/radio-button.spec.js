import { test, expect } from "playwright/test";

test.describe('Elements Suite: Radio Button Tests', ()=>{
    test('Radio Button Test', async ({page})=>{
        await page.goto('/radio-button');

        await page.locator('label[for="yesRadio"]').check();;
        await expect(page.locator('#yesRadio')).toBeChecked();

        await page.locator('label[for="impressiveRadio"]').check();
        await expect(page.locator('#impressiveRadio')).toBeChecked();
    })
})