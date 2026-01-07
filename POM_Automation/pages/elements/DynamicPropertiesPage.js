import { BasePage } from '../BasePage.js';
import { expect } from '@playwright/test';

export class DynamicPropertiesPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Button locators
        this.enableAfterButton = page.locator('#enableAfter');
        this.colorChangeButton = page.locator('#colorChange');
        this.visibleAfterButton = page.locator('#visibleAfter');
    }

    async isEnableAfterButtonDisabled() {
        return await this.enableAfterButton.isDisabled();
    }

    async waitForEnableAfterButtonToBeEnabled(timeout = 10000) {
        await expect(this.enableAfterButton).toBeEnabled({ timeout });
    }

    async waitForColorChange(expectedColor, timeout = 10000) {
        await expect(this.colorChangeButton).toHaveCSS('color', expectedColor, { timeout });
    }

    async isVisibleAfterButtonVisible() {
        return await this.visibleAfterButton.isVisible();
    }
}