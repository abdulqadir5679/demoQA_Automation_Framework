import { BasePage } from '../BasePage.js';

export class SelectMenuPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.withOptGroup = page.locator('#withOptGroup');
        this.optGroupOption = page.locator('#react-select-2-option-0-0');
        this.singleValue = page.locator('.css-1uccc91-singleValue');
        
        this.selectOne = page.locator('#selectOne');
        this.profOption = page.getByText('Prof.');
        
        this.carsSelect = page.locator('#cars');
    }

    async selectFromOptGroup() {
        await this.withOptGroup.click();
        await this.optGroupOption.click();
    }

    async selectTitle() {
        await this.selectOne.click();
        await this.profOption.click();
    }

    async selectMultipleCars(cars) {
        await this.carsSelect.selectOption(cars);
    }
}