import { BasePage } from '../BasePage.js';

export class RadioButtonPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Radio button locators
        this.yesRadioLabel = page.locator('label[for="yesRadio"]');
        this.impressiveRadioLabel = page.locator('label[for="impressiveRadio"]');
        this.noRadioLabel = page.locator('label[for="noRadio"]');
        
        // Radio button input locators
        this.yesRadio = page.locator('#yesRadio');
        this.impressiveRadio = page.locator('#impressiveRadio');
        this.noRadio = page.locator('#noRadio');
    }

    async selectYesRadio() {
        await this.yesRadioLabel.click();
    }

    async selectImpressiveRadio() {
        await this.impressiveRadioLabel.click();
    }

    async selectNoRadio() {
        await this.noRadioLabel.click();
    }

    async isYesRadioChecked() {
        return await this.yesRadio.isChecked();
    }

    async isImpressiveRadioChecked() {
        return await this.impressiveRadio.isChecked();
    }

    async isNoRadioChecked() {
        return await this.noRadio.isChecked();
    }

    async isNoRadioDisabled() {
        return await this.noRadio.isDisabled();
    }
}