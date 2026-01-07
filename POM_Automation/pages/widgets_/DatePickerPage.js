import { BasePage } from '../BasePage.js';

export class DatePickerPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.datePickerInput = page.locator('#datePickerMonthYearInput');
        this.monthSelect = page.locator('.react-datepicker__month-select');
        this.yearSelect = page.locator('.react-datepicker__year-select');
        this.day013 = page.locator('.react-datepicker__day--013');
        
        this.dateTimePickerInput = page.locator('#dateAndTimePickerInput');
        this.monthReadView = page.locator('.react-datepicker__month-read-view');
        this.monthDropdown = page.locator('.react-datepicker__month-dropdown');
        this.yearReadView = page.locator('.react-datepicker__year-read-view');
        this.yearDropdown = page.locator('.react-datepicker__year-dropdown');
        this.timeList = page.locator('.react-datepicker__time-list');
    }

    async selectDate(month, year) {
        await this.datePickerInput.click();
        await this.monthSelect.selectOption(month);
        await this.yearSelect.selectOption(year);
        await this.day013.click();
    }

    async selectDateTime(month, year, time) {
        await this.dateTimePickerInput.click();
        await this.monthReadView.click();
        await this.monthDropdown.getByText(month).click();
        await this.yearReadView.click();
        await this.yearDropdown.getByText(year).click();
        await this.day013.click();
        await this.timeList.getByText(time).click();
    }
}