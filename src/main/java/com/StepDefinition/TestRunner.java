package com.StepDefinition;



import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



	
@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\SINDHU\\vasavi\\cucumber\\src\\main\\resources\\Feature\\AddCustomer.Feature",glue="com.StepDefinition",plugin="html:target",tags={"@scenario1"})

public class TestRunner {

}
