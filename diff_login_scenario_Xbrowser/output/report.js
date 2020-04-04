$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into Guru99 banking website",
  "description": "\r\nIn order to access bank website\r\nAs a Manager of bank \r\nI want to login",
  "id": "logging-into-guru99-banking-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"loginusername\" as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginpassword\" as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;",
  "rows": [
    {
      "cells": [
        "Browser",
        "username",
        "password",
        "Expected_Result"
      ],
      "line": 16,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;1"
    },
    {
      "cells": [
        "Mozila",
        "mngr253411",
        "YdYsytA",
        "success"
      ],
      "line": 17,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;2"
    },
    {
      "cells": [
        "Mozila",
        "xxxxxxx",
        "yyyyyyyy",
        "Unsuccess"
      ],
      "line": 18,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;3"
    },
    {
      "cells": [
        "Chrome",
        "xxxxxxx",
        "yyyyyyyy",
        "Unsuccess"
      ],
      "line": 19,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;4"
    },
    {
      "cells": [
        "Chrome",
        "mngr253411",
        "YdYsytA",
        "success"
      ],
      "line": 20,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"loginusername\" as \"mngr253411\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginpassword\" as \"YdYsytA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be \"success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozila",
      "offset": 23
    }
  ],
  "location": "LoginSteps.I_go_to_(String,String)"
});
formatter.result({
  "duration": 10702491000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "mngr253411",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 270121800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "YdYsytA",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 85889200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginButton",
      "offset": 12
    }
  ],
  "location": "LoginSteps.I_click_on(String)"
});
formatter.result({
  "duration": 1391157700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginSteps.login_should_be(String)"
});
formatter.result({
  "duration": 37877300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"loginusername\" as \"xxxxxxx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginpassword\" as \"yyyyyyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be \"Unsuccess\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozila",
      "offset": 23
    }
  ],
  "location": "LoginSteps.I_go_to_(String,String)"
});
formatter.result({
  "duration": 1578141200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "xxxxxxx",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 92683800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "yyyyyyyy",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 164185400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginButton",
      "offset": 12
    }
  ],
  "location": "LoginSteps.I_click_on(String)"
});
formatter.result({
  "duration": 482620700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unsuccess",
      "offset": 17
    }
  ],
  "location": "LoginSteps.login_should_be(String)"
});
formatter.result({
  "duration": 127304700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Dismissed user prompt dialog: User or Password is not valid: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7C88RL8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 12412, moz:profile: C:\\Users\\swina\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 86ea5db1-9814-43b8-8e15-37bd65a58da6\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027addcustomerpage.php\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.cucumber.MavenCucumberLogin.WebConnector.isElementPresent(WebConnector.java:79)\r\n\tat com.cucumber.MavenCucumberLogin.LoginSteps.login_should_be(LoginSteps.java:43)\r\n\tat ✽.Then login should be \"Unsuccess\"(login.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"loginusername\" as \"xxxxxxx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginpassword\" as \"yyyyyyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be \"Unsuccess\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LoginSteps.I_go_to_(String,String)"
});
formatter.result({
  "duration": 11903041300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "xxxxxxx",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 966773500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "yyyyyyyy",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 303267400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginButton",
      "offset": 12
    }
  ],
  "location": "LoginSteps.I_click_on(String)"
});
formatter.result({
  "duration": 894936800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unsuccess",
      "offset": 17
    }
  ],
  "location": "LoginSteps.login_should_be(String)"
});
formatter.result({
  "duration": 13900400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : User or Password is not valid}\n  (Session info: chrome\u003d80.0.3987.149): User or Password is not valid\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7C88RL8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\swina\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52576}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f573a8f22aec6e5f36aeb2af8c454e68\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027addcustomerpage.php\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.cucumber.MavenCucumberLogin.WebConnector.isElementPresent(WebConnector.java:79)\r\n\tat com.cucumber.MavenCucumberLogin.LoginSteps.login_should_be(LoginSteps.java:43)\r\n\tat ✽.Then login should be \"Unsuccess\"(login.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"loginusername\" as \"mngr253411\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginpassword\" as \"YdYsytA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "login should be \"success\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "LoginSteps.I_go_to_(String,String)"
});
formatter.result({
  "duration": 1164252200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "mngr253411",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 470646400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "YdYsytA",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 274736500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginButton",
      "offset": 12
    }
  ],
  "location": "LoginSteps.I_click_on(String)"
});
formatter.result({
  "duration": 1028036900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "LoginSteps.login_should_be(String)"
});
formatter.result({
  "duration": 54184000,
  "status": "passed"
});
});