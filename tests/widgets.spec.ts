import path from 'path';

import { expect, test } from '@playwright/test';

import { WidgetsPage } from '../pages/widgets.page';

const timestamp = Date.now();

const getScreenshotPath = (testName: string, pointName: string): string => {
  return path.resolve(process.cwd(), 'screenshots', `${testName}-${pointName}-${timestamp}.png`);
};

test.describe('Widgets interactions and validation', () => {
  test('interacts with date picker', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.open();

    await widgetsPage.fillDateDetails({
      date: '07/26/2026',
      dateTime: 'July 26, 2026 7:00 AM',
    });
    await page.screenshot({ path: getScreenshotPath('widgets-date', '01-date-selected'), fullPage: true });

    await page.waitForTimeout(3000);
  });

  test('interacts with slider', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.openSlider();

    await widgetsPage.setSliderValue(75);
    await page.screenshot({ path: getScreenshotPath('widgets-slider', '01-slider-value-set'), fullPage: true });

    const value = await widgetsPage.getSliderValue();
    expect(value).toBe('75');
  });

  test('interacts with autocomplete', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.openAutocomplete();

    await widgetsPage.fillAutocompleteDetails({
      singleColor: 'Red',
      multipleColors: ['Green', 'Blue'],
    });
    await page.screenshot({ path: getScreenshotPath('widgets-autocomplete', '01-colors-selected'), fullPage: true });

    await page.waitForTimeout(3000);
  });
});