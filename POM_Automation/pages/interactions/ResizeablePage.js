import { BasePage } from '../BasePage.js';

export class ResizeablePage extends BasePage {
    constructor(page) {
        super(page);
        
        this.restrictedBox = page.locator('#resizableBoxWithRestriction');
        this.restrictedHandle = page.locator('#resizableBoxWithRestriction .react-resizable-handle');
        
        this.freeBox = page.locator('#resizable');
        this.freeHandle = page.locator('#resizable .react-resizable-handle');
    }

    async resizeRestricted(x, y) {
        await this.restrictedHandle.hover({ force: true });
        await this.page.mouse.down();
        await this.page.mouse.move(x, y);
        await this.page.mouse.up();
    }

    async resizeFree(x, y) {
        await this.freeHandle.hover({ force: true });
        await this.page.mouse.down();
        await this.page.mouse.move(x, y);
        await this.page.mouse.up();
    }

    async getRestrictedHeight() {
        return await this.restrictedBox.evaluate(el => getComputedStyle(el).height);
    }

    async getFreeWidth() {
        return await this.freeBox.evaluate(el => getComputedStyle(el).width);
    }
}