import { test, expect } from '@playwright/test';
import { FormApplicationPage } from '../../pages/forms/FormApplicationPage.js';
import { formApplicationTestData } from '../../data/formApplicationTestData.js';

test.describe('Elements Suite => Form', () => {
    let formApplicationPage;

    test.beforeEach(async ({ page }) => {
        formApplicationPage = new FormApplicationPage(page);
        await formApplicationPage.navigateTo(formApplicationTestData.url);
    });

    test('Student Registration Form', async () => {
        // Fill personal information
        await formApplicationPage.fillPersonalInfo(formApplicationTestData.userData);
        
        // Select gender
        await formApplicationPage.selectGender();
        
        // Select state and city
        await formApplicationPage.selectState();
        await formApplicationPage.selectCity();

        // Submit form
        await formApplicationPage.submitForm();

        // Verify success message
        expect(await formApplicationPage.isSuccessMessageVisible()).toBeTruthy();
    });
});