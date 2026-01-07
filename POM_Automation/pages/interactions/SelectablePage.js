import { BasePage } from '../BasePage.js';

export class SelectablePage extends BasePage {
    constructor(page) {
        super(page);
        
        this.listItem = page.getByText('Cras justo odio');
        this.gridTab = page.locator('#demo-tab-grid');
        this.gridItem = page.getByText('Three');
    }

    async clickListItem() {
        await this.listItem.click();
    }

    async clickGridTab() {
        await this.gridTab.click();
    }

    async clickGridItem() {
        await this.gridItem.click();
    }
}