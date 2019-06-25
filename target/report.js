$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SINDHU/vasavi/cucumber/src/main/resources/Feature/AddCustomer.Feature");
formatter.feature({
  "name": "Add Customer Feature Functional Validation",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The user is in telecom domain",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_in_telecom_domain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Add customer",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_Add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg1"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "name": "the user started filling all the details",
  "rows": [
    {
      "cells": [
        "test",
        "selenium",
        "test@gmail.com",
        "sklm",
        "1234567890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_started_filling_all_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be displayed ID",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_should_be_displayed_ID()"
});
formatter.result({
  "status": "passed"
});
});