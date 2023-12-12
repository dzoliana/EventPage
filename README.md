# Event Page Project

## Project summary

- The project represents an exercise in learning React Router (ReactRouter branch).
- This project represents an exercise in learning Authentication (Authentication branch). Authentication involves securing certain backend routes, making them inaccessible to anyone without authentication.

<h4 align="center">Welcome page</h4>

<p align="center">
 <img src="/src/pics/welcome.png" alt="drawing" width="500"/>
</p>

<h4 align="center">Authentication page</h4>

<p align="center">
 <img src="/src/pics/authentication.png" alt="drawing" width="500"/>
</p>

<h4 align="center">Events page</h4>

<p align="center">
 <img src="/src/pics/events.png" alt="drawing" width="500"/>
</p>

<h4 align="center">New Event</h4>

<p align="center">
 <img src="/src/pics/newEvent.png" alt="drawing" width="500"/>
</p>

## Getting started

This project actually contains two projects:

- A React.js application (i.e., the frontend SPA)
- A dummy backend API to which the React app can "talk" (to send + fetch data)

You must run "npm install" in both project folders.

Thereafter, you can start the dummy backend API server via "npm start" (inside the "backend-api" folder).
The React app dev server is then also started via "npm start" (though inside the "react-frontend" folder).

You MUST have both servers (backend + frontend) up and running for the projects to work.

The dummy backend API does not use any external database - instead the dummy data is saved to an "events.json" file inside the project folder.

## Routing

- General Route Configuration

  - how to generally configure routes to ensure the loading of different components for different paths

- Error Handling and Layout Setup

  - how to handle errors and set up a layout that include multiple routes

- Nested Routes

  - Explore nested routes, allowing for a structured hierarchy of routes

- Data Fetching and Submission

  - setting up data fetching and submission using loaders and actions

- Advanced Use Cases

  - understood advanced use cases, such as utilizing useFetcher for fetching or loading data behind the scenes without navigation

- Deferred Data Fetching

  - "defer" feature for deferring data fetching, useful in cases of slow backends or when you want to display some data before all data is available

## Authentication

- Project Setup

  - Upgrading React Router project

- Working with Query Parameters

  - Changing state base logic with query parameters
  - To specify how the component is rendered (login or signup)

- Implementing Auth Action

  - Ability to switch between different modes (signup, login)
  - Focus on the implementation of authentication and enable adding users to dummy backend.

- Validating User Input and Outputing Validation Errors

  - Importance of handling validation errors and authentication-related errors in the form context.

- Adding User Login and Logout

  - The need to update the user interface based on the current authentication status.
  - It considers the need to hide or display certain elements depending on the existence of the token.

- Attaching Auth Tokens to Outgoing Requests

  - Adding tokens to outgoing requests and storing the obtained token from the backend after login or signup.
  - Illustrates the successful implementation of tokens for all secured routes on the backend.
  - Validates the functionality of delete, add and edit events with added token.

- Adding Route Protection

  - Prevent the user from manually accessing some routes when not logged in.
  - Solution: Adding a loader function that checks for the existence of the token and redirects the user if the token is not present.

- Adding Automatic Logout and token Expiration

  - automatic logout after 1 hour (token is deleted from local storage)
  - setting the actual token expiration
