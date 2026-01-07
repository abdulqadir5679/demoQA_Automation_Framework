import { test, expect } from '@playwright/test';

test.describe('Elements Suite: Check_Box', () => {

  test('Expand checkbox tree', async ({ page }) => {

    await page.goto('/checkbox', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    // expanding whole list
    await page.locator('button[title="Expand all"]').click();

    // check only downloads dir
    await page.locator('li span:has-text("Downloads") svg.rct-icon-uncheck').click();

    // check list items of Office dir
    await page.locator('li span:has-text("Private") svg.rct-icon-uncheck').click();
    await page.locator('li span:has-text("Classified") svg.rct-icon-uncheck').click();
    await page.locator('li span:has-text("General") svg.rct-icon-uncheck').click();
    await page.locator('li span:has-text("Public") svg.rct-icon-uncheck').click();

    // check list items of Documents sub dir WorkSpace
    await page.locator('li span:has-text("WorkSpace") svg.rct-icon-uncheck').click();

    // check list items of Desktop dir
    await page.locator('li span:has-text("Desktop") svg.rct-icon-uncheck').click();

    // assert that all checkboxes are checked
    const selectedItems = await page.locator('.display-result.mt-4 > *:not(:first-child)').allTextContents();

// Assert the expected list
expect(selectedItems).toEqual([
        'home',
        'desktop',
        'notes',
        'commands',
        'documents',
        'workspace',
        'react',
        'angular',
        'veu',
        'office',
        'public',
        'private',
        'classified',
        'general',
        'downloads',
        'wordFile',
        'excelFile',
    ]);
  });

});
