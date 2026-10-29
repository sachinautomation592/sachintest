# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration login Search.spec.ts >> Registration login Search >> Test 2: User Login
- Location: tests\Registration login Search.spec.ts:40:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/profile" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e26] [cursor=pointer]:
        - generic [ref=e27]:
          - img [ref=e29]
          - text: Forms
        - img [ref=e35]
      - generic [ref=e39] [cursor=pointer]:
        - generic [ref=e40]:
          - img [ref=e42]
          - text: Alerts, Frame & Windows
        - img [ref=e47]
      - generic [ref=e51] [cursor=pointer]:
        - generic [ref=e52]:
          - img [ref=e54]
          - text: Widgets
        - img [ref=e60]
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Interactions
        - img [ref=e72]
      - generic [ref=e74]:
        - generic [ref=e76] [cursor=pointer]:
          - generic [ref=e77]:
            - img [ref=e79]
            - text: Book Store Application
          - img [ref=e84]
        - list [ref=e87]:
          - listitem [ref=e88] [cursor=pointer]:
            - link "Login" [ref=e89]:
              - /url: /login
              - img [ref=e90]
              - text: Login
          - listitem [ref=e92] [cursor=pointer]:
            - link "Book Store" [ref=e93]:
              - /url: /books
              - img [ref=e94]
              - text: Book Store
          - listitem [ref=e96] [cursor=pointer]:
            - link "Profile" [ref=e97]:
              - /url: /profile
              - img [ref=e98]
              - text: Profile
          - listitem [ref=e100] [cursor=pointer]:
            - link "Book Store API" [ref=e101]:
              - /url: /swagger
              - img [ref=e102]
              - text: Book Store API
    - generic [ref=e105]:
      - heading "Login" [level=1] [ref=e106]
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Welcome," [level=2] [ref=e109]
          - heading "Login in Book Store" [level=5] [ref=e110]
        - generic [ref=e111]:
          - generic [ref=e113]: "UserName :"
          - textbox "UserName" [ref=e115]: pw_ui_5kc182
        - generic [ref=e116]:
          - generic [ref=e118]: "Password :"
          - textbox "Password" [ref=e120]: Password@123
        - generic [ref=e121]:
          - button "Login" [ref=e123] [cursor=pointer]
          - button "New User" [ref=e125] [cursor=pointer]
        - paragraph [ref=e128]: Invalid username or password!
  - contentinfo [ref=e135]:
    - generic [ref=e136]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import path from 'path';
  2  | 
  3  | import { expect, test } from '@playwright/test';
  4  | 
  5  | import { demoQaPassword, searchTitle, demoQaUrl, searchAuthor, searchPublisher } from '../utils/demoqa.data';
  6  | import { DemoQaAPI } from '../utils/api';
  7  | import { LoginPage, ProfilePage, BookStorePage } from '../pages/auth.page';
  8  | import { UserRegistrationPage } from '../pages/user-registration.page';
  9  | 
  10 | const timestamp = Date.now();
  11 | 
  12 | const getScreenshotPath = (testName: string, pointName: string): string => {
  13 |   return path.resolve(process.cwd(), 'screenshots', `${testName}-${pointName}-${timestamp}.png`);
  14 | };
  15 | 
  16 | test.describe('Registration login Search', () => {
  17 |   const prefix = process.env.TEST_USERNAME_PREFIX;
  18 |   let testUsername = `${prefix}${Math.random().toString(36).slice(2, 8)}`;
  19 |   let testPassword = process.env.TEST_PASSWORD!;
  20 | 
  21 |   test('Test 1: User Registration', async ({ page, request }) => {
  22 |     
  23 |     const api = new DemoQaAPI(request);
  24 |     
  25 |     try {
  26 |       const registrationResponse = await api.registerUser({
  27 |         userName: testUsername,
  28 |         password: testPassword,
  29 |       });
  30 |       
  31 |       expect(registrationResponse.userID).toBeTruthy();
  32 |       await page.screenshot({ path: getScreenshotPath('registration', '01-user-registered-successfully'), fullPage: true });
  33 |     } catch (error) {
  34 |       throw new Error(`Failed to register user ${testUsername}`);
  35 |     }
  36 | 
  37 | 
  38 |   });
  39 | 
  40 |   test('Test 2: User Login', async ({ page }) => {
  41 |   
  42 |     const loginPage = new LoginPage(page);
  43 |     await loginPage.open();
  44 |     await expect(page).toHaveURL(new RegExp(demoQaUrl + '/login'));
  45 | 
  46 |     await page.getByPlaceholder('UserName').fill(testUsername);
  47 |     await page.getByPlaceholder('Password').fill(testPassword);
  48 | 
  49 |     await page.getByRole('button', { name: 'Login' }).click();
> 50 |     await page.waitForURL('**/profile');
     |                ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  51 | 
  52 |     const profilePage = new ProfilePage(page);
  53 |     await profilePage.expectLoggedInUser(testUsername);
  54 |     await profilePage.expectProfileActionsVisible();
  55 |     await page.screenshot({ path: getScreenshotPath('login', '01-login-successful'), fullPage: true });
  56 |   
  57 | 
  58 |   });
  59 | 
  60 |   test('Test 3: Search Book in Book Store', async ({ page }) => {
  61 |     
  62 |     // Step 1: Login first
  63 |     const loginPage = new LoginPage(page);
  64 |     await loginPage.openAndLogin(testUsername, testPassword);
  65 |     
  66 |     // Step 2: Navigate to book store
  67 |     const profilePage = new ProfilePage(page);
  68 |     await profilePage.goToBookStore();
  69 |     
  70 |     // Step 3: Search for book
  71 |     const bookStorePage = new BookStorePage(page);
  72 |     await bookStorePage.searchByTitle(searchTitle);
  73 |     
  74 |     // Add small wait for search results to load
  75 |     await page.waitForTimeout(1000);
  76 | 
  77 |     const bookRow = bookStorePage.rowForBook(searchTitle);
  78 |     await expect(bookRow).toBeVisible();
  79 | 
  80 |     // Verify book details are displayed
  81 |     const bookTitle = page.getByRole('cell', { name: searchTitle });
  82 |     await expect(bookTitle).toBeVisible();
  83 | 
  84 |     // Verify author is displayed
  85 |     const bookAuthor = page.getByRole('cell', { name: searchAuthor });
  86 |     await expect(bookAuthor).toBeVisible();
  87 | 
  88 |     // Verify publisher is displayed
  89 |     const bookPublisher = page.getByRole('cell', { name: searchPublisher });
  90 |     await expect(bookPublisher).toBeVisible();
  91 |     await page.screenshot({ path: getScreenshotPath('book-search', '01-book-details-validated'), fullPage: true });
  92 |   });
  93 | });
  94 | 
```