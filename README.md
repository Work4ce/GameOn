 <h2 align='center'>GAME ON</h2>
 
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

 <h2 align='left'>GOOGLE OAUTH</h2>

- Go to google api console website

- create and name project and give it a name then click create

- go to the project and name your app

- create the OAuth client ID and secret in credentials section of your project

- in Application, choose type: web application. fill in the Authorized JavaScript origins as follows:
  in authorized javascript origins: http://localhost:3000
  in authorized redirect URIs: http://localhost:3000/auth/google/callback

- when you receive client ID and client secret, place these values in your .env file

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

 <h2 align='left'>KNOWN BUGS</h2>

---
The following are the various bugs we were unable to resolve during the course of our project:

<h4 align='left'>PROFILE COMPONENT</h4>



<h4 align='left'>MAP COMPONENT</h4>

  - For events at the same location, map overlaps icon markers and prevents popup of the underlying event.
  - onClick functions do not work within the popup button HTML
  - After a user updates their RSVP and the URL changes with their parameters, refreshing that page breaks that component. For 
  example: localhost:3000/#/map?user=user@gmail.com&userId=62dadc628024c191c8328edd&event=62dadc272bb727037ff7ba04&status=Going

<h4 align='left'>EVENT COMPONENT</h4>

  - Dropdown does not automatically close upon interaction
  - Toggle switch triggers multiple times upon click


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

  