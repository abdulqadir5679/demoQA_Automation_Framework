import {test, expect} from '@playwright/test'
import path from 'path'
import fs from 'fs'

test.describe('Elements Suite: Upload and Download Functionality', ()=> {
    test('Upload and Download Functionality', async ({page})=> {
        await page.goto('/upload-download', { waitUntil: 'domcontentloaded' })

        // Download test
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('#downloadButton').click()
        ]);
        
        const downloadPath = await download.path();
        expect(downloadPath).not.toBeNull();
        
        // Upload test - create a test file
        const testFilePath = path.join(__dirname, 'test-file.txt');
        fs.writeFileSync(testFilePath, 'This is a test file for upload');
        
        await page.setInputFiles('#uploadFile', testFilePath);
        
        // Verify the file is uploaded
        await expect(page.locator('#uploadedFilePath')).toBeVisible();
        const uploadedFilePath = await page.locator('#uploadedFilePath').textContent();
        expect(uploadedFilePath).toContain('test-file.txt');
        
        // Clean up test file
        fs.unlinkSync(testFilePath);
    })
})