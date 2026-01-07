import { BasePage } from '../BasePage.js';

export class ButtonsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators
        this.doubleClickButton = page.getByRole('button', { name: 'Double Click Me', exact: true });
        this.rightClickButton = page.getByRole('button', { name: 'Right Click Me', exact: true });
        this.clickMeButton = page.getByRole('button', { name: 'Click Me', exact: true });
        
        // Message locators
        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.dynamicClickMessage = page.locator('#dynamicClickMessage');
    }

    async performDoubleClick() {
        await this.doubleClickButton.dblclick();
    }

    async performRightClick() {
        await this.rightClickButton.click({ button: 'right' });
    }

    async performClick() {
        await this.clickMeButton.click();
    }

    async verifyDoubleClickMessage(expectedText) {
        await this.doubleClickMessage.waitFor({ state: 'visible' });
        const actualText = await this.doubleClickMessage.textContent();
        return actualText === expectedText;
    }

    async verifyRightClickMessage(expectedText) {
        await this.rightClickMessage.waitFor({ state: 'visible' });
        const actualText = await this.rightClickMessage.textContent();
        return actualText === expectedText;
    }

    async verifyDynamicClickMessage(expectedText) {
        await this.dynamicClickMessage.waitFor({ state: 'visible' });
        const actualText = await this.dynamicClickMessage.textContent();
        return actualText === expectedText;
    }

    async isDoubleClickMessageVisible() {
        return await this.doubleClickMessage.isVisible();
    }

    async isRightClickMessageVisible() {
        return await this.rightClickMessage.isVisible();
    }

    async isDynamicClickMessageVisible() {
        return await this.dynamicClickMessage.isVisible();
    }
}