import { BasePage } from '../BasePage.js';

export class ToolTipsPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.hoverButton = page.getByText('Hover me to see');
        this.buttonToolTip = page.locator('#buttonToolTip');
        
        this.textField = page.locator('#toolTipTextField');
        this.textFieldToolTip = page.locator('#textFieldToolTip');
        
        this.contraryText = page.getByText('Contrary');
        this.contraryToolTip = page.locator('#contraryTexToolTip');
        
        this.sectionText = page.getByText('1.10.32');
        this.sectionToolTip = page.locator('#sectionToolTip');
    }

    async hoverOverButton() {
        await this.hoverButton.hover({ timeout: 10000 });
        await this.page.waitForTimeout(500);
    }

    async hoverOverTextField() {
        await this.textField.hover();
    }

    async hoverOverContrary() {
        await this.contraryText.hover();
    }

    async hoverOverSection() {
        await this.sectionText.hover();
    }
}