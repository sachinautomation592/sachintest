# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Mytest.spec.ts >> Verify server-set cookie (httpbin)
- Location: tests\Mytest.spec.ts:34:5

# Error details

```
Error: expect(received).toBeDefined()

Received: undefined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - img "Error" [ref=e3]
  - heading "Web Page Blocked" [level=1] [ref=e4]
  - paragraph [ref=e5]: The web page you are trying to visit has been blocked in accordance with company policy. Please contact your system administrator if you believe this is an error.
  - generic [ref=e6]:
    - paragraph [ref=e7]: "User: sachin.tambe@impetus.com"
    - paragraph [ref=e8]: "URL: httpbin.org/cookies/set/demo_cookie/demo_value"
    - paragraph [ref=e9]: "Category: shareware-and-freeware"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Search for product in Flipkart and verify price", async ({ page }) => {
  4  | 
  5  | 	await page.goto('https://www.flipkart.com/');
  6  | 
  7  | 	const searchBox = page.locator('input[name="q"]').first();
  8  | 	await searchBox.fill('iPhone 13');
  9  | 	await page.locator('button[type="submit"]').click();
  10 | 
  11 | 
  12 |    const products = page.locator('ul>li');
  13 |    products.nth(5).click();
  14 | 	
  15 | 
  16 | 
  17 | });
  18 | 
  19 | 
  20 | test('Verify a cookie on sample website', async ({ page, context }) => {
  21 | 	await page.goto('https://example.com/');
  22 | 
  23 | 	await page.evaluate(() => {
  24 | 		document.cookie = 'qa_cookie=playwright; path=/';
  25 | 	});
  26 | 
  27 | 	const cookies = await context.cookies('https://example.com/');
  28 | 	const qaCookie = cookies.find((cookie) => cookie.name === 'qa_cookie');
  29 | 
  30 | 	await expect(qaCookie).toBeDefined();
  31 | 	await expect(qaCookie?.value).toBe('playwright');
  32 | });
  33 | 
  34 | test('Verify server-set cookie (httpbin)', async ({ page, context }) => {
  35 | 	await page.goto('https://httpbin.org/cookies/set/demo_cookie/demo_value');
  36 | 
  37 | 	const cookies = await context.cookies('https://httpbin.org/');
  38 | 	const demoCookie = cookies.find((cookie) => cookie.name === 'demo_cookie');
  39 | 
> 40 | 	await expect(demoCookie).toBeDefined();
     |                           ^ Error: expect(received).toBeDefined()
  41 | 	await expect(demoCookie?.value).toBe('demo_value');
  42 | });
  43 | 
  44 | 
  45 | 
  46 | 
```