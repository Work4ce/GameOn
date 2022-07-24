 <h1 align='left'>GAME ON</h2>
---
DESCRIPTION

---
 <h2 align='left'>HOW TO START THE APP</h2>

---

- in your terminal, run npm install or npm -i to install all of your dependencies

- npm run build to compile your files with webpack

- in a separate terminal, run " npm run start " to start up your server

- create a .env file. the template can be copied from the example.env file
---
 <h2 align='left'>SETUP YOUR ENVIRONMENT</h2>

---
The current project is configured for use with MongoDB Cloud. You will need to update the DB server files (DB URI) for your specific configuration. 

In your .env file, add the following environment variables:
  - MONGODB_PASS= if using MongoDB Cloud, use your connection password here
  - USERNAME= if using MongoDB Cloud, use your connection username here
  - MAP_TOKEN= create a MAPBOX account and create an access token
  - CLIENT_ID=
  - CLIENT_SECRET=
  - EXPRESS_SECRET= 
  - DB_URI= your MongoDB connection string

---
 <h2 align='left'>DEPLOYMENT WITH AMAZON WEB SERVICES </h2>

 

---
This project 
---
 <h2 align='left'>INSTRUCTIONS FOR EVENTS LIST (SPORTS DISPLAY) PAGE/COMOPONENTS</h2>

  - There must be at least some seeded data for the page to render the event cards in the browser. 
  - There no way currently to remove an entire event card from the 'current state' of the page, so keep that in mind while navigating. 
  - The 'going/not going' toggle should be toggled according to the current attendees array in the database whether the user joined from a different page/component or not. 
  - Context will be referenced to make use of the current states that are available at runtime. 
  - Both the SportsSelect.jsx component and the Event.jsx component are being rendered on the EventListings.jsx component repesctively. 
  - The EventListings component has functinoality to map through the data being pulled from the database to render each Event.jsx component based off of what is currently being returned from the request handlers in /server/index.js
  
--- 
 <h2 align='left'>KNOWN BUGS</h2>

---
The following are the various bugs we were unable to resolve during the course of our project:

<h4 align='left'>PROFILE COMPONENT</h4>

  - Refreshing the profile page breaks the component and throws the error "Rendered more hooks than during the previous render."

<h4 align='left'>MAP COMPONENT</h4>

  - For events at the same location, map overlaps icon markers and prevents popup of the underlying event.
  - onClick functions do not work within the popup button HTML
  - After a user updates their RSVP and the URL changes with their parameters, refreshing that page breaks that component. For 
  example: localhost:3000/#/map?user=user@gmail.com&userId=62dadc628024c191c8328edd&event=62dadc272bb727037ff7ba04&status=Going

<h4 align='left'>EVENT COMPONENT</h4>

  - Toggle switch triggers multiple times upon click, but only aesthetically, it still only adds or removes once from the database, as inteded. 
  - No ability to delete an event if you no longer want to see it on the page.
  - Dropdown bar dynamically resizes by the lenght of the new category selected, instead of staying a consistent amount of pixelation like other static buttons throughout the program.
  
  - Dropdown does not automatically close upon interaction
  - Toggle switch triggers multiple times upon click

  <h4 align='left'>CREATE EVENT COMPONENT</h4>

  - currently the equipment list doesn't serve any functionality. it is not storing anything in the database.

  - The Calendar date selection wont let you click on a date thats before the current date. but a user can still enter it manually.

  - User will get an error in the dev console if they try to backspace all of the input from the player limit. this was initially done to prevent them from entering a number less than 1.

  - Sometimes addresses entered from google chromes saved addresses will populate the full address inside of the first address field

---
  <h2 align='left'>Available Resources</h2>

  - https://www.mongodb.com/docs/cloud-manager/tutorial/connect-to-mongodb/
  - https://docs.mapbox.com/help/getting-started/access-tokens/
  - https://www.mongodb.com/docs/manual/reference/connection-string/
  - https://reactjs.org/docs/hooks-reference.html#useref
  - https://docs.mapbox.com/mapbox-gl-js/guides/
  - https://visgl.github.io/react-map-gl/docs/api-reference/popup
  - https://mui.com/material-ui/material-icons/
  - https://mui.com/material-ui/customization/color/#main-content 