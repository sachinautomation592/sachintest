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
    - link:
      - /url: https://demoqa.com
      - img
  - generic [ref=e6]:
    - generic [ref=e7]:
      - navigation [ref=e8]:
        - button [ref=e9]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - generic [ref=e14]:
            - generic [ref=e15]:
              - img [ref=e17]
              - text: Elements
            - img [ref=e22]
          - list [ref=e25]:
            - listitem [ref=e26]:
              - link "Text Box" [ref=e27] [cursor=pointer]:
                - /url: /text-box
                - img [ref=e28]
                - text: Text Box
            - listitem [ref=e30]:
              - link "Check Box" [ref=e31] [cursor=pointer]:
                - /url: /checkbox
                - img [ref=e32]
                - text: Check Box
            - listitem [ref=e34]:
              - link "Radio Button" [ref=e35] [cursor=pointer]:
                - /url: /radio-button
                - img [ref=e36]
                - text: Radio Button
            - listitem [ref=e38]:
              - link "Web Tables" [ref=e39] [cursor=pointer]:
                - /url: /webtables
                - img [ref=e40]
                - text: Web Tables
            - listitem [ref=e42]:
              - link "Buttons" [ref=e43] [cursor=pointer]:
                - /url: /buttons
                - img [ref=e44]
                - text: Buttons
            - listitem [ref=e46]:
              - link "Links" [ref=e47] [cursor=pointer]:
                - /url: /links
                - img [ref=e48]
                - text: Links
            - listitem [ref=e50]:
              - link "Broken Links - Images" [ref=e51] [cursor=pointer]:
                - /url: /broken
                - img [ref=e52]
                - text: Broken Links - Images
            - listitem [ref=e54]:
              - link "Upload and Download" [ref=e55] [cursor=pointer]:
                - /url: /upload-download
                - img [ref=e56]
                - text: Upload and Download
            - listitem [ref=e58]:
              - link "Dynamic Properties" [ref=e59] [cursor=pointer]:
                - /url: /dynamic-properties
                - img [ref=e60]
                - text: Dynamic Properties
        - generic [ref=e62]:
          - generic [ref=e64]:
            - generic [ref=e65]:
              - img [ref=e67]
              - text: Forms
            - img [ref=e73]
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Practice Form" [ref=e78] [cursor=pointer]:
                - /url: /automation-practice-form
                - img [ref=e79]
                - text: Practice Form
        - generic [ref=e81]:
          - generic [ref=e83]:
            - generic [ref=e84]:
              - img [ref=e86]
              - text: Alerts, Frame & Windows
            - img [ref=e91]
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "Browser Windows" [ref=e96] [cursor=pointer]:
                - /url: /browser-windows
                - img [ref=e97]
                - text: Browser Windows
            - listitem [ref=e99]:
              - link "Alerts" [ref=e100] [cursor=pointer]:
                - /url: /alerts
                - img [ref=e101]
                - text: Alerts
            - listitem [ref=e103]:
              - link "Frames" [ref=e104] [cursor=pointer]:
                - /url: /frames
                - img [ref=e105]
                - text: Frames
            - listitem [ref=e107]:
              - link "Nested Frames" [ref=e108] [cursor=pointer]:
                - /url: /nestedframes
                - img [ref=e109]
                - text: Nested Frames
            - listitem [ref=e111]:
              - link "Modal Dialogs" [ref=e112] [cursor=pointer]:
                - /url: /modal-dialogs
                - img [ref=e113]
                - text: Modal Dialogs
        - generic [ref=e115]:
          - generic [ref=e117]:
            - generic [ref=e118]:
              - img [ref=e120]
              - text: Widgets
            - img [ref=e126]
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Accordian" [ref=e131] [cursor=pointer]:
                - /url: /accordian
                - img [ref=e132]
                - text: Accordian
            - listitem [ref=e134]:
              - link "Auto Complete" [ref=e135] [cursor=pointer]:
                - /url: /auto-complete
                - img [ref=e136]
                - text: Auto Complete
            - listitem [ref=e138]:
              - link "Date Picker" [ref=e139] [cursor=pointer]:
                - /url: /date-picker
                - img [ref=e140]
                - text: Date Picker
            - listitem [ref=e142]:
              - link "Slider" [ref=e143] [cursor=pointer]:
                - /url: /slider
                - img [ref=e144]
                - text: Slider
            - listitem [ref=e146]:
              - link "Progress Bar" [ref=e147] [cursor=pointer]:
                - /url: /progress-bar
                - img [ref=e148]
                - text: Progress Bar
            - listitem [ref=e150]:
              - link "Tabs" [ref=e151] [cursor=pointer]:
                - /url: /tabs
                - img [ref=e152]
                - text: Tabs
            - listitem [ref=e154]:
              - link "Tool Tips" [ref=e155] [cursor=pointer]:
                - /url: /tool-tips
                - img [ref=e156]
                - text: Tool Tips
            - listitem [ref=e158]:
              - link "Menu" [ref=e159] [cursor=pointer]:
                - /url: /menu
                - img [ref=e160]
                - text: Menu
            - listitem [ref=e162]:
              - link "Select Menu" [ref=e163] [cursor=pointer]:
                - /url: /select-menu
                - img [ref=e164]
                - text: Select Menu
        - generic [ref=e166]:
          - generic [ref=e168]:
            - generic [ref=e169]:
              - img [ref=e171]
              - text: Interactions
            - img [ref=e176]
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Sortable" [ref=e181] [cursor=pointer]:
                - /url: /sortable
                - img [ref=e182]
                - text: Sortable
            - listitem [ref=e184]:
              - link "Selectable" [ref=e185] [cursor=pointer]:
                - /url: /selectable
                - img [ref=e186]
                - text: Selectable
            - listitem [ref=e188]:
              - link "Resizable" [ref=e189] [cursor=pointer]:
                - /url: /resizable
                - img [ref=e190]
                - text: Resizable
            - listitem [ref=e192]:
              - link "Droppable" [ref=e193] [cursor=pointer]:
                - /url: /droppable
                - img [ref=e194]
                - text: Droppable
            - listitem [ref=e196]:
              - link "Dragabble" [ref=e197] [cursor=pointer]:
                - /url: /dragabble
                - img [ref=e198]
                - text: Dragabble
        - generic [ref=e200]:
          - generic [ref=e202]:
            - generic [ref=e203]:
              - img [ref=e205]
              - text: Book Store Application
            - img [ref=e210]
          - list [ref=e213]:
            - listitem [ref=e214]:
              - link "Login" [ref=e215] [cursor=pointer]:
                - /url: /login
                - img [ref=e216]
                - text: Login
            - listitem [ref=e218]:
              - link "Book Store" [ref=e219] [cursor=pointer]:
                - /url: /books
                - img [ref=e220]
                - text: Book Store
            - listitem [ref=e222]:
              - link "Profile" [ref=e223] [cursor=pointer]:
                - /url: /profile
                - img [ref=e224]
                - text: Profile
            - listitem [ref=e226]:
              - link "Book Store API" [ref=e227] [cursor=pointer]:
                - /url: /swagger
                - img [ref=e228]
                - text: Book Store API
    - generic [ref=e231]:
      - heading "Login" [level=1] [ref=e232]
      - generic [ref=e233]:
        - generic [ref=e234]:
          - heading "Welcome," [level=2] [ref=e235]
          - heading "Login in Book Store" [level=5] [ref=e236]
        - generic [ref=e237]:
          - generic [ref=e238]: "UserName :"
          - textbox "UserName" [ref=e240]: pw_ui_o3zrlj
        - generic [ref=e241]:
          - generic [ref=e242]: "Password :"
          - textbox "Password" [active] [ref=e244]: Password@123
        - generic [ref=e245]:
          - button "Login" [ref=e247]
          - button "New User" [ref=e249]
  - contentinfo [ref=e251]:
    - generic [ref=e252]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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