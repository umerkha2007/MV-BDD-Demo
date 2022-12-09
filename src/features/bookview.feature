# As a user, I want to view an ordered list of books
# from Project Gutenberg and download different versions
# The card should contain the following information:
#  - The title of the book - truncated with an ellipsis after 3 lines
#  - The download count like `Downloads: {{count}}`
#  - The first author in the lists name

#  - The card should contain a button for downloading that book
#  - If an API error occurs:
#  - No books should be shown
#  - The text `An error occurred. Please try again later` should be displayed


Feature: View Books

# Display books from the Gutenberg api in card components 
# order by number of downloads (descending)
Scenario: Homepage shows List of Books in Descending order of Number of downloads
    Given Books exist in the database
    When User Visits the home url
    Then System should display Each Book in Card components
    And Each book should be displayed by the order of number of downloads
    And Each book has a title, download count, first author
    And Each Title should be truncated with an ellipsis after 3 lines
    And download count should display like `Downloads: {{count}}`
    And Each book should contain a download button
    
Scenario: User downloads a book
    Given atleast one book exists
    When User clicks the download button
    Then book is downloaded to user's file System
    
Scenario: System displays error message on api error
    Given system calls view api
    And api responds
    And User does not have network issues
    When api error occurs
    Then books list should be empty
    And `An error occurred. Please try again later` should be shown to the user

