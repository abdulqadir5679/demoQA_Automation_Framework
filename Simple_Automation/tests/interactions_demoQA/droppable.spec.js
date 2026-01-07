import {test, expect} from '@playwright/test';

test.describe('Test Suite : Droppable', () => {

    test('Simple Droppable', async ({page}) => {
        await page.goto('https://demoqa.com/droppable' ,{waitUntil: 'domcontentloaded'});
        await page.locator('#draggable').dragTo(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'));
        await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toBeVisible();
        await page.waitForTimeout(3000);
    })

    test('Accept Droppable', async ({page}) => {
        await page.goto('https://demoqa.com/droppable', {waitUntil: 'domcontentloaded'});
        await page.getByRole('tab', { name: 'Accept' }).click();
        await page.locator('#acceptable').dragTo(page.getByRole('tabpanel', { name: 'Accept' }).locator('#droppable'));
        await expect(page.getByRole('tabpanel', { name: 'Accept' }).locator('#droppable')).toHaveText('Dropped!');
        await page.waitForTimeout(3000);
    })

    test('Prevent Propogation Droppable', async ({page}) => {
        await page.goto('https://demoqa.com/droppable', {waitUntil: 'domcontentloaded'});
        await page.getByRole('tab', { name: 'Prevent Propogation' }).click();
        await page.locator('#dragBox').dragTo(page.getByRole('tabpanel', { name: 'Prevent Propogation' }).locator('#notGreedyInnerDropBox'));
        await expect(page.getByRole('tabpanel', { name: 'Prevent Propogation' }).locator('#notGreedyInnerDropBox')).toHaveClass(/ui-state-highlight/);
        await page.waitForTimeout(3000);
    })

    test('Revert Droppable', async ({page}) => {
        await page.goto('https://demoqa.com/droppable', {waitUntil: 'domcontentloaded'});
        await page.getByRole('tab', { name: 'Revert Draggable' }).click();
        await page.locator('#notRevertable').dragTo(page.getByRole('tabpanel', { name: 'Revert Draggable' }).locator('#droppable'));
        await expect(page.getByRole('tabpanel', { name: 'Revert Draggable' }).locator('#droppable')).toBeVisible();
        await page.waitForTimeout(3000);
    })
})