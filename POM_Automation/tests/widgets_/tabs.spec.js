import { test, expect } from '@playwright/test';
import { TabsPage } from '../../pages/widgets_/TabsPage.js';
import { tabsTestData } from '../../data/tabsTestData.js';

test.describe('Test Suite : Tabs', () => {
    let tabsPage;

    test.beforeEach(async ({ page }) => {
        tabsPage = new TabsPage(page);
        await tabsPage.navigateTo(tabsTestData.url);
    });

    test('Tabs', async () => {
        await tabsPage.clickOriginTab();
        await expect(tabsPage.originTabPane).toBeVisible();
        
        await tabsPage.clickUseTab();
        await expect(tabsPage.useTabPane).toBeVisible();
    });
});