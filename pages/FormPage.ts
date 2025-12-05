import { Page } from '@playwright/test';

export class FormPage {

  private page: Page;

  private userFullNameInput: string;
  private emailInput: string;
  private currentAddressInput: string;
  private permanentAddressInput: string;
  private submitButton: string;

  constructor(page: Page, formSelector: string) {
    this.page = page;

    this.userFullNameInput = `${formSelector} #userName`;
    this.emailInput = `${formSelector} #userEmail`;
    this.currentAddressInput = `${formSelector} #currentAddress`;
    this.permanentAddressInput = `${formSelector} #permanentAddress`;
    this.submitButton = `${formSelector} #submit`;
  }

  async submitForm(
    userFullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string
  ) {
    await this.page.fill(this.userFullNameInput, userFullName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.currentAddressInput, currentAddress);
    await this.page.fill(this.permanentAddressInput, permanentAddress);
    await this.page.click(this.submitButton);
  }
}