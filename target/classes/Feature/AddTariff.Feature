@reg2
Feature: Title of your feature
  I want to use this template for my feature file
  
  Background:
  Given The user is in Telecom domain
    And the user click on Add Tariff Plan
  
  
  @Tariff
  Scenario: Title of your scenario
    
    When the user is filling all the tariff details
    And the user click on done button
    Then the user should be displayed added tariff plan
    
    @Tariffoutline
    
      Scenario Outline: Title of your scenario outline
      
    When the user has filling all the tariff details"<Monthrent>","<Freeloc>","<Freeint>","<Freesms>","<Localcharges>","<Intercharges>","<Smscharges>"
    And the user click on done button
    Then the user should be displayed added tariff plan
    

    Examples: 
      | Monthrent| Freeloc | Freeint |Freesms|Localcharges|Intercharges|Smscharges|
            | 100| 200 | 50 |100|10|50|10|
            | 101| 200 | 50 |100|10|50|10|
            | 103| 200 | 50 |100|10|50|10|
            | 104| 200 | 50 |100|10|50|10|



