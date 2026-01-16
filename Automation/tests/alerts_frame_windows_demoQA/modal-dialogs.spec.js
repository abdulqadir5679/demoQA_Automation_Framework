import {test, expect} from '@playwright/test';

test.describe('Test suite : Modal Dialogs', () => {
    test('Modal Dialogs', async ({page}) => {
        await page.goto('modal-dialogs');

        await page.click('#showSmallModal');
        // assertion
        await expect(page.locator('#example-modal-sizes-title-sm')).toHaveText('Small Modal');
        await page.click('#closeSmallModal');

        await page.click('#showLargeModal');
        //assertion
        await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Large Modal');
        await page.click('#closeLargeModal');

    })
})