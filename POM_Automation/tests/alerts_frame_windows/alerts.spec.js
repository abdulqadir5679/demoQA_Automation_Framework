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

});