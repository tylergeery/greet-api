var express = require('express'),
	router = express.Router(),
	userController = require('../controllers/user');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// define the home page route
router.post('/postlogin', userController.loginSuccess);
router.post('/postphotos', userController.photoSuccess);

// define the about route
router.get('/info', userController.info);

module.exports = router;