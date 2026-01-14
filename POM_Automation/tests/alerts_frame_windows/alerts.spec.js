import { test, expect } from '@playwright/test';
import { AlertsPage } from '../../pages/alerts_frame_windows/AlertsPage.js';
import { alertsTestData } from '../../data/alertsTestData.js';

test.describe('Alerts => Test Suite', () => {
    let alertsPage;

    test.beforeEach(async ({ page }) => {
        alertsPage = new AlertsPage(page);
        await alertsPage.navigateTo(alertsTestData.url);
    });

    test('Simple Alert', async () => {
        alertsPage.setupDialogHandler('alert', alertsTestData.messages.simpleAlert);
        await alertsPage.clickAlertButton();
    });

    test('Timer Alert', async () => {
        alertsPage.setupDialogHandler('alert', alertsTestData.messages.timerAlert);
        await alertsPage.clickTimerAlertButton();
    });

    test('Confirm Alert', async () => {
        alertsPage.setupDialogHandler('confirm', alertsTestData.messages.confirmAlert);
        await alertsPage.clickConfirmButton();
        await expect(alertsPage.confirmResult).toHaveText(alertsTestData.results.confirmOk);
    });

    test('Prompt Box Alert', async () => {
        alertsPage.setupDialogHandler('prompt', alertsTestData.messages.promptAlert, 'accept', alertsTestData.results.promptName);
        await alertsPage.clickPromptButton();
        await expect(alertsPage.promptResult).toContainText(alertsTestData.results.promptName);
    });

    test('Prompt Box Alert 2 dummy test need to remove after successful execution', async ({page}) => {
        await page.goto('https://demoqa.com/alerts', {waitUntil: 'domcontentloaded'})

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name')
            await dialog.accept('Abdul Qadir')
        })
        
        await page.click('#promtButton')
        await expect(page.locator('#promptResult')).toContainText('Abdul Qadir')
    })
});