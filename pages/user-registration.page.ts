import { expect, type Dialog, type Locator, type Page } from '@playwright/test';

import { demoQaUrl } from '../utils/demoqa.data';

export type DemoQaRegistrationData = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};

export class UserRegistrationPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get loginButton(): Locator {
    return this.page.getByRole('button', { name: 'Login' });
  }

  private get newUserLink(): Locator {
    return this.page.getByText('New User');
  }

  private get registerHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Register', exact: true });
  }

  private get firstNameInput(): Locator {
    return this.page.locator('#firstname');
  }

  private get lastNameInput(): Locator {
    return this.page.locator('#lastname');
  }

  private get userNameInput(): Locator {
    return this.page.locator('#userName');
  }

  private get passwordInput(): Locator {
    return this.page.locator('#password');
  }

  private get registerButton(): Locator {
    return this.page.getByRole('button', { name: 'Register' });
  }

  private get recaptchaResponseSelector(): string {
    return '#g-recaptcha-response';
  }

  async openBooksPage(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/books`);
  }

  async goToRegisterPageFromBooks(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForURL('**/login');

    await this.newUserLink.click();
    await this.page.waitForURL('**/register');
    await expect(this.registerHeading).toBeVisible();
  }

  async fillRegistrationForm(data: DemoQaRegistrationData): Promise<void> {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.userNameInput.fill(data.userName);
    await this.passwordInput.fill(data.password);
  }

  async clickRegisterButton(): Promise<void> {
    await this.registerButton.click();
  }

  async clickRegisterButtonAndAcceptAlert(expectedAlertMessage = 'User Registered Successfully.'): Promise<void> {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.registerButton.click(),
    ]);
    await expect(dialog.type()).toBe('alert');
    await expect(dialog.message()).toBe(expectedAlertMessage);
    await dialog.accept();
  }

  async acceptAlert(expectedAlertMessage = 'User Registered Successfully.'): Promise<void> {
    const dialog = await this.page.waitForEvent('dialog');
    await expect(dialog.type()).toBe('alert');
    await expect(dialog.message()).toBe(expectedAlertMessage);
    await dialog.accept();
  }
}