import { expect, type Locator, type Page } from '@playwright/test';

import { demoQaUrl } from '../utils/demoqa.data';

export class FramesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get heading(): Locator {
    return this.page.getByRole('heading', { name: 'Frames' });
  }

  private get frameOneHeading(): Locator {
    return this.page.frameLocator('#frame1').locator('#sampleHeading');
  }

  private get frameTwoHeading(): Locator {
    return this.page.frameLocator('#frame2').locator('#sampleHeading');
  }

  async open(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/frames`);
    await expect(this.heading).toBeVisible();
  }

  async expectFrameOneHeading(text: string): Promise<void> {
    await expect(this.frameOneHeading).toHaveText(text);
  }

  async expectFrameTwoHeading(text: string): Promise<void> {
    await expect(this.frameTwoHeading).toHaveText(text);
  }

  async openNestedFrames(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/nestedframes`);
  }

  private get childIframeText(): Locator {
    return this.page.frameLocator('#frame1').frameLocator('iframe').getByText('Child Iframe');
  }

  async expectChildIframeText(text: string): Promise<void> {
    await expect(this.childIframeText).toHaveText(text);
  }
}