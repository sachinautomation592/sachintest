import path from 'path';

import { expect, test } from '@playwright/test';

import { PracticeFormPage } from '../pages/practice-form.page';
import testData from '../fixtures/data/testdata.json';

const uploadFilePath = path.resolve(process.cwd(),'fixtures', 'images', 'skillsbadge.png');
const timestamp = Date.now();

const getScreenshotPath = (testName: string, pointName: string): string => {
  return path.resolve(process.cwd(), 'screenshots', `${testName}-${pointName}-${timestamp}.png`);
};

test.describe('Form interactions and validation', () => {
  test('interacts with textboxes, radio, checkbox, file upload and submits', async ({ page }) => {
    const formPage = new PracticeFormPage(page);
    await formPage.open();

    await formPage.expectCoreInputsVisible();

    await formPage.fillBasicDetails(testData.formData);
    await page.screenshot({ path: getScreenshotPath('form-submission', '01-after-basic-details'), fullPage: true });

    await formPage.selectGenderByIndex(1);
    await formPage.expectGenderChecked(1);
    
    await formPage.selectHobbyByIndex(1);
    await formPage.expectHobbyChecked(1);
  
    await formPage.uploadPicture(uploadFilePath);
    await formPage.expectUploadedPicture(/skillsbadge\.png$/);
    await page.screenshot({ path: getScreenshotPath('form-submission', '02-after-file-upload'), fullPage: true });

    await formPage.submit();

    await formPage.expectSubmissionModalVisible();
    await page.screenshot({ path: getScreenshotPath('form-submission', '03-submission-modal-visible'), fullPage: true });

    await formPage.expectSubmissionContains(testData.expectedSubmissionData.fullName);
    await formPage.expectSubmissionContains(testData.expectedSubmissionData.email);
    await formPage.expectSubmissionContains(testData.expectedSubmissionData.mobile);
  
  });

  test('shows validation for missing mandatory fields', async ({ page }) => {
    const formPage = new PracticeFormPage(page);
    await formPage.open();
    await formPage.submit();
  
    await formPage.expectSubmissionModalHidden();

    const firstNameMissing = await formPage.isFirstNameMissing();
    const lastNameMissing = await formPage.isLastNameMissing();
    const mobileMissing = await formPage.isMobileMissing();

    expect(firstNameMissing).toBe(true);
    expect(lastNameMissing).toBe(true);
    expect(mobileMissing).toBe(true);
    
    await page.screenshot({ path: getScreenshotPath('validation-missing-fields', '01-validation-errors-visible'), fullPage: true });
  });

  test('shows validation for invalid email and invalid number', async ({ page }) => {
    const formPage = new PracticeFormPage(page);
    await formPage.open();

    await formPage.fillNameOnly('Sachin', 'Tambe');
    await formPage.selectGenderByIndex(2);
  
    await formPage.fillBasicDetails(testData.invalidFormData);
    
    const emailIsValid = await formPage.isEmailValid();
    const mobileIsValid = await formPage.isMobileValid();

    expect(emailIsValid).toBe(false);
    expect(mobileIsValid).toBe(false);
  
    await formPage.submit();
    await formPage.expectSubmissionModalHidden();
    await page.screenshot({ path: getScreenshotPath('validation-invalid-data', '01-submission-blocked'), fullPage: true });
  });
});