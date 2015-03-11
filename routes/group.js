var router = require('express').Router(),
    groupController = require('../controllers/group');

// middleware specific to this router
router.use(function(req, res, next) {
  next();
});

// GET Routes
router.get('/all', groupController.allGroups);
router.get('/:id', groupController.getGroup);
router.get('/:id/messages', groupController.getGroupMessages);

// POST Routeroutes
router.post('/new', groupController.newGroup);
router.post(':id/message/new', groupController.newMessage);

module.exports = router;