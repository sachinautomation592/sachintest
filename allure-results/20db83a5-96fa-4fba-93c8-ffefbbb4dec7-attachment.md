# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Mytest.spec.ts >> Google search
- Location: tests\Mytest.spec.ts:4:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('textarea[name="q"]')
Expected: "Sachin"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('textarea[name="q"]')
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=Sachin&sca_esv=d0b419d1da6f3190&source=hp&ei=EdFyapy5J9qgseMPisLQqQ8&iflsig=ABILxe8AAAAAanLfIaWDLaBFFMxsOxJPREhE7juRXKGC"
    - waiting for" https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DSachin%26sca_esv%3Dd0b419d1da6f3190%26source%3Dhp%26ei%3DEdFyapy5J9qgseMPisLQqQ8%26iflsig%3DABILxe8AAAAAanLfIaWDLaBFFMx…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DSachin%26sca_esv%3Dd0b419d1da6f3190%26source%3Dhp%26ei%3DEdFyapy5J9qgseMPisLQqQ8%26iflsig%3DABILxe8AAAAAanLfIaWDLaBFFMx…"

```

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 140.209.193.42 Time: 2026-08-05T05:58:43Z URL: https://www.google.com/search?q=Sachin&sca_esv=d0b419d1da6f3190&source=hp&ei=EdFyapy5J9qgseMPisLQqQ8&iflsig=ABILxe8AAAAAanLfIaWDLaBFFMxsOxJPREhE7juRXKGC&sei=EtFyaoODKcCqhvcPnd-c4QY"
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('Google search', async ({ page }) => {
  5  | 
  6  |     await page.goto('https://www.google.com');
  7  | 
  8  |     await page.locator('textarea[role="combobox"]').fill('Sachin');
  9  | 
  10 |     await page.keyboard.press('Enter');
  11 | // Wait for results page
> 12 |     await page.waitForLoadState('networkidle');
     |                                                      ^ Error: expect(locator).toHaveValue(expected) failed
  13 |     await expect(page.locator('textarea[name="q"]')).toHaveValue('Sachin');
  14 | });   
```