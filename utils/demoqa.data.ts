import { type Page } from '@playwright/test';

export const demoQaUrl = process.env.DEMO_QA_URL!;
export const demoQaPassword = process.env.DEMO_QA_PASSWORD!;
export const uiRegisteredUsername = process.env.UI_REGISTERED_USERNAME!;
export const searchTitle = process.env.SEARCH_TITLE!;
export const searchAuthor = process.env.SEARCH_AUTHOR!;
export const searchPublisher = process.env.SEARCH_PUBLISHER!;

export type DemoQaUser = {
  userId: string;
  username: string;
  password: string;
  token?: string;
};

export async function loginFromUi(page: Page, user: DemoQaUser): Promise<void> {
  await page.goto(`${demoQaUrl}/login`);
  await page.getByPlaceholder('UserName').fill(user.username);
  await page.getByPlaceholder('Password').fill(user.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/profile');
}