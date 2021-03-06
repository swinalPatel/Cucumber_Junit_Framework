Feature: Logging into Guru99 banking website

In order to access bank website
As a Manager of bank 
I want to login

@login
Scenario Outline: Logging in Guru99 banking website

Given I go to "loginURL" on "<Browser>"
And I enter "loginusername" as "<username>" 
And I enter "loginpassword" as "<password>"
And I click on "LoginButton"
Then login should be "<Expected_Result>"

Examples:
|	Browser		|	username	|	password	|	Expected_Result	|
|	Mozila		|	mngr253411	|	YdYsytA		|	success			|
|	Mozila		|	xxxxxxx		|	yyyyyyyy	|	Unsuccess		|
|	Chrome		|	mngr253411	|	YdYsytA		|	success			|
|	Chrome		|	xxxxxxx		|	yyyyyyyy	|	Unsuccess		|

