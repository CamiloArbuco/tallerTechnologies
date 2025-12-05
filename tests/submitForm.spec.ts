import { test, expect, Page } from '@playwright/test';
import { FormPage } from '../pages/FormPage'; 

test('Fill and submit form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const formPage = new FormPage(page, '#userForm');

  
  await formPage.submitForm(
    'John Doe',
    'john.doe@example.com',
    '123 Main St',
    '456 Secondary St'
  );

  
  const nameOutput = await page.textContent('#name');
  const emailOutput = await page.textContent('#email');
  const currentAddressOutput = await page.textContent('#currentAddress');
  const permanentAddressOutput = await page.textContent('#permanentAddress');

  expect(nameOutput).toBe('Name:John Doe');
  expect(emailOutput).toBe('Email:john.doe@example.com');
  expect(currentAddressOutput).toContain('123 Main St');
  expect(permanentAddressOutput).toContain('456 Secondary St');
});