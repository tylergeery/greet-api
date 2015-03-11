'use strict';

var mongoose = require('mongoose'),
    Venue = require('greet-shared/models/venue');

module.exports = {
  allVenues: function(req,res) {
  	console.log('make a new venue from:', req.body);
  },
  getVenue: function(req, res) {
    console.log('get venue with id:', req.params.venueId);
  },
  newVenue: function(req, res) {
    console.log('make new venue with:', req.body);
  }
}