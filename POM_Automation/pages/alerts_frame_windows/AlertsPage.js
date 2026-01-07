import { BasePage } from '../BasePage.js';
import { expect } from '@playwright/test';

export class AlertsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Button locators
        this.alertButton = page.locator('#alertButton');
        this.timerAlertButton = page.locator('#timerAlertButton');
        this.confirmButton = page.locator('#confirmButton');
        this.promptButton = page.locator('#promtButton');
        
        // Result locators
        this.confirmResult = page.locator('#confirmResult');
        this.promptResult = page.locator('#promptResult');
    }

    async clickAlertButton() {
        await this.alertButton.click();
    }

    async clickTimerAlertButton() {
        await this.timerAlertButton.click();
    }

    async clickConfirmButton() {
        await this.confirmButton.click();
    }

    async clickPromptButton() {
        await this.promptButton.click();
    }

    async getConfirmResultText() {
        return await this.confirmResult.textContent();
    }

    async getPromptResultText() {
        return await this.promptResult.textContent();
    }

    setupDialogHandler(dialogType, expectedMessage, action = 'accept', inputText = '') {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain(dialogType);
            expect(dialog.message()).toContain(expectedMessage);
            
            if (action === 'accept') {
                await dialog.accept(inputText);
            } else {
                await dialog.dismiss();
            }
        });
    }
}