## Welcome to my codeChallenge!

[Visit the live site hosted on Heroku](https://spotify-stephaniemanwaring.herokuapp.com/)

First and foremost - thank you for considering me for this once in a lifetime position!

If you have any questions about the app, please don't hesitate to reach out to me directly at stephanie.manwaring@gmail.com

### About the app

This is a small CRUD app where you can:
* view people in the codeChallenge database (each person has an id, name, and favorite city)
* edit a person in codeChallengethe database 
* add people to the codeChallenge database
* query people in the codeChallenge database by ID

codeChallenge is a responsive web app built using the NERRDS stack (Node.js, Express, React, Redux, Database-Sequelize). It uses HTML5, CSS3, and Sass.

It uses [materialize css](http://materializecss.com/) for styling. 


### Code Challenge Client Directions 
To mimick the code challenge guidlines in order please follow these instructions in order: 
*To make a GET request to /people: click on the "view all" tab

*To make a POST request to /people: click on the "add new" tab and enter in a name, and a favorite city for that person. To follow the example given in the guidelines, the name should be Sean and the favorite city should be New York.

*To make a GET request to retrieve the object created in the previous request click on "view all" tab to see what the generated ID for the user is. Then, click on 'view by id' and enter in that id.

*To make a PUT request to /people and modify the attribute city to be “Brooklyn”: from either the 'view all' tab or 'view-by-id' tab, click on the pencil icon to the right of the user you want to upate. A modal will pop up where you can edit the favorite city of that user (and name, if you so choose).

*To make a GET request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, query the database for a user with a specific idea and hit the /people/:userId route simply go to the "view by id" tab and search for an id of an existing person.

*To make a DELETE request to /people/1: Depending on the current database of the deployed app, a user with an ID of 1 may not exist. However, to delete a specific user by id and hit the DELETE /people/:userId route, simply go to the "view all" tab and click on the trash icon next to a user you want to delete.

*To make a GET request to /people: click on the "view-all" tab.


### Prerequisites

Make sure you have the following:

[Node.js (>6.7) and npm](https://nodejs.org/en/)

[PostgreSQL](https://www.postgresql.org/) (be sure this is up and running when you launch)

### Running Locally

Clone the repository.

```
npm install

```
This will install all runtime dependencies, as well as Webpack build and Mocha/Chai/Enzyme testing tools.

Also, make sure to populate the proper environment variables for your local setup!


## Running the app

There are two ways to run the app in development mode:

```
npm run build-watch
npm run dev

```
The first command will run Webpack in watch mode, rebuilding the client static files in '/public' every time a change is made to the source files. The second command will run the Node.js server in development mode.

## Testing

To run the test suite, execute the command `npm test`

The easiest way to test is with [Postman](https://www.getpostman.com/).

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b679dd0210a9500f7fef)










