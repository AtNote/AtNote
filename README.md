![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Midterm Project

### Author: Brent W., Siobhan N. & Jon D.

### Links and Resources
[![Build Status](https://www.travis-ci.com/BrentTech/10-project-q.svg?branch=master)](https://www.travis-ci.com/BrentTech/10-project-q)
* [repo](https://github.com/BrentTech/10-project-q)
* [travis](https://www.travis-ci.com/BrentTech/10-project-q)
* [back-end](https://q-brent-jon.herokuapp.com)

### Documentation
* [JSDocs](url)
* [Project Wiki](url)

### Modules
#### `server.js`
##### Exported Values and Methods
`server.js exports the server constructor which includes:

 #####start()
  Method that starts the server.

 #####connect()
 connects each event to a namespace and room.

 #####monitorEvent(event) 
 Takes in an event and pushes it into an array for verifying if it is an allowed event.

#### `router.js`
##### Exported Values and Methods
Touter.js is pulled in by app.js to route url paths, contains:

 #####getNotes(req, res, next)
 Dynamically handles get routes to the database

 #####postNotes(req, res, next)
 Handles post routes to the database

 #####deleteNotes(req, res, next)
 Handles delete routes to database

#### `model.js`
##### Exported Values and Methods
Model.js is a generic data-model class that supports the use of mongo schema and provides methods for REST verbs

 ######post(note)
 Takes in a note object and passes to schema. Returns modeled data and saves to database

 ######get(key, value)
 Creates an object using key and value parameters and uses find() on the database using the object as a query

 ######delete(key, value)
 Creates an object using key and value parameters and uses remove() on the database using the object as a query

#### `note-model.js`
##### Exported Values and Methods
Extends model.js and exports an instance of a Note class with note-schema as an argument


### Setup
#### `.env` requirements
* `PORT` - 3333


#### Running the app
run nodmone on all client files and the server file.

* `npm start`
* Endpoint: `/q server connected and connecting clinet applications through the publisher and subscriber classes/`


#### Tests

Testing has not been implemented at this time.
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
