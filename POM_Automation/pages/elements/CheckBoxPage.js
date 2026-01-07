import { BasePage } from '../BasePage.js';

export class CheckBoxPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Main locators
        this.expandAllButton = page.locator('button[title="Expand all"]');
        this.resultDisplay = page.locator('.display-result.mt-4 > *:not(:first-child)');
        
        // Checkbox locators
        this.downloadsCheckbox = page.locator('li span:has-text("Downloads") svg.rct-icon-uncheck');
        this.privateCheckbox = page.locator('li span:has-text("Private") svg.rct-icon-uncheck');
        this.classifiedCheckbox = page.locator('li span:has-text("Classified") svg.rct-icon-uncheck');
        this.generalCheckbox = page.locator('li span:has-text("General") svg.rct-icon-uncheck');
        this.publicCheckbox = page.locator('li span:has-text("Public") svg.rct-icon-uncheck');
        this.workspaceCheckbox = page.locator('li span:has-text("WorkSpace") svg.rct-icon-uncheck');
        this.desktopCheckbox = page.locator('li span:has-text("Desktop") svg.rct-icon-uncheck');
    }

    async expandAll() {
        await this.expandAllButton.click();
    }

    async checkDownloads() {
        await this.downloadsCheckbox.click();
    }

    async checkOfficeItems() {
        await this.privateCheckbox.click();
        await this.classifiedCheckbox.click();
        await this.generalCheckbox.click();
        await this.publicCheckbox.click();
    }

    async checkWorkspace() {
        await this.workspaceCheckbox.click();
    }

    async checkDesktop() {
        await this.desktopCheckbox.click();
    }

    async getSelectedItems() {
        return await this.resultDisplay.allTextContents();
    }
}