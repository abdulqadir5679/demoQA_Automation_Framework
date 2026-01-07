import { test, expect } from '@playwright/test';
import { ModalDialogsPage } from '../../pages/alerts_frame_windows/ModalDialogsPage.js';
import { modalDialogsTestData } from '../../data/modalDialogsTestData.js';

test.describe('Test suite : Modal Dialogs', () => {
    let modalDialogsPage;

    test.beforeEach(async ({ page }) => {
        modalDialogsPage = new ModalDialogsPage(page);
        await modalDialogsPage.navigateTo(modalDialogsTestData.url);
    });

    test('Modal Dialogs', async () => {
        await modalDialogsPage.openSmallModal();
        await expect(modalDialogsPage.smallModalTitle).toHaveText(modalDialogsTestData.expectedTitles.smallModal);
        await modalDialogsPage.closeSmallModal();

        await modalDialogsPage.openLargeModal();
        await expect(modalDialogsPage.largeModalTitle).toHaveText(modalDialogsTestData.expectedTitles.largeModal);
        await modalDialogsPage.closeLargeModal();
    });
});