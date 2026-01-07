import { BasePage } from '../BasePage.js';

export class AutoCompletePage extends BasePage {
    constructor(page) {
        super(page);
        
        this.multipleColorInput = page.locator('#autoCompleteMultipleInput');
        this.multipleColorOption = page.locator('#react-select-2-option-0');
        this.selectedMultipleColors = page.locator('.css-12jo7m5');
        
        this.singleColorInput = page.locator('#autoCompleteSingleInput');
        this.singleColorOption = page.locator('#react-select-3-option-0');
        this.singleColorContainer = page.locator('#autoCompleteSingleContainer');
    }

    async fillMultipleColor(color) {
        await this.multipleColorInput.fill(color);
        await this.multipleColorOption.click();
    }

    async fillSingleColor(color) {
        await this.singleColorInput.fill(color);
        await this.singleColorOption.click();
    }
}