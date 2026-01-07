import { BasePage } from '../BasePage.js';

export class FramesPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.frame1 = page.frameLocator('#frame1');
        this.frame2 = page.frameLocator('#frame2');
        this.frame1Heading = this.frame1.locator('#sampleHeading');
        this.frame2Heading = this.frame2.locator('#sampleHeading');
    }

    async getFrame1HeadingText() {
        return await this.frame1Heading.textContent();
    }

    async getFrame2HeadingText() {
        return await this.frame2Heading.textContent();
    }

    async clickFrame1Heading() {
        await this.frame1Heading.click();
    }

    async clickFrame2Heading() {
        await this.frame2Heading.click();
    }
}