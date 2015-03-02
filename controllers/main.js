'use strict';

var mongoose = require('mongoose'),
	User = require('greet-shared/models/user'),
	Group = require('greet-shared/models/group');

module.exports = {
	info: function(req,res) {

	},
	loginSuccess: function(req, res) {
		console.log('User has now logged in:', req.body);
	}
}