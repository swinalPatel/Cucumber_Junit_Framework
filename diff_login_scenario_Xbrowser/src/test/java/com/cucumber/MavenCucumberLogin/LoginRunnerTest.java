package com.cucumber.MavenCucumberLogin;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				plugin= {"html:output"},
				features = {"src/test/resource"},
				tags = {"@login, @menu"}
				)
public class LoginRunnerTest {

}
