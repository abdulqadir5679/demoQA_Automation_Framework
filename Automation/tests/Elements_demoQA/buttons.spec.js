import {test, expect} from '@playwright/test'

test.describe('Elements Suite: Buttons Functionality', ()=> {
    test('Button Functionality', async ({page})=> {

        await page.goto('/buttons', { waitUntil: 'domcontentloaded' })

        // double click button 
        await page.getByRole('button', {name: 'Double Click Me', exact: true}).dblclick();
        //assertion
        await expect(page.locator('#doubleClickMessage')).toBeVisible();
        await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');

        
        // right click btn
        await page.getByRole('button', { name: 'Right Click Me', exact: true }).click({button: 'right'});
        //assertion
        await expect(page.locator('#rightClickMessage')).toBeVisible();
        await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

        // Click the "Click Me" button
        await page.getByRole('button', { name: 'Click Me', exact: true }).click();
        // Assert the dynamic click message appears
        await expect(page.locator('#dynamicClickMessage')).toBeVisible();
        await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');

    })
})