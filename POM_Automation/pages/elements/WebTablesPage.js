import { BasePage } from '../BasePage.js';

export class WebTablesPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Button locators
        this.addNewRecordButton = page.locator('#addNewRecordButton');
        this.submitButton = page.locator('#submit');
        
        // Form field locators
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.userEmailInput = page.locator('#userEmail');
        this.ageInput = page.locator('#age');
        this.salaryInput = page.locator('#salary');
        this.departmentInput = page.locator('#department');
        
        // Action button locators
        this.editButtons = page.locator('[title="Edit"]');
        this.deleteButtons = page.locator('[title="Delete"]');
    }

    async clickAddNewRecord() {
        await this.addNewRecordButton.click();
    }

    async fillForm(userData) {
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.userEmailInput.fill(userData.email);
        await this.ageInput.fill(userData.age);
        await this.salaryInput.fill(userData.salary);
        await this.departmentInput.fill(userData.department);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async clickLastEditButton() {
        await this.editButtons.last().click();
    }

    async clickLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async updateAge(newAge) {
        await this.ageInput.fill(newAge);
    }

    async isTextVisible(text) {
        return await this.page.getByText(text).isVisible();
    }

    async isTextNotVisible(text) {
        return await this.page.getByText(text).isHidden();
    }
}