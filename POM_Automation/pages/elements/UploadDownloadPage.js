import { BasePage } from '../BasePage.js';

export class UploadDownloadPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Button and input locators
        this.downloadButton = page.locator('#downloadButton');
        this.uploadFileInput = page.locator('#uploadFile');
        this.uploadedFilePath = page.locator('#uploadedFilePath');
    }

    async clickDownload() {
        return await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadButton.click()
        ]);
    }

    async uploadFile(filePath) {
        await this.uploadFileInput.setInputFiles(filePath);
    }

    async getUploadedFilePath() {
        return await this.uploadedFilePath.textContent();
    }

    async isUploadedFilePathVisible() {
        return await this.uploadedFilePath.isVisible();
    }
}