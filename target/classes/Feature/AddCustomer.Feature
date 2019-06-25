@reg1
Feature: Add Customer Feature Functional Validation
  I want to use this template for my feature file
  
  Background:
  Given The user is in telecom domain
    And the user click on Add customer  

 @scenario
  Scenario: Title of your scenario
  
    When the user is filling all the details
    And the user click on Submit button
    Then the user should be displayed ID
    
    @scenario1

Scenario: Title of your scenario1

    When the user started filling all the details
    |test|selenium|test@gmail.com|sklm|1234567890|
    And the user click on Submit button
    Then the user should be displayed ID
    
    @scenario2
    
   Scenario: Title of your scenario2
   
    When the user has filling all the details
    |Firstname|test|
    |Lastname|selenium|
    |Email ID|test@gmail.com|
    |Address|sklm|
    |Telephone No|1234567890|
    And the user click on Submit button
    Then the user should be displayed ID