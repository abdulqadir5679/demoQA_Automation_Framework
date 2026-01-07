import { BasePage } from '../BasePage.js';

export class SliderPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.rangeSlider = page.locator('.range-slider');
        this.sliderValue = page.locator('#sliderValue');
    }

    async setSliderValue(value) {
        await this.rangeSlider.fill(value);
    }
}