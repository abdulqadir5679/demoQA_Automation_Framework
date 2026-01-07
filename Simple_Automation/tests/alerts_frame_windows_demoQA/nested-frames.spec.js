import {test, expect} from '@playwright/test';

test.describe('Test suite : Nested Frames', () => {
    test('Nested Frames', async ({page}) => {
        await page.goto('https://demoqa.com/nestedframes', {waitUntil: 'domcontentloaded'});

        // Verify parent frame content
        await expect(page.frameLocator('#frame1').getByText('Parent frame')).toBeVisible();

        // Verify child frame content
        await expect(page.frameLocator('#frame1').frameLocator('iframe').getByText('Child Iframe')).toBeVisible();
    });
});