import {test, expect} from '@playwright/test'

test.describe('Test suite : Slider', () => {
    test('Slider', async ({page}) => {
        await page.goto('https://demoqa.com/slider');

        await page.locator('.range-slider').fill('33');

        await expect(page.locator('#sliderValue')).toHaveValue('33');
    })
})