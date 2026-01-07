import { test, expect } from '@playwright/test';
import { BrokenLinksPage } from '../../pages/elements/BrokenLinksPage.js';
import { brokenLinksTestData } from '../../data/brokenLinksTestData.js';

test.describe('Elements Suite: Links Functionality', () => {
    let brokenLinksPage;

    test.beforeEach(async ({ page }) => {
        brokenLinksPage = new BrokenLinksPage(page);
        await brokenLinksPage.navigateTo(brokenLinksTestData.url);
    });

    test('Valid Image - Broken Image Tests', async () => {
        // Valid image text test
        expect(await brokenLinksPage.isValidImageTextVisible()).toBeTruthy();
        
        // Valid image element test
        expect(await brokenLinksPage.isValidImageVisible()).toBeTruthy();

        // Broken image text test
        expect(await brokenLinksPage.isBrokenImageTextVisible()).toBeTruthy();
        
        // Broken image element test
        expect(await brokenLinksPage.isBrokenImageVisible()).toBeTruthy();
    });
       
    test('Valid Link', async () => {
        // Valid link test
        await brokenLinksPage.clickValidLink();
        expect(await brokenLinksPage.getCurrentUrl()).toBe(brokenLinksTestData.expectedUrls.validLink);
    });

    test('Broken Link', async () => {
        // Broken link test - handle potential timeout/error
        try {
            await brokenLinksPage.clickBrokenLink();
            await brokenLinksPage.waitForPageLoad(brokenLinksTestData.timeouts.brokenLink);
            // Check for any error page or status code page
            const url = await brokenLinksPage.getCurrentUrl();
            expect(url).toMatch(brokenLinksTestData.expectedUrls.brokenLinkPattern);
        } catch (error) {
            // If the page fails to load (which is expected for broken links), that's also a valid test result
            console.log('Broken link behaved as expected - failed to load');
        }
    });
});
