'use strict';

var mongoose = require('mongoose'),
    User = require('../models/user');

module.exports = {
  allUsers: function(req, res) {
    console.log('usrs');
    User.find({}).exec(function(err, users) {
      res.json(users);
    });
  },
  info: function(req,res) {
    res.send('heres yo info');
  },
  loginSuccess: function(req, res) {
    var images = [];

    for(var i = req.body.data.length - 1; i >= 0; i--) {
      images.push(req.body.data[i].source);
    }

    var user = new User({
      facebookId : req.body.id,
      facebookLink : req.body.link,
      timezone : req.body.timezone,
      name : req.body.name,
      email : req.body.email,
      gender : req.body.gender,
      images : images
    });

    user.save(function(err) {
      if(err) res.error('shit');
      res.json({
        success: 'Congratulations'
      });
    });

  },
  photoSuccess: function(req, res) {
    // Edit photos route
  }
}