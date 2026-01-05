import {test, expect} from '@playwright/test';

test.describe('Elements Suite: Dynamic Properties Functionality', ()=> {
    test('Dynamic Properties Functionality', async ({page})=> {
        await page.goto('/dynamic-properties')
        
        // Test initial states
        const enableAfterButton = page.locator('#enableAfter')
        const colorChangeButton = page.locator('#colorChange')
        const visibleAfterButton = page.locator('#visibleAfter')
        
        // Initially the "Enable After" button should be disabled
        await expect(enableAfterButton).toBeDisabled()
        
        // Wait for the button to become enabled (after 5 seconds)
        await expect(enableAfterButton).toBeEnabled({ timeout: 10000 })
        
        // Color change button should change color after some time
        await expect(colorChangeButton).toHaveCSS('color','rgb(220, 53, 69)', { timeout: 10000 })
        
        // Visible after button should be visible (it's visible from start but text might change)
        await expect(visibleAfterButton).toBeVisible()
    })
})