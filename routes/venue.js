var router = require('express').Router(),
    venueController = require('../controllers/venue');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

router.get('/all', venueController.allVenues);
router.get('/:venueId', venueController.getVenue);

router.post('/new', venueController.newVenue);

module.exports = router;