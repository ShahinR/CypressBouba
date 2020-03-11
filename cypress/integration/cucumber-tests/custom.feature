@feature-tag 

Feature: Client Feature
 
As a valid admin
In order to create a valid client
I want to login successfully to Wiza dashboard

@tag-to-include
Scenario: Client creation
 
Given I am in the Wizaplace login page
When I enter valid credentials
Then I should be able to create a valid client