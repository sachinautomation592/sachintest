import { expect, type Locator, type Page } from '@playwright/test';

import { demoQaUrl } from '../utils/demoqa.data';

export class WidgetsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get heading(): Locator {
    return this.page.getByRole('heading', { name: 'Date Picker' });
  }

  private get sliderHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Slider' });
  }

  private get sliderInput(): Locator {
    return this.page.locator('#sliderContainer input[type="range"]');
  }

  private get sliderValueDisplay(): Locator {
    return this.page.locator('#sliderValue');
  }

  private get dateInput(): Locator {
    return this.page.locator('#datePickerMonthYearInput');
  }

  private get dateTimeInput(): Locator {
    return this.page.locator('#dateAndTimePickerInput');
  }

  async open(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/date-picker`);
    await expect(this.heading).toBeVisible();
  }

  async fillDateDetails(data: { date: string; dateTime: string }): Promise<void> {
    await this.dateInput.fill(data.date);
    await this.dateInput.press('Enter');
    await this.dateTimeInput.fill(data.dateTime);
    await this.dateTimeInput.press('Enter');
  }

  async openSlider(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/slider`);
    await expect(this.sliderHeading).toBeVisible();
  }

  async setSliderValue(value: number): Promise<void> {
    await this.sliderInput.fill(String(value));
  }

  async getSliderValue(): Promise<string> {
    return this.sliderValueDisplay.inputValue();
  }

  async openAutocomplete(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/auto-complete`);
    await expect(this.page.getByRole('heading', { name: 'Auto Complete' })).toBeVisible();
  }

  async fillAutocompleteDetails(data: { singleColor: string; multipleColors: string[] }): Promise<void> {
    const singleInput = this.page.locator('#autoCompleteSingleContainer input');
    const multipleInput = this.page.locator('#autoCompleteMultipleContainer input');

    await singleInput.fill(data.singleColor);
    await singleInput.press('Enter');

    for (const color of data.multipleColors) {
      await multipleInput.fill(color);
      await multipleInput.press('Enter');
    }
  }
}