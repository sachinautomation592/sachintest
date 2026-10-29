import { expect, type Locator, type Page } from '@playwright/test';

import { demoQaUrl } from '../utils/demoqa.data';

export type PracticeFormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

export class PracticeFormPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get heading(): Locator {
    return this.page.getByRole('heading', { name: 'Practice Form' });
  }

  private get firstNameInput(): Locator {
    return this.page.locator('#firstName');
  }

  private get lastNameInput(): Locator {
    return this.page.locator('#lastName');
  }

  private get emailInput(): Locator {
    return this.page.locator('#userEmail');
  }

  private get mobileInput(): Locator {
    return this.page.locator('#userNumber');
  }

  private get submitButton(): Locator {
    return this.page.getByRole('button', { name: 'Submit' });
  }

  private get modalContent(): Locator {
    return this.page.locator('.modal-content');
  }

  private get modalTitle(): Locator {
    return this.page.locator('#example-modal-sizes-title-lg');
  }

  private get summaryTableBody(): Locator {
    return this.page.locator('tbody');
  }

  private get uploadInput(): Locator {
    return this.page.locator('#uploadPicture');
  }

  async open(): Promise<void> {
    await this.page.goto(`${demoQaUrl}/automation-practice-form`);
    await expect(this.heading).toBeVisible();

    // Remove floating ads that can intercept clicks in CI/headless runs.
    await this.page.addStyleTag({
      content: '#fixedban, .adsbygoogle, iframe[id^="google_ads"] { display: none !important; }',
    });
  }

  async expectCoreInputsVisible(): Promise<void> {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.mobileInput).toBeVisible();
  }

  async fillBasicDetails(data: PracticeFormData): Promise<void> {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.mobileInput.fill(data.mobile);
  }

  async fillNameOnly(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async selectGenderByIndex(index: 1 | 2 | 3): Promise<void> {
    await this.page.locator(`label[for="gender-radio-${index}"]`).click();
  }

  async expectGenderChecked(index: 1 | 2 | 3): Promise<void> {
    await expect(this.page.locator(`#gender-radio-${index}`)).toBeChecked();
  }

  async selectHobbyByIndex(index: 1 | 2 | 3): Promise<void> {
    await this.page.locator(`label[for="hobbies-checkbox-${index}"]`).click();
  }

  async expectHobbyChecked(index: 1 | 2 | 3): Promise<void> {
    await expect(this.page.locator(`#hobbies-checkbox-${index}`)).toBeChecked();
  }

  async uploadPicture(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  async expectUploadedPicture(fileNamePattern: RegExp): Promise<void> {
    await expect(this.uploadInput).toHaveValue(fileNamePattern);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async expectSubmissionModalVisible(): Promise<void> {
    await expect(this.modalContent).toBeVisible();
    await expect(this.modalTitle).toHaveText('Thanks for submitting the form');
  }

  async expectSubmissionContains(text: string): Promise<void> {
    await expect(this.summaryTableBody).toContainText(text);
  }

  async expectSubmissionModalHidden(): Promise<void> {
    await expect(this.modalContent).toBeHidden();
  }

  async isFirstNameMissing(): Promise<boolean> {
    return this.firstNameInput.evaluate((input) => {
      const element = input as HTMLInputElement;
      return !element.checkValidity() && element.validity.valueMissing;
    });
  }

  async isLastNameMissing(): Promise<boolean> {
    return this.lastNameInput.evaluate((input) => {
      const element = input as HTMLInputElement;
      return !element.checkValidity() && element.validity.valueMissing;
    });
  }

  async isMobileMissing(): Promise<boolean> {
    return this.mobileInput.evaluate((input) => {
      const element = input as HTMLInputElement;
      return !element.checkValidity() && element.validity.valueMissing;
    });
  }

  async isEmailValid(): Promise<boolean> {
    return this.emailInput.evaluate((input) => (input as HTMLInputElement).checkValidity());
  }

  async isMobileValid(): Promise<boolean> {
    return this.mobileInput.evaluate((input) => (input as HTMLInputElement).checkValidity());
  }
}