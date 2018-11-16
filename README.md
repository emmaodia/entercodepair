[![Build Status](https://travis-ci.com/emmaodia/entercodepair.svg?branch=master)](https://travis-ci.com/emmaodia/entercodepair)
[![Coverage Status](https://coveralls.io/repos/github/ascii-dev/maintenance-tracker/badge.svg?branch=develop)](https://coveralls.io/github/ascii-dev/maintenance-tracker?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/c961accccb9c57c80a68/maintainability)](https://codeclimate.com/github/ascii-dev/maintenance-tracker/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c961accccb9c57c80a68/test_coverage)](https://codeclimate.com/github/ascii-dev/maintenance-tracker/test_coverage)

# Code Pair
Code Pair is tool that Developers use to find people in their immediate locations to work with on Projects.
They can find people around them and schedule meetings, initiate projects, set a tracker on such projects, monitor their projects and see it all the way through to launch.
Code pair will send constant reminders and notifications on Project and Tasks status.

### Features
**There are _ADMIN_ and _USERS_ **
* All Visitors should be able to view landing and about page of this tool.
* Users can create an account and log in.
* Users have a dashboard.
* The users should be able to view other users in their location and other locations.
  - Users can be found per location.
* A Users should be able to post into a forum that they are seeking other users to pair with.
* Two users can initiate a real time chat in app.
* Users can open a project tracking board.
*Users can delete their account.

* Admin should be able to monitor user activity to prevent abuse.
* Admin can remove Users from the platform.


## Getting Started
Instructions to get the project running successfully on your local machine.

### Prerequisites
You need to have these installed before cloning the project
* [ReactJS](https://reactjs.org/docs/try-react.html)
* [NodeJS](https://nodejs.org/en/download/) atleast v8.11.2
* [Postgres](https://www.postgresql.org/download/)


### Technologies Used
* ReactJS
* NodeJS
* ExpressJS
* Postgres
* Mocha
* Chai

### Coding Style
[Airbnb JavaScript style guide](https://github.com/airbnb/javascript)

### How To Install
* Clone from github
  ```git clone https://github.com/emmaodia/codepair.git```
* CD into the directory
  ```cd codepair```
* Install dependencies
  ```npm install```
* Install database tables
  ```psql -U [your postgres username] -d [your postgres database] -f tables.sql```
* Copy .env.example file into .env
  ```cp .env.example .env```
* Fill in database fields in the `.env` file created

### How To Run
  ```npm run dev```

### How To Test
  ```npm run local:test```

### Working Endpoints
| Endpoint                              | Functionality                                     |
| ------------------------------------- | ------------------------------------------------- |
| POST /auth/signup                     | Register a user                                   |
| POST /auth/login                      | Login a user                                      |
| GET /users/requests                   | Fetch all the requests of a logged in​ user        |
| GET /users/requests/:requestId        | Fetch a request that belongs to a logged in user  |
| POST /users/requests                  | Create a request                                  |
| PUT /users/requests/:requestId        | Modify a request                                  |
| GET /requests/                        | Fetch all the requests                            |
| PUT /requests/:requestId/approve      | Approve request                                   |
| PUT /requests/:requestId/disapprove   | Disapprove request                                |
| PUT /requests/:requestId/resolve      | Resolve request                                   |

### FrontEnd Routes
| Route		                            | Functionality                                     |
| ------------------------------------| ------------------------------------------------- |
| GET /signup                     		| Register a user                                   |
| GET /login                      		| Login a user                                      |
| GET /dashboard                   		| Fetch all the requests of a logged in​ user        |
| GET /requests/:requestId        		| Fetch a request that belongs to a logged in user  |
| GET /create                  		  	| Create a request                                  |
| GET /requests/edit/:requestId      	| Modify a request                                  |
| GET /admin/                      		| Fetch all the requests                            |
| GET /admin/:requestId      			    | View a single request                             |

## License
This project is licensed under the Apache-2.0 License

## Author
[Emmanuel Oaikhenan](https://twitter.com/@emma_odia)

## Acknowledgements
[FreeCodeCamp](https://medium.freecodecamp.com)<br>
[Papa Google](https://google.com)

## Acces running application
[CodePair on Digital Ocean - FrontEnd](https://entercodepair.tech)<br>
[CodePair on Digital Ocean - api](https://api.entercodepair.tech)<br>
[Docs](https://entercodepair.tech/docs)
