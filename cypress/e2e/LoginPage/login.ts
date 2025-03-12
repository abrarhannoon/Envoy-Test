import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { PHONE_NUMBER, PASSWORD, TWO_FACTOR_CODE } from '../../support/constants';
import LoginPageActions from '../../PageObjects/LoginPage/actions';
import LoginPageAssertions from '../../PageObjects/LoginPage/assertions';


const loginPageActions = new LoginPageActions();
const loginPageAssertions = new LoginPageAssertions();

Given('I am on the login page', () => {
  loginPageActions.openLoginPage();
  loginPageAssertions.expectLoginPageToBeVisible();
});

When('I enter my phone number as valid Phone Number', () => {
  loginPageActions.typeInPhoneNumberInputField(PHONE_NUMBER);
});

When('I enter my phone number as {string}', (phoneNumber: string) => {
  loginPageActions.typeInPhoneNumberInputField(phoneNumber);
});


When('I enter my password as valid password', () => {
  loginPageActions.typeInPasswordInputField(PASSWORD);
});

When('I enter my password as {string}', (password: string) => {
  loginPageActions.typeInPasswordInputField(password);
});

When('I click on the Sign In button', () => {
  loginPageActions.clickOnSignInButton();
});

When('I enter the verification code as', () => {
  loginPageActions.enterTwoFactorCode(TWO_FACTOR_CODE);
});


When('I click on the Login button in the dialog', () => {
  loginPageActions.clickOnLoginButtonInTwoFactorDialog();
});

When('I click on the Cancel button in the dialog', () => {
  loginPageActions.clickOnCancelButtonInTwoFactorDialog();
});

Then('I should see the Two Factor Authentication dialog', () => {
  loginPageAssertions.expectTwoFactorDialogToBeVisible();
});

Then('I should be redirected to the home page', () => {
  loginPageAssertions.expectRedirectionToHomePage();
});

Then('I should see an error message {string}', (errorMessage: string) => {
  loginPageAssertions.expectLoginErrorToBeVisible(errorMessage);
});

Then('I should see a required field error for {string}', (fieldName: string) => {
  loginPageAssertions.expectRequiredFieldErrorFor(fieldName);
});

Then('I should be back on the login page', () => {
  loginPageAssertions.expectLoginPageToBeVisible();
});