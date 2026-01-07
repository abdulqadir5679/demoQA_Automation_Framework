import { BasePage } from '../BasePage.js';

export class SortablePage extends BasePage {
    constructor(page) {
        super(page);
        
        this.gridTab = page.getByText('Grid');
        this.gridItems = page.locator('.create-grid .list-group-item');
        this.listItems = page.locator('.vertical-list-container .list-group-item');
    }

    async clickGridTab() {
        await this.gridTab.click();
    }

    async waitForGridItems() {
        await this.page.waitForSelector('.create-grid .list-group-item', { timeout: 10000 });
    }

    async waitForListItems() {
        await this.page.waitForSelector('.vertical-list-container .list-group-item');
    }

    async sortGridItems(fromIndex, toIndex) {
        const item1 = this.gridItems.nth(fromIndex);
        const item2 = this.gridItems.nth(toIndex);
        const box1 = await item1.boundingBox();
        const box2 = await item2.boundingBox();
        
        if (box1 && box2) {
            await item1.hover();
            await this.page.mouse.down();
            await this.page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2);
            await this.page.mouse.up();
        }
    }

    async sortListItems(fromIndex, toIndex) {
        const item1 = this.listItems.nth(fromIndex);
        const item2 = this.listItems.nth(toIndex);
        const box1 = await item1.boundingBox();
        const box2 = await item2.boundingBox();
        
        if (box1 && box2) {
            await item1.hover();
            await this.page.mouse.down();
            await this.page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2);
            await this.page.mouse.up();
        }
    }
}