# Event Page Project

## Project summary

The project represents an exercise in learning React Router.

### General Route Configuration

- how to generally configure routes to ensure the loading of different components for different paths

### Error Handling and Layout Setup

- how to handle errors and set up a layout that include multiple routes

### Nested Routes

- Explore nested routes, allowing for a structured hierarchy of routes

### Data Fetching and Submission

- setting up data fetching and submission using loaders and actions

### Advanced Use Cases

- understood advanced use cases, such as utilizing useFetcher for fetching or loading data behind the scenes without navigation

### Deferred Data Fetching

- "defer" feature for deferring data fetching, useful in cases of slow backends or when you want to display some data before all data is available

## Getting started

This project actually contains two projects:

- A React.js application (i.e., the frontend SPA)
- A dummy backend API to which the React app can "talk" (to send + fetch data)

You must run "npm install" in both project folders.

Thereafter, you can start the dummy backend API server via "npm start" (inside the "backend-api" folder).
The React app dev server is then also started via "npm start" (though inside the "react-frontend" folder).

You MUST have both servers (backend + frontend) up and running for the projects to work.

The dummy backend API does not use any external database - instead the dummy data is saved to an "events.json" file inside the project folder.
