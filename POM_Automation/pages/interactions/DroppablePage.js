import { BasePage } from '../BasePage.js';

export class DroppablePage extends BasePage {
    constructor(page) {
        super(page);
        
        this.draggable = page.locator('#draggable');
        this.simpleDroppable = page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable');
        
        this.acceptTab = page.getByRole('tab', { name: 'Accept' });
        this.acceptable = page.locator('#acceptable');
        this.acceptDroppable = page.getByRole('tabpanel', { name: 'Accept' }).locator('#droppable');
        
        this.preventTab = page.getByRole('tab', { name: 'Prevent Propogation' });
        this.dragBox = page.locator('#dragBox');
        this.notGreedyInnerDropBox = page.getByRole('tabpanel', { name: 'Prevent Propogation' }).locator('#notGreedyInnerDropBox');
        
        this.revertTab = page.getByRole('tab', { name: 'Revert Draggable' });
        this.notRevertable = page.locator('#notRevertable');
        this.revertDroppable = page.getByRole('tabpanel', { name: 'Revert Draggable' }).locator('#droppable');
    }

    async dragToSimpleDroppable() {
        await this.draggable.dragTo(this.simpleDroppable);
    }

    async clickAcceptTab() {
        await this.acceptTab.click();
    }

    async dragToAcceptDroppable() {
        await this.acceptable.dragTo(this.acceptDroppable);
    }

    async clickPreventTab() {
        await this.preventTab.click();
    }

    async dragToPreventDroppable() {
        await this.dragBox.dragTo(this.notGreedyInnerDropBox);
    }

    async clickRevertTab() {
        await this.revertTab.click();
    }

    async dragToRevertDroppable() {
        await this.notRevertable.dragTo(this.revertDroppable);
    }
}