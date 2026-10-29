# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tabs.spec.ts >> open two tabs - demoqa and java
- Location: tests\tabs.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /DEMOQA/i
Received string:  "demosite"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "demosite"

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- link "Selenium Online Training":
  - /url: https://www.toolsqa.com/selenium-training/
  - img "Selenium Online Training"
- link "Elements":
  - /url: /elements
  - img
  - heading "Elements" [level=5]
- link "Forms":
  - /url: /forms
  - img
  - heading "Forms" [level=5]
- link "Alerts, Frame & Windows":
  - /url: /alertsWindows
  - img
  - heading "Alerts, Frame & Windows" [level=5]
- link "Widgets":
  - /url: /widgets
  - img
  - heading "Widgets" [level=5]
- link "Interactions":
  - /url: /interaction
  - img
  - heading "Interactions" [level=5]
- link "Book Store Application":
  - /url: /books
  - img
  - heading "Book Store Application" [level=5]
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('open two tabs - demoqa and java', async ({ browser }) => {
  4  |   const context = await browser.newContext();
  5  | 
  6  |   const demoqaTab = await context.newPage();
  7  |   await demoqaTab.goto('https://demoqa.com');
> 8  |   await expect(demoqaTab).toHaveTitle(/DEMOQA/i);
     |                           ^ Error: expect(page).toHaveTitle(expected) failed
  9  | 
  10 |   const javaTab = await context.newPage();
  11 |   await javaTab.goto('https://www.java.com');
  12 |   await expect(javaTab).toHaveTitle(/Java/i);
  13 | 
  14 |   // Verify both tabs are open
  15 |   const pages = context.pages();
  16 |   expect(pages.length).toBe(2);
  17 | 
  18 |   await context.close();
  19 | });
```