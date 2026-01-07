import { test, expect } from '@playwright/test';
import { BrowserWindowsPage } from '../../pages/alerts_frame_windows/BrowserWindowsPage.js';
import { browserWindowsTestData } from '../../data/browserWindowsTestData.js';

test.describe('ALerts, Frame & Windows => Test suite', () => {
    let browserWindowsPage;

    test.beforeEach(async ({ page }) => {
        browserWindowsPage = new BrowserWindowsPage(page);
        await browserWindowsPage.navigateTo(browserWindowsTestData.url);
    });

    test('Browser Windows : New Tab', async () => {
        const [newTab] = await browserWindowsPage.clickTabButton();
        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL(browserWindowsTestData.expectedUrl);
    });

    test('Browser Windows : New Window', async () => {
        const [newWindow] = await browserWindowsPage.clickWindowButton();
        await newWindow.waitForLoadState();
        await expect(newWindow).toHaveURL(browserWindowsTestData.expectedUrl);
    });

    test('Browser Windows : New Window Message', async () => {
        const [newWindowMessage] = await browserWindowsPage.clickMessageWindowButton();
        await newWindowMessage.waitForLoadState();
        expect(newWindowMessage).not.toBeNull();
    });
});

