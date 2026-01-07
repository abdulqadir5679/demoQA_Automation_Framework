import { test, expect } from '@playwright/test';
import { AccordianPage } from '../../pages/widgets_/AccordianPage.js';
import { accordianTestData } from '../../data/accordianTestData.js';

test.describe('Test Suite : Accordian', () => {
    let accordianPage;

    test.beforeEach(async ({ page }) => {
        accordianPage = new AccordianPage(page);
        await accordianPage.navigateTo(accordianTestData.url);
    });

    test('test', async () => {
        await accordianPage.clickLoremIpsumHeader();
        await expect(accordianPage.loremIpsumContent).toBeVisible();

        await accordianPage.clickWhereFromHeader();
        await expect(accordianPage.whereFromContent).toBeVisible();

        await accordianPage.clickWhyUseHeader();
        await expect(accordianPage.whyUseContent).toBeVisible();
    });
});