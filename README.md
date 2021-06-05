This app will host a calendar of events that users can view. The user will be able to display or hide events details and manage the amount of events thet see at one time. 
The user will also be able to access previoulsy cached event details when offline. 


Feature 2
As a user,
I should be able to expand and collapse and event
So that I can reveal or hide the details of that event. 

Given the user hasn’t clicked expand
When looking at an event
Then the event details should default as collapsed

Feature 3
As a user,
I should be able to specify the number of events
So that I can see the number of events that I wish to see. 

Given the user hasn’t specified the number of events they wish to see
When they open the events page
Then the default should be set at 32.

Feature 4
As a user,
I should be able to use the app offline
So that I can see event information even when I’m not on the internet. 

Given the user opens the app
When they don’t have internet
Then the items should be cached so they can still access the event details

Feature 5
As a user,
I should be able to see a calendar of events
So that I can see upcoming events in an organised way. 

Given the user hasn’t searched for events
When they open the app
Then they should see a calendar of events in a chart. 

