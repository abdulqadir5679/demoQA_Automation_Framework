import { test, expect } from '@playwright/test';
import { UploadDownloadPage } from '../../pages/elements/UploadDownloadPage.js';
import { uploadDownloadTestData } from '../../data/uploadDownloadTestData.js';
import path from 'path';
import fs from 'fs';

test.describe('Elements Suite: Upload and Download Functionality', () => {
    let uploadDownloadPage;

    test.beforeEach(async ({ page }) => {
        uploadDownloadPage = new UploadDownloadPage(page);
        await uploadDownloadPage.navigateTo(uploadDownloadTestData.url);
    });

    test('Upload and Download Functionality', async () => {
        // Download test
        const [download] = await uploadDownloadPage.clickDownload();
        const downloadPath = await download.path();
        expect(downloadPath).not.toBeNull();
        
        // Upload test - create a test file
        const testFilePath = path.join(__dirname, uploadDownloadTestData.testFile.name);
        fs.writeFileSync(testFilePath, uploadDownloadTestData.testFile.content);
        
        await uploadDownloadPage.uploadFile(testFilePath);
        
        // Verify the file is uploaded
        expect(await uploadDownloadPage.isUploadedFilePathVisible()).toBeTruthy();
        const uploadedFilePath = await uploadDownloadPage.getUploadedFilePath();
        expect(uploadedFilePath).toContain(uploadDownloadTestData.testFile.name);
        
        // Clean up test file
        fs.unlinkSync(testFilePath);
    });
});