# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tabs.spec.ts >> multiple tabs
- Location: tests\tabs.spec.ts:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#open-tab')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('multiple tabs', async ({ page }) => {
  4  | 
  5  | const parentPage = page;
  6  | const [childPage] = await Promise.all([
  7  |   page.context().waitForEvent('page'),
> 8  |   parentPage.click('#open-tab')
     |              ^ Error: page.click: Test timeout of 60000ms exceeded.
  9  | ]);
  10 | 
  11 | // Work on child
  12 | await childPage.close();
  13 | 
  14 | // Return to parent
  15 | await parentPage.bringToFront();
  16 | 
  17 | 
  18 | 
  19 | });
```