import { BasePage } from '../BasePage.js';

export class FormApplicationPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Form field locators
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.userEmailInput = page.locator('#userEmail');
        this.genderMaleRadio = page.locator('label[for="gender-radio-1"]');
        this.userNumberInput = page.locator('#userNumber');
        this.currentAddressInput = page.locator('#currentAddress');
        
        // Dropdown locators
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');
        this.stateOption = page.locator('#react-select-3-option-0');
        this.cityOption = page.locator('#react-select-4-option-0');
        
        // Button and message locators
        this.submitButton = page.locator('#submit');
        this.successMessage = page.getByText('Thanks for submitting the form');
    }

    async fillPersonalInfo(userData) {
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.userEmailInput.fill(userData.email);
        await this.userNumberInput.fill(userData.phoneNumber);
        await this.currentAddressInput.fill(userData.address);
    }

    async selectGender() {
        await this.genderMaleRadio.check();
    }

    async selectState() {
        await this.stateDropdown.click();
        await this.stateOption.click();
    }

    async selectCity() {
        await this.cityDropdown.click();
        await this.cityOption.click();
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async isSuccessMessageVisible() {
        return await this.successMessage.isVisible();
    }
}