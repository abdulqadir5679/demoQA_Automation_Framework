import { BasePage } from '../BasePage.js';

export class AccordianPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.loremIpsumHeader = page.getByText('What is Lorem Ipsum?');
        this.loremIpsumContent = page.getByText('Lorem Ipsum is simply dummy');
        
        this.whereFromHeader = page.getByText('Where does it come from?');
        this.whereFromContent = page.getByText('Contrary to popular belief,');
        
        this.whyUseHeader = page.getByText('Why do we use it?');
        this.whyUseContent = page.getByText('It is a long established fact');
    }

    async clickLoremIpsumHeader() {
        await this.loremIpsumHeader.click();
    }

    async clickWhereFromHeader() {
        await this.whereFromHeader.click();
    }

    async clickWhyUseHeader() {
        await this.whyUseHeader.click();
    }
}