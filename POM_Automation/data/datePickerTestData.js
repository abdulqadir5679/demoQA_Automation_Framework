export const datePickerTestData = {
    url: 'https://demoqa.com/date-picker',
    date: {
        month: 'January',
        year: '2023',
        time: '11:00'
    },
    expectedValues: {
        dateOnly: '01/13/2023',
        dateTime: /January 13, 2023 11:00 AM/
    }
};