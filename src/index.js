// Importing Node modules and initializing Express
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  db = require('sqlite'),
  router = require('./router'),
  config = require('./config/main');

// Database Setup
  db.open(config.database, { Promise })
  //// Update db schema to the latest version using SQL-based migrations
  .then(() => db.migrate({ force: 'last' }))
  // Display error message if something went wrong
  .catch(err => console.error(err.stack))
  // Finally, launch the Node.js app
  .then(() => {

const server = app.listen(config.port);
console.log(`Your server is running on port ${config.port}.`);

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Import routes to be served
router(app);

});