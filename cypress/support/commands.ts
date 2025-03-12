

import { PHONE_NUMBER, PASSWORD, TWO_FACTOR_CODE } from "./constants";

declare global {
  namespace Cypress {
    interface Chainable {
      login(phoneNumber?: string, password?: string, twoFactorCode?: string): void;
    }
  }
}

Cypress.Commands.add(
  "login", 
  (phoneNumber = PHONE_NUMBER, password = PASSWORD, twoFactorCode = TWO_FACTOR_CODE) => {
    cy.visit("/home");
    cy.get('input#phone[formcontrolname="phone"]').clear().type(phoneNumber);
    cy.get('input#password[formcontrolname="password"]').clear().type(password);
    cy.contains("span", "Sign In").click();

    // Handle two-factor authentication
    cy.get('input[formcontrolname="verify_code"]').should('be.visible');
    cy.get('input[formcontrolname="verify_code"]').clear().type(twoFactorCode);
    cy.get('mat-dialog-container button span.mdc-button__label:contains("Login")').click();
    
   
});
