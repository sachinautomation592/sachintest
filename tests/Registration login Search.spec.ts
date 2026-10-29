import path from 'path';

import { expect, test } from '@playwright/test';

import { demoQaPassword, searchTitle, demoQaUrl, searchAuthor, searchPublisher } from '../utils/demoqa.data';
import { DemoQaAPI } from '../utils/api';
import { LoginPage, ProfilePage, BookStorePage } from '../pages/auth.page';
import { UserRegistrationPage } from '../pages/user-registration.page';

const timestamp = Date.now();

const getScreenshotPath = (testName: string, pointName: string): string => {
  return path.resolve(process.cwd(), 'screenshots', `${testName}-${pointName}-${timestamp}.png`);
};

test.describe('Registration login Search', () => {
  const prefix = process.env.TEST_USERNAME_PREFIX;
  let testUsername = `${prefix}${Math.random().toString(36).slice(2, 8)}`;
  let testPassword = process.env.TEST_PASSWORD!;

  test('Test 1: User Registration', async ({ page, request }) => {
    
    const api = new DemoQaAPI(request);
    
    try {
      const registrationResponse = await api.registerUser({
        userName: testUsername,
        password: testPassword,
      });
      
      expect(registrationResponse.userID).toBeTruthy();
      await page.screenshot({ path: getScreenshotPath('registration', '01-user-registered-successfully'), fullPage: true });
    } catch (error) {
      throw new Error(`Failed to register user ${testUsername}`);
    }


  });

  test('Test 2: User Login', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await expect(page).toHaveURL(new RegExp(demoQaUrl + '/login'));

    await page.getByPlaceholder('UserName').fill(testUsername);
    await page.getByPlaceholder('Password').fill(testPassword);

    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/profile');

    const profilePage = new ProfilePage(page);
    await profilePage.expectLoggedInUser(testUsername);
    await profilePage.expectProfileActionsVisible();
    await page.screenshot({ path: getScreenshotPath('login', '01-login-successful'), fullPage: true });
  

  });

  test('Test 3: Search Book in Book Store', async ({ page }) => {
    
    // Step 1: Login first
    const loginPage = new LoginPage(page);
    await loginPage.openAndLogin(testUsername, testPassword);
    
    // Step 2: Navigate to book store
    const profilePage = new ProfilePage(page);
    await profilePage.goToBookStore();
    
    // Step 3: Search for book
    const bookStorePage = new BookStorePage(page);
    await bookStorePage.searchByTitle(searchTitle);
    
    // Add small wait for search results to load
    await page.waitForTimeout(1000);

    const bookRow = bookStorePage.rowForBook(searchTitle);
    await expect(bookRow).toBeVisible();

    // Verify book details are displayed
    const bookTitle = page.getByRole('cell', { name: searchTitle });
    await expect(bookTitle).toBeVisible();

    // Verify author is displayed
    const bookAuthor = page.getByRole('cell', { name: searchAuthor });
    await expect(bookAuthor).toBeVisible();

    // Verify publisher is displayed
    const bookPublisher = page.getByRole('cell', { name: searchPublisher });
    await expect(bookPublisher).toBeVisible();
    await page.screenshot({ path: getScreenshotPath('book-search', '01-book-details-validated'), fullPage: true });
  });
});
