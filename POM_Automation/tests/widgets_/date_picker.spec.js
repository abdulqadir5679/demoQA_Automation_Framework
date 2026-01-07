import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../../pages/widgets_/DatePickerPage.js';
import { datePickerTestData } from '../../data/datePickerTestData.js';

test.describe('Test suite : Date Picker', () => {
    let datePickerPage;

    test.beforeEach(async ({ page }) => {
        datePickerPage = new DatePickerPage(page);
        await datePickerPage.navigateTo(datePickerTestData.url);
    });

    test('Test case', async () => {
        // Select date in first date picker
        await datePickerPage.selectDate(datePickerTestData.date.month, datePickerTestData.date.year);
        
        // Assert first date picker value
        await expect(datePickerPage.datePickerInput).toHaveValue(datePickerTestData.expectedValues.dateOnly);

        // Select date and time in second date picker
        await datePickerPage.selectDateTime(datePickerTestData.date.month, datePickerTestData.date.year, datePickerTestData.date.time);
        
        // Assert second date picker value
        await expect(datePickerPage.dateTimePickerInput).toHaveValue(datePickerTestData.expectedValues.dateTime);
    });
});