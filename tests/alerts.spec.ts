import path from 'path';

import { expect, test } from '@playwright/test';

import { AlertsPage } from '../pages/alerts.page';

const timestamp = Date.now();

const getScreenshotPath = (testName: string, pointName: string): string => {
  return path.resolve(process.cwd(), 'screenshots', `${testName}-${pointName}-${timestamp}.png`);
};

test.describe('Alerts', () => {
  test('handles immediate alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();

    page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('You clicked a button');
      await dialog.accept();
    });

    await alertsPage.clickImmediateAlert();
    await page.screenshot({ path: getScreenshotPath('alerts-immediate', '01-alert-dismissed'), fullPage: true });
  });

  test('handles timer alert after wait', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();
    

    page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('This alert appeared after 5 seconds');
      await dialog.accept();
    });

    await alertsPage.clickTimerAlert();
    await page.screenshot({ path: getScreenshotPath('alerts-timer', '01-timer-alert-dismissed'), fullPage: true });
  });

  test('handles confirm alert with accept and dismiss', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();

    page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      await dialog.accept();
    });
    await alertsPage.clickConfirmAlert();
    await alertsPage.expectConfirmResult('You selected Ok');
  

    page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('confirm');
      await dialog.dismiss();
    });
    await alertsPage.clickConfirmAlert();
    await alertsPage.expectConfirmResult('You selected Cancel');
    await page.screenshot({ path: getScreenshotPath('alerts-confirm', '01-after-dismiss'), fullPage: true });
  });

  test('handles prompt alert and validates typed value', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();
  
    page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Playwright User');
    });
    await alertsPage.clickPromptAlert();

    await alertsPage.expectPromptResult('You entered Playwright User');
    await page.screenshot({ path: getScreenshotPath('alerts-prompt', '01-prompt-result-validated'), fullPage: true });
  });
});