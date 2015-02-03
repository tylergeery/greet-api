var express = require('express'),
	router = express.Router(),
	User = require('../models/user'),
	Group = require('../models/group');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// define the home page route
router.post('/postLogin', function(req, res) {
  console.log('User has now logged in:', req.body);
});

// define the about route
router.get('/info', function(req, res) {
  console.log('Here is where we can get all the info about a user');
});

module.exports = router;