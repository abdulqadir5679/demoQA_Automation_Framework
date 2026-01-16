import {test, expect} from 'playwright/test';

test.describe('Elements Suite: Web Tables', () => {
    test('Web Tables', async ({page}) => {
        await page.goto('/webtables');

        // Add new record
        await page.locator('#addNewRecordButton').click();

        await page.fill('#firstName', 'Abdul');
        await page.fill('#lastName','Qadir');
        await page.fill('#userEmail','aq2025@gmail.com');
        await page.fill('#age','23');
        await page.fill('#salary', '100000');
        await page.fill('#department', 'QA');
        await page.locator('#submit').click();

        // Verify new record exists
        await expect(page.getByText('Abdul')).toBeVisible();

        // Click edit button for the added row (last edit button since it's the newest record)
        await page.locator('[title="Edit"]').last().click();

        // Update age and submit
        await page.fill('#age', '24');
        await page.locator('#submit').click();

        // Verify updated record
        await expect(page.getByText('24')).toBeVisible();

        await page.locator('[title="Delete"]').last().click();

        await expect(page.getByText('Abdul')).not.toBeVisible();
    })
})