'use strict';

var mongoose = require('mongoose'),
    User = require('greet-shared/models/user');

module.exports = {
  allUsers: function(req, res) {
    User.find({}).exec(function(err, users) {
      var users = users.map(function(u) {
        return { image : u.images[0], name : u.name};
      });

      console.log(JSON.stringify(users));
      res.json(users);
    });
  },
  getSettings: function(req, res) {

  },
  info: function(req,res) {
    res.send('heres yo info');
  },
  loginSuccess: function(req, res) {
    console.log('login success:', JSON.stringify(req.body));
    var images = [];

    for(var i = 0; i <= req.body.data.length - 1; i--) {
      images.push(req.body.data[i].source);
    }

    var user = new User({
      facebookId : req.body.id,
      facebookLink : req.body.link,
      timezone : req.body.timezone,
      name : req.body.name,
      email : req.body.email,
      gender : req.body.gender,
      images : images,
      activeImages : images.slice(0,5)
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
  },
  saveSettings: function(req, res) {
    // Save settings for user preferences
  },
  trimUsers : function(req, res) {
    User.remove({ images : [] }).exec(function(err) {
      if(err) console.error(err);

      res.send('Great success!');
    });
  }
}