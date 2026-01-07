import { BasePage } from '../BasePage.js';

export class TabsPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.originTab = page.locator('#demo-tab-origin');
        this.originTabPane = page.locator('#demo-tabpane-origin');
        
        this.useTab = page.locator('#demo-tab-use');
        this.useTabPane = page.locator('#demo-tabpane-use');
    }

    async clickOriginTab() {
        await this.originTab.click();
    }

    async clickUseTab() {
        await this.useTab.click();
    }
}