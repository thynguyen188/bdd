Feature: Add and Remove Items to a cart
    Everybody needs a goPuff basket with snacks

    Scenario: Start with an empty basket
        Given a new user
        When I don't add anything
        Then I should have 0 products in a basket

    Scenario: Lets add a coke
        Given a new user
        When I add a coke
        Then I should have 1 products in a basket
        And it better be a coke

    Scenario: Lets remove a coke
        Given a new user
        When I add a coke
        Then I remove a coke
        And I should have 0 products in a basket

    Scenario: Lets add and remove multiple products
        Given a new user
        When I add a coke
        When I add a sprite
        Then I remove a coke
        And I should have 1 products in a basket
        And it better be a sprite

    Scenario: Calculate simple totals
        Given a new user
        When I add a 2 dollar coke
        Then I should have 1 products in a basket
        And it better be a coke
        And the total should be 2 dollars

    Scenario: Calculate simple totals with remove
        Given a new user
        When I add a 2 dollar coke
        And I add a 2 dollar coke
        And I add a 2 dollar coke
        And I add a 2 dollar coke
        Then I remove a coke
        And the total should be 6 dollars