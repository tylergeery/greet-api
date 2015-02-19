var express = require('express'),
	router = express.Router(),
	userController = require('../controllers/user');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// GET Routes
router.get('/all', userController.allUsers);
router.get('/settings', userController.getSettings);
router.get('/trim', userController.trimUsers);

// define the home page route
router.post('/postlogin', userController.loginSuccess);
router.post('/postphotos', userController.photoSuccess);
router.post('/settings', userController.saveSettings);

// define the about route
router.get('/info', userController.info);

module.exports = router;