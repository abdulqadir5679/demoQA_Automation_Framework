import {test, expect} from '@playwright/test';

test.describe('Test Suite : Tool Tips', () => {
    test('Tool Tips', async ({page}) => {
        await page.goto('https://demoqa.com/tool-tips');

        await page.getByText('Hover me to see').hover();
        await expect(page.locator('#buttonToolTip')).toBeVisible();
        await expect(page.locator('#buttonToolTip')).toHaveText('You hovered over the Button');

        await page.locator('#toolTipTextField').hover();
        await expect(page.locator('#textFieldToolTip')).toBeVisible();
        await expect(page.locator('#textFieldToolTip')).toHaveText('You hovered over the text field');

        await page.getByText('Contrary').hover();
        await expect(page.locator('#contraryTexToolTip')).toBeVisible();
        await expect(page.locator('#contraryTexToolTip')).toHaveText('You hovered over the Contrary');

        await page.getByText('1.10.32').hover();
        await expect(page.locator('#sectionToolTip')).toBeVisible();
        await expect(page.locator('#sectionToolTip')).toHaveText('You hovered over the 1.10.32');
    })
})