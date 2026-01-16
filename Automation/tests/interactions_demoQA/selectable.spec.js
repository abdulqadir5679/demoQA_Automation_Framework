import {test, expect} from '@playwright/test';

test.describe('Test Suite : Selectable', () => { 
    test('Selectable', async ({page}) => {
        await page.goto('https://demoqa.com/selectable', { waitUntil: 'domcontentloaded' });

        //list testing
        await page.getByText('Cras justo odio').click();
        //assertion
        await expect(page.getByText('Cras justo odio')).toHaveClass(/active/);

        //grid testing
        await page.locator('#demo-tab-grid').click();
        await page.getByText('Three').click();
        //assertion
        await expect(page.getByText('Three')).toHaveClass(/active/);


    })
})