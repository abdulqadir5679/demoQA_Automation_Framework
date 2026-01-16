import {test, expect} from '@playwright/test';

test.describe('ALerts, Frame & Windows => Test suite', () => {
    test('Browser Windows : New Tab', async ({page}) => {
        await page.goto('/browser-windows', {waitUntil: 'domcontentloaded'});

        const [newTab] = await Promise.all([
            page.context().waitForEvent('page'),
            page.locator('#tabButton').click()
        ])

        await newTab.waitForLoadState();

        await expect(newTab).toHaveURL('/sample');
    });

    test('Browser Windows : New Window', async ({page}) => {
        await page.goto('/browser-windows', {waitUntil: 'domcontentloaded'});
        const [newWindow] = await Promise.all([
            page.context().waitForEvent('page'),
            page.locator('#windowButton').click()
        ])
        await newWindow.waitForLoadState();
        await expect(newWindow).toHaveURL('/sample');
    });

    test('Browser Windows : New Window Message', async ({page}) => {
        await page.goto('/browser-windows', {waitUntil: 'domcontentloaded'});
        const [newWindowMessage] = await Promise.all([
            page.context().waitForEvent('page'),
            page.locator('#messageWindowButton').click()
        ])
        await newWindowMessage.waitForLoadState();
        await expect(newWindowMessage).not.toBeNull();
    });
});

