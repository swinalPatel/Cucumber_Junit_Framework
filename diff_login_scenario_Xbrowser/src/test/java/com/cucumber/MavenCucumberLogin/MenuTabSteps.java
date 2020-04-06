package com.cucumber.MavenCucumberLogin;

import java.util.List;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import com.cucumber.MavenCucumberLogin.WebConnector;

public class MenuTabSteps {

		WebConnector Selenium = WebConnector.getInstance();
		
		@Given("^I am logged in \"([^\\\"]*)\"$")
		public void I_am_logged_in(String browser)
		{
			Selenium.openBrowser(browser);
			if(!Selenium.isLoggedIn()) {
				Selenium.navigate("loginURL");
				System.out.println("login in to given URL");
				Selenium.doDefaultLogin();
				System.out.println("login success");
			}
			Selenium.log("login in to " + browser);

		}
		
		@Then ("^Check all tabs on the manager home page should be present$")
		public void check_all_tabs_present(DataTable table) {
			List<String> names = table.asList(String.class);
			System.out.println("**************************************");
			System.out.println(names.toString());
			for(int i=0; i<names.size(); i++) {
				Assert.assertTrue("Tab not found on manager home page" + names.get(i), Selenium.isElementPresent(names.get(i)));
			Selenium.log("Checking " + names.get(i) + " tab is present on the home page"); }

		}
		
		
		
		@And ("^I click on \"([^\\\"]*)\" after login$")
		public void I_click_on_afterlogin(String object) {
			Selenium.click(object);
			System.out.println("clicked on the object " + object);
			Selenium.log("clicked on the tab " + object);
		}
		
		@Then ("^\"([^\\\"]*)\" element should be present$")
		public void element_present(String fieldname) {
			Assert.assertTrue("object not found " + fieldname , Selenium.isElementPresent(fieldname));
			Selenium.log(fieldname + " element should be present");
		}
	}

