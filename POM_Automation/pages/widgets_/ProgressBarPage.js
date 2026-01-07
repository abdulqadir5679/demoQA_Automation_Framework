import { BasePage } from '../BasePage.js';

export class ProgressBarPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.startStopButton = page.locator('#startStopButton');
        this.progressBar = page.locator('.progress-bar');
    }

    async clickStartStop() {
        await this.startStopButton.click();
    }

    async waitForProgress(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async getProgressValue() {
        return await this.progressBar.getAttribute('aria-valuenow');
    }
}