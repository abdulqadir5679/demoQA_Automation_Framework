import {test, expect} from '@playwright/test';

test.describe('Test suite : Date Picker', () => {
    test('Test case', async ({page}) => {
        await page.goto('https://demoqa.com/date-picker', {waitUntil: 'domcontentloaded'});

        // Select date in first date picker
        await page.locator('#datePickerMonthYearInput').click();
        await page.locator('.react-datepicker__month-select').selectOption('January');
        await page.locator('.react-datepicker__year-select').selectOption('2023');
        await page.locator('.react-datepicker__day--013').click();
        
        // Assert first date picker value
        await expect(page.locator('#datePickerMonthYearInput')).toHaveValue('01/13/2023');

        // Select date and time in second date picker
        await page.locator('#dateAndTimePickerInput').click();
        await page.locator('.react-datepicker__month-read-view').click();
        await page.locator('.react-datepicker__month-dropdown').getByText('January').click();
        await page.locator('.react-datepicker__year-read-view').click();
        await page.locator('.react-datepicker__year-dropdown').getByText('2023').click();
        await page.locator('.react-datepicker__day--013').click();
        await page.locator('.react-datepicker__time-list').getByText('11:00').click();

        
        // Assert second date picker value
        await expect(page.locator('#dateAndTimePickerInput')).toHaveValue(/January 13, 2023 11:00 AM/);
    })
})