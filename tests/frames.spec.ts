import path from 'path';

import { test } from '@playwright/test';

import { FramesPage } from '../pages/frames.page';

const timestamp = Date.now();

const getScreenshotPath = (testName: string, pointName: string): string => {
  return path.resolve(process.cwd(), 'screenshots', `${testName}-${pointName}-${timestamp}.png`);
};

test.describe('Frames interactions and validation', () => {
  test('interacts with both frames and validates heading text', async ({ page }) => {
    const framesPage = new FramesPage(page);
    await framesPage.open();
    
    await framesPage.expectFrameOneHeading('This is a sample page');

    await framesPage.expectFrameTwoHeading('This is a sample page');
    await page.screenshot({ path: getScreenshotPath('frames-basic', '01-frame-two-validated'), fullPage: true });
  });

  test('interacts with nested frames and validates heading text', async ({ page }) => {
    const framesPage = new FramesPage(page);
    await framesPage.openNestedFrames();
    await framesPage.expectChildIframeText('Child Iframe');
    await page.screenshot({ path: getScreenshotPath('frames-nested', '01-child-iframe-validated'), fullPage: true });
  });
});