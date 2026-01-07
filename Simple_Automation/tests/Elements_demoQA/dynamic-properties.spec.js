import {test, expect} from '@playwright/test';

test.describe('Elements Suite: Dynamic Properties Functionality', ()=> {
    test('Dynamic Properties Functionality', async ({page})=> {
        await page.goto('https://demoqa.com/dynamic-properties', {waitUntil: 'domcontentloaded'})
        
        // Test initial states
        const enableAfterButton = page.locator('#enableAfter')
        const colorChangeButton = page.locator('#colorChange')
        const visibleAfterButton = page.locator('#visibleAfter')
        
        // Wait for the button to become enabled (after 5 seconds)
        await expect(enableAfterButton).toBeEnabled({ timeout: 15000 })
        
        // Color change button should change color after some time
        await expect(colorChangeButton).toHaveCSS('color','rgb(220, 53, 69)', { timeout: 15000 })
        
        // Visible after button should be visible
        await expect(visibleAfterButton).toBeVisible({ timeout: 15000 })
    })
})