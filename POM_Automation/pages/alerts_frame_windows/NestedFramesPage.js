import { BasePage } from '../BasePage.js';

export class NestedFramesPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.parentFrame = page.frameLocator('#frame1');
        this.parentFrameText = this.parentFrame.getByText('Parent frame');
        this.childFrame = this.parentFrame.frameLocator('iframe');
        this.childFrameText = this.childFrame.getByText('Child Iframe');
    }
}