import { expect, type Locator, type Page } from '@playwright/test';

import { demoQaUrl } from '../utils/demoqa.data';

export class AlertsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get heading(): Locator {
    return this.page.getByRole('heading', { name: 'Alerts' });
  }

  private get immediateAlertButton(): Locator {
    return this.page.locator('#alertButton');
  }

  private get timerAlertButton(): Locator {
    return this.page.locator('#timerAlertButton');
  }

  private get confirmButton(): Locator {
    return this.page.locator('#confirmButton');
  }

  private get promptButton(): Locator {
    return this.page.locator('#promtButton');
  }

  private get confirmResult(): Locator {
    return this.page.locator('#confirmResult');
  }

  private get promptResult(): Locator {
    return this.page.locator('#promptResult');
  }

  async open(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/alerts`);
    await expect(this.heading).toBeVisible();

    // Remove floating ad containers that can block clicks in automation runs.
    await this.page.addStyleTag({
      content: '#fixedban, .adsbygoogle, iframe[id^="google_ads"] { display: none !important; }',
    });
  }

  async clickImmediateAlert(): Promise<void> {
    await this.immediateAlertButton.click();
  }

  async clickTimerAlert(): Promise<void> {
    await this.timerAlertButton.click();
  }

  async clickConfirmAlert(): Promise<void> {
    await this.confirmButton.click();
  }

  async clickPromptAlert(): Promise<void> {
    await this.promptButton.click();
  }

  async expectConfirmResult(text: string): Promise<void> {
    await expect(this.confirmResult).toHaveText(text);
  }

  async expectPromptResult(text: string): Promise<void> {
    await expect(this.promptResult).toHaveText(text);
  }
}