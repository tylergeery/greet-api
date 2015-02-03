var express = require('express'),
	router = express.Router(),
	User = require('../models/user'),
	Group = require('../models/group');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// define the home page route
router.get('/:id', function(req, res) {
  console.log('Get a specific group id');
});

// define the about route
router.get('/new', function(req, res) {
  console.log('Here is where we can create a new group');
});

module.exports = router;