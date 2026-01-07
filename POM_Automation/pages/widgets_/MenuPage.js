import { BasePage } from '../BasePage.js';

export class MenuPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.mainItem1 = page.getByText('Main Item 1');
        this.mainItem2 = page.getByText('Main Item 2');
        this.mainItem3 = page.getByText('Main Item 3');
        this.subSubList = page.getByText('SUB SUB LIST »');
        this.subSubItem2 = page.getByText('Sub Sub Item 2');
    }

    async hoverMainItem1() {
        await this.mainItem1.hover();
    }

    async hoverMainItem2() {
        await this.mainItem2.hover();
    }

    async hoverMainItem3() {
        await this.mainItem3.hover();
    }

    async hoverSubSubList() {
        await this.subSubList.hover({ force: true });
    }

    async clickSubSubItem2() {
        await this.subSubItem2.click();
    }
}