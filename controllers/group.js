'use strict';

var mongoose = require('mongoose'),
    Group = require('greet-shared/models/group');

module.exports = {
  allGroups: function(req,res) {
  	console.log('return all groups');
  },
  getGroup: function(req, res) {
    console.log('return group by:', req.params.id);
  },
  getGroupMessages: function(req, res) {
    console.log('return group messages by:', req.params.id);
  },
  newGroup: function(req, res) {
    console.log('make a new group with:', req.body);
  },
  newMessage: function(req, res) {
    console.log('make a new message for group:', req.params.id);
    console.log('make a new group message with:', req.body);
  }
}