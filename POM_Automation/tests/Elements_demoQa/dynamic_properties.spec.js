import { test, expect } from '@playwright/test';
import { DynamicPropertiesPage } from '../../pages/elements/DynamicPropertiesPage.js';
import { dynamicPropertiesTestData } from '../../data/dynamicPropertiesTestData.js';

test.describe('Elements Suite: Dynamic Properties Functionality', () => {
    let dynamicPropertiesPage;

    test.beforeEach(async ({ page }) => {
        dynamicPropertiesPage = new DynamicPropertiesPage(page);
        await dynamicPropertiesPage.navigateTo(dynamicPropertiesTestData.url);
    });

    test('Dynamic Properties Functionality', async () => {
        // Initially the "Enable After" button should be disabled
        await expect(dynamicPropertiesPage.enableAfterButton).toBeDisabled();
        
        // Wait for the button to become enabled (after 5 seconds)
        await dynamicPropertiesPage.waitForEnableAfterButtonToBeEnabled(dynamicPropertiesTestData.timeouts.default);
        
        // Color change button should change color after some time
        await dynamicPropertiesPage.waitForColorChange(dynamicPropertiesTestData.expectedColor, dynamicPropertiesTestData.timeouts.default);
        
        // Visible after button should be visible
        expect(await dynamicPropertiesPage.isVisibleAfterButtonVisible()).toBeTruthy();
    });
});