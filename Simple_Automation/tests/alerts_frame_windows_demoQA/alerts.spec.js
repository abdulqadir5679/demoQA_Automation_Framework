import {test, expect} from '@playwright/test';

test.describe('Alerts => Test Suite', () => {
    test('Simple Alert', async ({page}) => {
        await page.goto('https://demoqa.com/alerts', {waitUntil: 'domcontentloaded'})

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('You clicked a button')
            await dialog.accept()
        })
        
        await page.click('#alertButton')
    })

    test('Timer Alert', async ({page}) => {
        await page.goto('https://demoqa.com/alerts', {waitUntil: 'domcontentloaded'})

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('This alert appeared after 5 seconds')
            await dialog.accept()
        })
        
        await page.click('#timerAlertButton')
    })

    test('Confirm Alert', async ({page}) => {
        await page.goto('https://demoqa.com/alerts', {waitUntil: 'domcontentloaded'})

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Do you confirm action?')
            await dialog.accept()
        })
        
        await page.click('#confirmButton')
        await expect(page.locator('#confirmResult')).toHaveText('You selected Ok')
    })

    test('Prompt Box Alert', async ({page}) => {
        await page.goto('https://demoqa.com/alerts', {waitUntil: 'domcontentloaded'})

        page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name')
            await dialog.accept('Abdul Qadir')
        })
        
        await page.click('#promtButton')
        await expect(page.locator('#promptResult')).toContainText('Abdul Qadir')
    })
})