import {test, expect } from '@playwright/test';

test.describe('Elements Suite: Links Functionality', ()=> {
    test('Links Functionality', async ({page, context}) => {
        await page.goto('/links', { waitUntil: 'domcontentloaded' })

        // Test external links that open in new tabs
        const [newPage1] = await Promise.all([
            context.waitForEvent('page'),
            page.click('#simpleLink')
        ]);
        await newPage1.waitForLoadState();
        await expect(newPage1).toHaveURL('https://demoqa.com/');
        await newPage1.close();

        const [newPage2] = await Promise.all([
            context.waitForEvent('page'),
            page.click('#dynamicLink')
        ]);
        await newPage2.waitForLoadState();
        await expect(newPage2).toHaveURL('https://demoqa.com/');
        await newPage2.close();

        // Test API call links
        await page.click('#created');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 201 and status text Created');

        await page.click('#no-content');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 204 and status text No Content');

        await page.click('#moved');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 301 and status text Moved Permanently');

        await page.click('#bad-request');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 400 and status text Bad Request');

        await page.click('#unauthorized');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 401 and status text Unauthorized');   

        await page.click('#forbidden');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 403 and status text Forbidden');

        await page.click('#invalid-url');
        await expect(page.locator('#linkResponse')).toHaveText('Link has responded with staus 404 and status text Not Found');
    
    })
})