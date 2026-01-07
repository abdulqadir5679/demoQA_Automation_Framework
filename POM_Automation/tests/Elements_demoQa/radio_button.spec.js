import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../../pages/elements/RadioButtonPage.js';
import { radioButtonTestData } from '../../data/radioButtonTestData.js';

test.describe('Elements Suite: Radio Button Tests', () => {
    let radioButtonPage;

    test.beforeEach(async ({ page }) => {
        radioButtonPage = new RadioButtonPage(page);
        await radioButtonPage.navigateTo(radioButtonTestData.url);
    });

    test('Radio Button Test', async () => {
        // Select Yes radio button
        await radioButtonPage.selectYesRadio();
        expect(await radioButtonPage.isYesRadioChecked()).toBeTruthy();

        // Select Impressive radio button
        await radioButtonPage.selectImpressiveRadio();
        expect(await radioButtonPage.isImpressiveRadioChecked()).toBeTruthy();

        // Verify No radio button is disabled
        expect(await radioButtonPage.isNoRadioDisabled()).toBeTruthy();
    });
});