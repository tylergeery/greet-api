var router = require('express').Router(),
    locationController = require('../controllers/location');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// GET Routes
router.get('/:id/info', locationController.getLocationInfo);
router.get('/:id/near', locationController.getUsersNearLocation);

module.exports = router;