import {test, expect} from '@playwright/test';

test.describe('Elements Suite => Form', ()=> {
    test('Student Registration Form', async ({page})=> {
        await page.goto('/automation-practice-form', {waitUntil: 'domcontentloaded'});

        await page.fill('#firstName', 'Abdul');
        await page.fill('#lastName', 'Qadir');
        await page.fill('#userEmail', 'aq@gmail.com');
        // await page.locator('.custom-control-label').isChecked();
        await page.locator('.custom-control.custom-radio.custom-control-inline').check();


    })
})