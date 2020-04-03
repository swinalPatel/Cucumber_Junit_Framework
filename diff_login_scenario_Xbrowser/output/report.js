$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into Guru99 banking website",
  "description": "\r\nIn order to access bank website\r\nAs a Manager of bank \r\nI want to login",
  "id": "logging-into-guru99-banking-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Logging in Guru99 banking website",
  "description": "",
  "id": "logging-into-guru99-banking-website;logging-in-guru99-banking-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I go to \"loginURL\" on \"Mozila\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"loginusername\" as \"mngr250129\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"loginpassword\" as \"hymasag\"",
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
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
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
  "duration": 6869835700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "mngr250129",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 78626700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "hymasag",
      "offset": 28
    }
  ],
  "location": "LoginSteps.I_enter_username_password(String,String)"
});
formatter.result({
  "duration": 66605800,
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
  "duration": 1749210100,
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
  "duration": 88766100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 1606550900,
  "status": "passed"
});
});