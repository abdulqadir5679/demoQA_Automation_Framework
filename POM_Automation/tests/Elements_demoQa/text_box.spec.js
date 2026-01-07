import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../../pages/elements/TextBoxPage.js';
import { textBoxTestData } from '../../data/textBoxTestData.js';

test.describe('Elements Suite: Text_Box', () => {
    let textBoxPage;

    test.beforeEach(async ({ page }) => {
        textBoxPage = new TextBoxPage(page);
        await textBoxPage.navigateTo(textBoxTestData.url);
    });

    test('Text Box Test', async () => {
        // Fill form fields
        await textBoxPage.fillUserName(textBoxTestData.testData.userName);
        await textBoxPage.fillUserEmail(textBoxTestData.testData.userEmail);
        await textBoxPage.fillCurrentAddress(textBoxTestData.testData.currentAddress);
        await textBoxPage.fillPermanentAddress(textBoxTestData.testData.permanentAddress);

        // Submit form
        await textBoxPage.clickSubmit();

        // Verify output
        await expect(textBoxPage.nameOutput).toHaveText(textBoxTestData.expectedOutput.name);
        await expect(textBoxPage.emailOutput).toHaveText(textBoxTestData.expectedOutput.email);
    });
});
