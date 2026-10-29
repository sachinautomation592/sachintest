# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Mytest.spec.ts >> Search for product in Flipkart and verify price
- Location: tests\Mytest.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="q"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[name="q"]').first()
    - waiting for" https://www.flipkart.com/" navigation to finish...

```

```yaml
- img "Flipkart Logo"
- heading "Are you a human?" [level=1]
- paragraph: Confirming...
- iframe
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Search for product in Flipkart and verify price", async ({ page }) => {
  4  | 
  5  | 	await page.goto('https://www.flipkart.com/');
  6  | 	await page.waitForLoadState('domcontentloaded');
  7  | 
  8  | 	test.skip(await page.getByText('Site is overloaded', { exact: false }).isVisible().catch(() => false), 'Flipkart is temporarily overloaded in this run.');
  9  | 
  10 | 	const searchBox = page.locator('input[name="q"]').first();
> 11 | 	await expect(searchBox).toBeVisible();
     |                          ^ Error: expect(locator).toBeVisible() failed
  12 | 	await searchBox.fill('iPhone 13');
  13 | 	await page.locator('button[type="submit"]').click();
  14 | 
  15 | 	await expect(page).toHaveURL(/\/search\?/i);
  16 | 
  17 | 	const secondProductLink = page.locator('a[rel="noopener noreferrer"]').nth(1);
  18 | 	await expect(secondProductLink).toBeVisible();
  19 | 
  20 | 	const [secondTab] = await Promise.all([
  21 | 		page.context().waitForEvent('page'),
  22 | 		secondProductLink.click(),
  23 | 	]);
  24 | 
  25 | 	await secondTab.waitForLoadState('domcontentloaded');
  26 | 
  27 | 	const productPrice = secondTab.locator('div, span').filter({ hasText: /₹\s?[\d,]+/ }).first();
  28 | 	await expect(productPrice).toBeVisible();
  29 | 	await expect(productPrice).toContainText(/₹\s?[\d,]+/);
  30 | 
  31 | 
  32 | });
  33 | 
  34 | 
  35 | 
  36 | 
```