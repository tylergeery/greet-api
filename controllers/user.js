'use strict';

var mongoose = require('mongoose'),
	User = require('../models/user');

module.exports = {
	info: function(req,res) {
		res.send('heres yo info');
	},
	loginSuccess: function(req, res) {
		if(!!req.body.data && Array.isArray(req.body.data)) {
			req.body.data.forEach(function(e, i, a) {
				console.log('Element source:', e.source);
			});
		}
	},
	photoSuccess: function(req, res) {
		// Edit photos route
	}
}