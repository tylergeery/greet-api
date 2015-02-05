'use strict';

var mongoose = require('mongoose'),
	User = require('../models/user');

module.exports = {
	info: function(req,res) {
		res.send('heres yo info');
	},
	loginSuccess: function(req, res) {
		res.send('lawls');
	},
	photoSuccess: function(req, res) {
		// console.log('photo success:', req.body.type); 
		console.log(req.body);
		res.send('jokes');
	}
}