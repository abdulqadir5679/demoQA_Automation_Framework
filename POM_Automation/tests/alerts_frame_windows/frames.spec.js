import { test, expect } from '@playwright/test';
import { FramesPage } from '../../pages/alerts_frame_windows/FramesPage.js';
import { framesTestData } from '../../data/framesTestData.js';

test.describe('Test suite : Frames', () => {
    let framesPage;

    test.beforeEach(async ({ page }) => {
        framesPage = new FramesPage(page);
        await framesPage.navigateTo(framesTestData.url);
    });

    test('Frames', async () => {
        // Assert frame1 heading is visible and has correct text
        await expect(framesPage.frame1Heading).toBeVisible();
        const frame1Text = await framesPage.getFrame1HeadingText();
        expect(frame1Text).toBe(framesTestData.expectedHeadingText);
        await framesPage.clickFrame1Heading();

        // Assert frame2 heading is visible and has correct text
        await expect(framesPage.frame2Heading).toBeVisible();
        const frame2Text = await framesPage.getFrame2HeadingText();
        expect(frame2Text).toBe(framesTestData.expectedHeadingText);
        await framesPage.clickFrame2Heading();
    });
});