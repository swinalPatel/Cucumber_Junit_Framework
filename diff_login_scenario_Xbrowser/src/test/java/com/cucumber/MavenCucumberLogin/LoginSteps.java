package com.cucumber.MavenCucumberLogin;

import org.junit.Assert;

import com.cucumber.MavenCucumberLogin.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginSteps {

	WebConnector Selenium = WebConnector.getInstance();

	@Given("^I go to \"([^\"]*)\" on \"([^\\\"]*)\"$")
	public void  I_go_to_(String URL, String browser) throws Exception
	{
		System.out.println("I go to "+ URL +" on "+ browser+ " ");
		Selenium.openBrowser(browser);
		Selenium.navigate(URL);
		Selenium.log(browser + " is opening and navigating to " +URL);
	}
	
	@And("^I enter \"([^\\\"]*)\" as \"([^\\\"]*)\"$")
	public void I_enter_username_password(String object, String text) throws Exception
	{
		System.out.println("I enter "+ object +" as "+ text +" ");
		Selenium.field(object, text);
		Selenium.log("I enter " + object+ " as " + text);
		
	}
	
	@And("^I click on \"([^\\\"]*)\"$")
	public void I_click_on(String object) throws Exception
	{
		System.out.println("I click on "+ object +" ");
		Selenium.click(object);
		Selenium.log("Then I click on " + object);
	}
	
	@Then("^login should be \"([^\\\"]*)\"$")
	public void login_should_be(String expectedResult) throws Exception
	{
		Selenium.log("login should be " + expectedResult);
		System.out.println("login should be "+ expectedResult +" ");
		String actualResult = null;
		boolean result = Selenium.isElementPresent("searchText");
		if(result) 
			actualResult = "success";
		else 
			actualResult = "Unsuccess";
		Assert.assertEquals(expectedResult, actualResult);
		

		}
		
}
