import { test, expect } from '@playwright/test';
import { LinksPage } from '../../pages/elements/LinksPage.js';
import { linksTestData } from '../../data/linksTestData.js';

test.describe('Elements Suite: Links Functionality', () => {
    let linksPage;

    test.beforeEach(async ({ page }) => {
        linksPage = new LinksPage(page);
        await linksPage.navigateTo(linksTestData.url);
    });

    test('Links Functionality', async ({ context }) => {
        // Test external links that open in new tabs
        const url1 = await linksPage.waitForNewPageAndClose(context, () => linksPage.clickSimpleLink());
        expect(url1).toBe(linksTestData.expectedUrl);

        const url2 = await linksPage.waitForNewPageAndClose(context, () => linksPage.clickDynamicLink());
        expect(url2).toBe(linksTestData.expectedUrl);

        // Test API call links
        await linksPage.clickCreatedLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.created);

        await linksPage.clickNoContentLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.noContent);

        await linksPage.clickMovedLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.moved);

        await linksPage.clickBadRequestLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.badRequest);

        await linksPage.clickUnauthorizedLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.unauthorized);

        await linksPage.clickForbiddenLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.forbidden);

        await linksPage.clickInvalidUrlLink();
        await expect(linksPage.linkResponse).toHaveText(linksTestData.expectedResponses.notFound);
    });
});