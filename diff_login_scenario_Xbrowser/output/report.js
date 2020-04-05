$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into Guru99 banking website",
  "description": "\r\nIn order to access bank website\r\nAs a Manager of bank \r\nI want to login",
  "id": "logging-into-guru99-banking-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginusername\" as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"loginpassword\" as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "login should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
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
      "line": 17,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;1"
    },
    {
      "cells": [
        "Mozila",
        "mngr253411",
        "YdYsytA",
        "success"
      ],
      "line": 18,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;2"
    },
    {
      "cells": [
        "Mozila",
        "xxxxxxx",
        "yyyyyyyy",
        "Unsuccess"
      ],
      "line": 19,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;3"
    },
    {
      "cells": [
        "Chrome",
        "mngr253411",
        "YdYsytA",
        "success"
      ],
      "line": 20,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;4"
    },
    {
      "cells": [
        "Chrome",
        "xxxxxxx",
        "yyyyyyyy",
        "Unsuccess"
      ],
      "line": 21,
      "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginusername\" as \"mngr253411\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"loginpassword\" as \"YdYsytA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 7292702800,
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
  "duration": 205075700,
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
  "duration": 83365100,
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
  "duration": 1013351300,
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
  "duration": 28722100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginusername\" as \"xxxxxxx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"loginpassword\" as \"yyyyyyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 884382900,
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
  "duration": 46425100,
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
  "duration": 91108800,
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
  "duration": 269988500,
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
  "duration": 79302100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Dismissed user prompt dialog: User or Password is not valid: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7C88RL8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200309095159, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 20216, moz:profile: C:\\Users\\swina\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b1a536f2-8be0-4fd9-9a70-da2568284700\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027addcustomerpage.php\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.cucumber.MavenCucumberLogin.WebConnector.isElementPresent(WebConnector.java:79)\r\n\tat com.cucumber.MavenCucumberLogin.LoginSteps.login_should_be(LoginSteps.java:43)\r\n\tat ✽.Then login should be \"Unsuccess\"(login.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginusername\" as \"mngr253411\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"loginpassword\" as \"YdYsytA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 11182385000,
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
  "duration": 861411300,
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
  "duration": 316578100,
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
  "duration": 916348900,
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
  "duration": 66736700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I go to \"loginURL\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginusername\" as \"xxxxxxx\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"loginpassword\" as \"yyyyyyyy\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on \"LoginButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 652232400,
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
  "duration": 404435700,
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
  "duration": 277393700,
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
  "duration": 490943700,
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
  "duration": 7702600,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : User or Password is not valid}\n  (Session info: chrome\u003d80.0.3987.149): User or Password is not valid\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7C88RL8\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\swina\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50351}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 498c448ae2f6d01a85309055e0c7d251\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027addcustomerpage.php\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat com.cucumber.MavenCucumberLogin.WebConnector.isElementPresent(WebConnector.java:79)\r\n\tat com.cucumber.MavenCucumberLogin.LoginSteps.login_should_be(LoginSteps.java:43)\r\n\tat ✽.Then login should be \"Unsuccess\"(login.feature:14)\r\n",
  "status": "failed"
});
formatter.uri("menu.feature");
formatter.feature({
  "line": 1,
  "name": "After login  into Guru99 banking Testing the top Menu",
  "description": "\r\nAfter login into Guru99 banking website\r\nAs a Bank Manager \r\nI want to access other banking facilities",
  "id": "after-login--into-guru99-banking-testing-the-top-menu",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Testing Top Menu",
  "description": "",
  "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am logged in \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Check all tabs on the manager home page should be present",
  "rows": [
    {
      "cells": [
        "newcustomer"
      ],
      "line": 12
    },
    {
      "cells": [
        "editcustomer"
      ],
      "line": 13
    },
    {
      "cells": [
        "deletecustomer"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \"\u003cmenutabbutton\u003e\" after login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "\"\u003cverificationobject\u003e\" element should be present",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;",
  "rows": [
    {
      "cells": [
        "browser",
        "menutabbutton",
        "verificationobject"
      ],
      "line": 19,
      "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;1"
    },
    {
      "cells": [
        "Chrome",
        "newcustomer",
        "custnamefield"
      ],
      "line": 20,
      "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;2"
    },
    {
      "cells": [
        "Chrome",
        "editcustomer",
        "custIDfield"
      ],
      "line": 21,
      "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;3"
    },
    {
      "cells": [
        "Chrome",
        "deletecustomer",
        "custDelete"
      ],
      "line": 22,
      "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Testing Top Menu",
  "description": "",
  "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am logged in \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Check all tabs on the manager home page should be present",
  "rows": [
    {
      "cells": [
        "newcustomer"
      ],
      "line": 12
    },
    {
      "cells": [
        "editcustomer"
      ],
      "line": 13
    },
    {
      "cells": [
        "deletecustomer"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \"newcustomer\" after login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "\"custnamefield\" element should be present",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 16
    }
  ],
  "location": "MenuTabSteps.I_am_logged_in(String)"
});
formatter.result({
  "duration": 22462625800,
  "status": "passed"
});
formatter.match({
  "location": "MenuTabSteps.check_all_tabs_present(DataTable)"
});
formatter.result({
  "duration": 80322300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newcustomer",
      "offset": 12
    }
  ],
  "location": "MenuTabSteps.I_click_on_afterlogin(String)"
});
formatter.result({
  "duration": 456548700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "custnamefield",
      "offset": 1
    }
  ],
  "location": "MenuTabSteps.element_present(String)"
});
formatter.result({
  "duration": 18085200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Testing Top Menu",
  "description": "",
  "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am logged in \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Check all tabs on the manager home page should be present",
  "rows": [
    {
      "cells": [
        "newcustomer"
      ],
      "line": 12
    },
    {
      "cells": [
        "editcustomer"
      ],
      "line": 13
    },
    {
      "cells": [
        "deletecustomer"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \"editcustomer\" after login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "\"custIDfield\" element should be present",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 16
    }
  ],
  "location": "MenuTabSteps.I_am_logged_in(String)"
});
formatter.result({
  "duration": 22551100,
  "status": "passed"
});
formatter.match({
  "location": "MenuTabSteps.check_all_tabs_present(DataTable)"
});
formatter.result({
  "duration": 80276300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "editcustomer",
      "offset": 12
    }
  ],
  "location": "MenuTabSteps.I_click_on_afterlogin(String)"
});
formatter.result({
  "duration": 450932000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "custIDfield",
      "offset": 1
    }
  ],
  "location": "MenuTabSteps.element_present(String)"
});
formatter.result({
  "duration": 45733400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Testing Top Menu",
  "description": "",
  "id": "after-login--into-guru99-banking-testing-the-top-menu;testing-top-menu;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@menu"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am logged in \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Check all tabs on the manager home page should be present",
  "rows": [
    {
      "cells": [
        "newcustomer"
      ],
      "line": 12
    },
    {
      "cells": [
        "editcustomer"
      ],
      "line": 13
    },
    {
      "cells": [
        "deletecustomer"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \"deletecustomer\" after login",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "\"custDelete\" element should be present",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 16
    }
  ],
  "location": "MenuTabSteps.I_am_logged_in(String)"
});
formatter.result({
  "duration": 22994100,
  "status": "passed"
});
formatter.match({
  "location": "MenuTabSteps.check_all_tabs_present(DataTable)"
});
formatter.result({
  "duration": 80531800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deletecustomer",
      "offset": 12
    }
  ],
  "location": "MenuTabSteps.I_click_on_afterlogin(String)"
});
formatter.result({
  "duration": 501167600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "custDelete",
      "offset": 1
    }
  ],
  "location": "MenuTabSteps.element_present(String)"
});
formatter.result({
  "duration": 38397800,
  "status": "passed"
});
});