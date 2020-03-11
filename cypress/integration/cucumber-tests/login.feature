Feature: Login Feature
 
As a valid admin
In order to create a merchant, product or customer
I want to login successfully to Wiza dashboard
 
Scenario: Login Validation
 
Given I am in the Wizaplace login page
When I enter valid credentials
Then I should be able to login successfully