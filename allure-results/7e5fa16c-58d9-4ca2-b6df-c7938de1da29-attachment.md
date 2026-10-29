# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration login Search.spec.ts >> Registration login Search >> Test 3: Search Book in Book Store
- Location: tests\Registration login Search.spec.ts:60:7

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
          - textbox "UserName" [ref=e115]: pw_ui_hy978v
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
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  | 
  3  | import { demoQaUrl } from '../utils/demoqa.data';
  4  | 
  5  | export class LoginPage {
  6  |   private readonly page: Page;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |   }
  11 | 
  12 |   private get usernameInput(): Locator {
  13 |     return this.page.getByPlaceholder('UserName');
  14 |   }
  15 | 
  16 |   private get passwordInput(): Locator {
  17 |     return this.page.getByPlaceholder('Password');
  18 |   }
  19 | 
  20 |   private get loginButton(): Locator {
  21 |     return this.page.getByRole('button', { name: 'Login' });
  22 |   }
  23 | 
  24 |   async open(): Promise<void> {
  25 |     await this.page.goto(`${demoQaUrl}/login`);
  26 |   }
  27 | 
  28 |   async login(username: string, password: string): Promise<void> {
  29 |     await this.usernameInput.fill(username);
  30 |     await this.passwordInput.fill(password);
  31 |     await this.loginButton.click();
> 32 |     await this.page.waitForURL('**/profile');
     |                     ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  33 |   }
  34 | 
  35 |   async openAndLogin(username: string, password: string): Promise<void> {
  36 |     await this.open();
  37 |     await this.login(username, password);
  38 |   }
  39 | }
  40 | 
  41 | export class ProfilePage {
  42 |   private readonly page: Page;
  43 | 
  44 |   constructor(page: Page) {
  45 |     this.page = page;
  46 |   }
  47 | 
  48 |   private get userNameLabel(): Locator {
  49 |     return this.page.getByText('User Name :');
  50 |   }
  51 | 
  52 |   private get goToBookStoreButton(): Locator {
  53 |     return this.page.getByRole('button', { name: 'Go To Book Store' });
  54 |   }
  55 | 
  56 |   private get deleteAccountButton(): Locator {
  57 |     return this.page.getByRole('button', { name: 'Delete Account' });
  58 |   }
  59 | 
  60 |   async expectLoggedInUser(username: string): Promise<void> {
  61 |     await expect(this.userNameLabel).toBeVisible();
  62 |     await expect(this.page.getByText(username)).toBeVisible();
  63 |   }
  64 | 
  65 |   async expectProfileActionsVisible(): Promise<void> {
  66 |     await expect(this.goToBookStoreButton).toBeVisible();
  67 |     await expect(this.deleteAccountButton).toBeVisible();
  68 |   }
  69 | 
  70 |   async goToBookStore(): Promise<void> {
  71 |     await this.goToBookStoreButton.click();
  72 |     await this.page.waitForURL('**/books');
  73 |   }
  74 | }
  75 | 
  76 | export class BookStorePage {
  77 |   private readonly page: Page;
  78 | 
  79 |   constructor(page: Page) {
  80 |     this.page = page;
  81 |   }
  82 | 
  83 |   private get searchInput(): Locator {
  84 |     return this.page.getByPlaceholder('Type to search');
  85 |   }
  86 | 
  87 |   rowForBook(title: string): Locator {
  88 |     return this.page.getByRole('row', { name: new RegExp(title) });
  89 |   }
  90 | 
  91 |   async searchByTitle(title: string): Promise<void> {
  92 |     await this.searchInput.fill(title);
  93 |   }
  94 | }
```