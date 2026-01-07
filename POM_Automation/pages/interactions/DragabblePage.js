import { BasePage } from '../BasePage.js';

export class DragabblePage extends BasePage {
    constructor(page) {
        super(page);
        
        this.dragBox = page.locator('#dragBox');
    }

    async dragElement(offsetX, offsetY) {
        const box = await this.dragBox.boundingBox();
        if (!box) {
            throw new Error('Element not found');
        }
        
        await this.dragBox.hover();
        await this.page.mouse.down();
        await this.page.mouse.move(box.x + offsetX, box.y + offsetY);
        await this.page.mouse.up();
    }

    async isDragBoxVisible() {
        return await this.dragBox.isVisible();
    }
}