# express-server-deployment
HTTP express server deployed via Heroku for code401 lab 01.

Deployment URL-dev: https://eriksavage-server-deploy-dev.herokuapp.com/
Deployment URL-prod: https://eriksavage-server-deploy-prod.herokuapp.com/

![Data Flow](/UML.png)
- image created by Jacob Knack

## Installation

to install run `git clone git@github.com:eriksavage/express-server-deployment.git`

`cd` into express-server-deployment

run `npm install`

## Usage

To start server run : `npm start`

To test server run: `npm test`

## Routes

* GET `/message`: returns a list of Message objects
* POST `/message`: creates a message, saves it and returns the list of messages.

## Features

* Message:
  * Contains String: Text
  * Contains String: Author
  * Messages can be saves
  * Full list of messages read.

