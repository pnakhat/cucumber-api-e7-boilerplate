@test
Feature: Get bitcoin prices

Scenario: Get latest prices
Given I have valid bitcoin service
When I attempt to get the latest price
Then I should be able to get the price
And the schema matches
