$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:com/testing/login/Login.feature");
formatter.feature({
  "name": "Logging into Guru99 banking website",
  "description": "In order to access bank website\nAs a Manager of bank \nI want to login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Logging in Guru99 banking website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"loginusername\" as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "name": "login should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Browser",
        "username",
        "password",
        "Expected_Result"
      ]
    },
    {
      "cells": [
        "Mozila",
        "mngr250129",
        "hymasag",
        "success"
      ]
    },
    {
      "cells": [
        "Mozila",
        "xxxxxxx",
        "yyyyyyyy",
        "Unsuccess"
      ]
    },
    {
      "cells": [
        "Chrome",
        "xxxxxxx",
        "yyyyyyyy",
        "Unsuccess"
      ]
    },
    {
      "cells": [
        "Chrome",
        "mngr250129",
        "hymasag",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Logging in Guru99 banking website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_go_to_(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginusername\" as \"mngr250129\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"hymasag\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testing.login.LoginTest.login_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Logging in Guru99 banking website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_go_to_(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginusername\" as \"xxxxxxx\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"yyyyyyyy\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be \"Unsuccess\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testing.login.LoginTest.login_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: Dismissed user prompt dialog: User or Password is not valid: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7C88RL8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 9568, moz:profile: C:\\Users\\swina\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f1d6b4d8-a838-498b-99b3-c43e082155cc\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027addcustomerpage.php\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.testing.util.WebConnector.isElementPresent(WebConnector.java:78)\r\n\tat com.testing.login.LoginTest.login_should_be(LoginTest.java:45)\r\n\tat ✽.login should be \"Unsuccess\"(classpath:com/testing/login/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Logging in Guru99 banking website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_go_to_(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginusername\" as \"xxxxxxx\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"yyyyyyyy\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be \"Unsuccess\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testing.login.LoginTest.login_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : User or Password is not valid}\n  (Session info: chrome\u003d80.0.3987.149): User or Password is not valid\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7C88RL8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\swina\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63490}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bc34f46a3735f88cad7276972adac605\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027addcustomerpage.php\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.testing.util.WebConnector.isElementPresent(WebConnector.java:78)\r\n\tat com.testing.login.LoginTest.login_should_be(LoginTest.java:45)\r\n\tat ✽.login should be \"Unsuccess\"(classpath:com/testing/login/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Logging in Guru99 banking website",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_go_to_(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginusername\" as \"mngr250129\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"hymasag\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_enter_username_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.testing.login.LoginTest.I_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.testing.login.LoginTest.login_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});