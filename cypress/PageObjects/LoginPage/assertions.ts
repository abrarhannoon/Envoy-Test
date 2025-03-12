export class LoginPageAssertions {
    expectLoginPageToBeVisible() {
      cy.url().should('include', '/home');
      cy.contains('mat-label', 'Phone number')
      .parents()      // Gets all ancestors
      .eq(0)          // The closest ancestor 
      .find('input[name="phone"]').should('be.visible');

      cy.contains('mat-label', 'Password')
      .parents()      // Gets all ancestors
      .eq(0)          // The closest ancestor (probably the wrapping div)
      .find('input[name="password"]').should('be.visible');
      return this;
    }
    
    expectTwoFactorDialogToBeVisible() {
      cy.contains("h2", "Two Factor Authentication").should('be.visible');
      cy.get('input[name="verify_code"]').should('be.visible');
      return this;
    }
    
    expectLoginErrorToBeVisible(errorMessage:string) {
      cy.contains(errorMessage).should('be.visible');
      return this;
    }
    
    expectRedirectionToHomePage() {
      cy.url().should('include', 'reservations/live');
      return this;
    }
    
    expectRequiredFieldErrorFor(fieldName: string) {
      cy.contains('The Field is Required').should('be.visible');
      return this;
    }
  }
  
  export default LoginPageAssertions;