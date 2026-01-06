import {test, expect} from '@playwright/test';

test.describe('Elements Suite => Form', ()=> {
    test('Student Registration Form', async ({page})=> {
        await page.goto('/automation-practice-form', {waitUntil: 'domcontentloaded'});

        await page.fill('#firstName', 'Abdul');
        await page.fill('#lastName', 'Qadir');
        await page.fill('#userEmail', 'aq@gmail.com');
        await page.locator('label[for="gender-radio-1"]').check();
        await page.fill('#userNumber', '1234567890');
        
        await page.fill('#currentAddress', 'Karachi, Pakistan');

        // Select state
        await page.locator('#state').click();
        await page.locator('#react-select-3-option-0').click();

        // Select city
        await page.locator('#city').click();
        await page.locator('#react-select-4-option-0').click();

        await page.click('#submit');

        // Assert success message
        await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
    })
})