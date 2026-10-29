import { expect, type Locator, type Page } from '@playwright/test';

import { demoQaUrl } from '../utils/demoqa.data';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get usernameInput(): Locator {
    return this.page.getByPlaceholder('UserName');
  }

  private get passwordInput(): Locator {
    return this.page.getByPlaceholder('Password');
  }

  private get loginButton(): Locator {
    return this.page.getByRole('button', { name: 'Login' });
  }

  async open(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/login`);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('**/profile');
  }

  async openAndLogin(username: string, password: string): Promise<void> {
    await this.open();
    await this.login(username, password);
  }
}

export class ProfilePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get userNameLabel(): Locator {
    return this.page.getByText('User Name :');
  }

  private get goToBookStoreButton(): Locator {
    return this.page.getByRole('button', { name: 'Go To Book Store' });
  }

  private get deleteAccountButton(): Locator {
    return this.page.getByRole('button', { name: 'Delete Account' });
  }

  async expectLoggedInUser(username: string): Promise<void> {
    await expect(this.userNameLabel).toBeVisible();
    await expect(this.page.getByText(username)).toBeVisible();
  }

  async expectProfileActionsVisible(): Promise<void> {
    await expect(this.goToBookStoreButton).toBeVisible();
    await expect(this.deleteAccountButton).toBeVisible();
  }

  async goToBookStore(): Promise<void> {
    await this.goToBookStoreButton.click();
    await this.page.waitForURL('**/books');
  }
}

export class BookStorePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get searchInput(): Locator {
    return this.page.getByPlaceholder('Type to search');
  }

  rowForBook(title: string): Locator {
    return this.page.getByRole('row', { name: new RegExp(title) });
  }

  async searchByTitle(title: string): Promise<void> {
    await this.searchInput.fill(title);
  }
}