import { BasePage } from '../BasePage.js';

export class TextBoxPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Input field locators
        this.userNameInput = page.locator('#userName');
        this.userEmailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        
        // Button locator
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        
        // Output locators
        this.nameOutput = page.locator('#name');
        this.emailOutput = page.locator('#email');
    }

    async fillUserName(name) {
        await this.userNameInput.fill(name);
    }

    async fillUserEmail(email) {
        await this.userEmailInput.fill(email);
    }

    async fillCurrentAddress(address) {
        await this.currentAddressInput.fill(address);
    }

    async fillPermanentAddress(address) {
        await this.permanentAddressInput.fill(address);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }

    async getNameOutputText() {
        return await this.nameOutput.textContent();
    }

    async getEmailOutputText() {
        return await this.emailOutput.textContent();
    }
}