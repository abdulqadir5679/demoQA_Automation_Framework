import { test, expect } from '@playwright/test';
import { SliderPage } from '../../pages/widgets_/SliderPage.js';
import { sliderTestData } from '../../data/sliderTestData.js';

test.describe('Test suite : Slider', () => {
    let sliderPage;

    test.beforeEach(async ({ page }) => {
        sliderPage = new SliderPage(page);
        await sliderPage.navigateTo(sliderTestData.url);
    });

    test('Slider', async () => {
        await sliderPage.setSliderValue(sliderTestData.sliderValue);
        await expect(sliderPage.sliderValue).toHaveValue(sliderTestData.sliderValue);
    });
});