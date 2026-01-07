import { test, expect } from '@playwright/test';
import { MenuPage } from '../../pages/widgets_/MenuPage.js';
import { menuTestData } from '../../data/menuTestData.js';

test.describe('Test suite : Menu', () => {
    let menuPage;

    test.beforeEach(async ({ page }) => {
        menuPage = new MenuPage(page);
        await menuPage.navigateTo(menuTestData.url);
    });

    test('Menu', async () => {
        await menuPage.hoverMainItem1();
        await menuPage.hoverMainItem3();
        await menuPage.hoverMainItem2();
        await menuPage.hoverSubSubList();
    });
});