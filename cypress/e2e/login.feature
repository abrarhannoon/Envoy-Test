# cypress/integration/features/login.feature
Feature: Login Functionality
  As a user
  I want to be able to login to the system
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter my phone number as valid Phone Number
    And I enter my password as valid password
    And I click on the Sign In button
    Then I should see the Two Factor Authentication dialog
    When I enter the verification code as
    And I click on the Login button in the dialog
    Then I should be redirected to the home page

  Scenario: Display error message with invalid credentials
    When I enter my phone number as "1111111111"
    And I enter my password as "wrongpassword"
    And I click on the Sign In button
    Then I should see an error message "Phone number or password incorrect. Please try again."



  Scenario: Cancel two-factor authentication
    When I enter my phone number as valid Phone Number
    And I enter my password as valid password
    And I click on the Sign In button
    Then I should see the Two Factor Authentication dialog
    When I click on the Cancel button in the dialog
    Then I should be back on the login page
