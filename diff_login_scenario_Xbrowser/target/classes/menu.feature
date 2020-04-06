Feature: After login  into Guru99 banking Testing the top Menu 

After login into Guru99 banking website
As a Bank Manager 
I want to access other banking facilities

@menu
Scenario Outline: Testing Top Menu

Given I am logged in "<browser>"
Then Check all tabs on the manager home page should be present
|	newcustomer		|
|	editcustomer	|
|	deletecustomer	|
And I click on "<menutabbutton>" after login
Then "<verificationobject>" element should be present

Examples:
|	browser	|	menutabbutton	|	verificationobject	|
|	Chrome 	|	newcustomer		|	custnamefield		|
|	Chrome	|	editcustomer	|	custIDfield			|
|	Chrome	|	deletecustomer	|	custDelete			|