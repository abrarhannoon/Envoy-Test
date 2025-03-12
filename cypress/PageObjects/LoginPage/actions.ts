// PageObjects/loginPage/actions.ts
export class LoginPageActions {
    openLoginPage() {
      cy.visit('/home');
      return this;
    }
    
    typeInPhoneNumberInputField(phoneNumber: string) {
        cy.contains('mat-label', 'Phone number')
        .parents()      // Gets all ancestors
        .eq(0)          // The closest ancestor 
        .find('input[name="phone"]') // Finds the input by name
      .clear().type(phoneNumber);
      return this;
    }
    
    typeInPasswordInputField(password: string) {
        cy.contains('mat-label', 'Password')
        .parents()      // Gets all ancestors
        .eq(0)          // The closest ancestor (probably the wrapping div)
        .find('input[name="password"]').
      clear().type(password);
      return this;
    }
    
    clickOnSignInButton() {
      cy.contains("span", "Sign In").parents().eq(1).find('button').click();
      return this;
    }
    
    enterTwoFactorCode(code: string) {
      cy.get('input[name="verify_code"]').clear().type(code);
      return this;
    }
    
    clickOnLoginButtonInTwoFactorDialog() {
      cy.contains("span", "Login").parents().eq(1).find('button').click();
      return this;
    }
    
    clickOnCancelButtonInTwoFactorDialog() {
      cy.contains("span", "Cancel").parents().eq(1).find('button').click();
      return this;
    }
    
    login(phoneNumber: string, password: string, twoFactorCode: string) {
      this.openLoginPage();
      this.typeInPhoneNumberInputField(phoneNumber);
      this.typeInPasswordInputField(password);
      this.clickOnSignInButton();
      this.enterTwoFactorCode(twoFactorCode);
      this.clickOnLoginButtonInTwoFactorDialog();
      return this;
    }
  }

  export default LoginPageActions;
  
  