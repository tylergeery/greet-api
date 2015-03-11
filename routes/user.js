var router = require('express').Router(),
    userController = require('../controllers/user');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// GET Routes
router.get('/all', userController.allUsers);
router.get('/trim', userController.trimUsers);
router.get('/:id/info', userController.info);
router.get('/:id/settings', userController.getSettings);

// POST Routes
router.post('/postlogin', userController.loginSuccess);
router.post('/postphotos', userController.photoSuccess);
router.post('/:id/settings', userController.saveSettings);


module.exports = router;