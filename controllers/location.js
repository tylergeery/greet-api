'use strict';

var mongoose = require('mongoose'),
    Location = require('greet-shared/models/location');

module.exports = {
  getLocationInfo: function(req,res) {
    console.log('Get location info for user with id:', req.params.id);
  },
  getUsersNearLocation: function(req, res) {
    console.log('Get users near user with id:', req.params.id);
  }
}