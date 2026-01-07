import { BasePage } from '../BasePage.js';

export class ModalDialogsPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.showSmallModalButton = page.locator('#showSmallModal');
        this.closeSmallModalButton = page.locator('#closeSmallModal');
        this.smallModalTitle = page.locator('#example-modal-sizes-title-sm');
        
        this.showLargeModalButton = page.locator('#showLargeModal');
        this.closeLargeModalButton = page.locator('#closeLargeModal');
        this.largeModalTitle = page.locator('#example-modal-sizes-title-lg');
    }

    async openSmallModal() {
        await this.showSmallModalButton.click();
    }

    async closeSmallModal() {
        await this.closeSmallModalButton.click();
    }

    async openLargeModal() {
        await this.showLargeModalButton.click();
    }

    async closeLargeModal() {
        await this.closeLargeModalButton.click();
    }
}