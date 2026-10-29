import { APIRequestContext, APIResponse } from '@playwright/test';
import { demoQaUrl } from './demoqa.data';

export type RegisterUserPayload = {
  userName: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export type RegisterUserResponse = {
  userID: string;
  username: string;
  books: string[];
};

export class DemoQaAPI {
  constructor(private readonly apiRequest: APIRequestContext) {}

  async registerUser(payload: RegisterUserPayload): Promise<RegisterUserResponse> {
    const response = await this.apiRequest.post(`${demoQaUrl}/Account/v1/User`, {
      data: payload,
    });

    if (!response.ok()) {
      throw new Error(`Registration failed: ${response.status()} ${await response.text()}`);
    }

    return response.json();
  }

}
