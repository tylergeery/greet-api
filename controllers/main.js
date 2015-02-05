'use strict';

var mongoose = require('mongoose'),
	User = require('../models/user'),
	Group = require('../models/group');

module.exports = {
	info: function(req,res) {

	},
	loginSuccess: function(req, res) {
		console.log('User has now logged in:', req.body);
	}
}