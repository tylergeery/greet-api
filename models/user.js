'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  facebookId : Number,
  facebookLink : String,
  username: String,
  email: String,
  gender: String,
  bio: String,
  images: [String],
  groups: [String],
  isAdmin : {type: Number, default: 0},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  karma: { type: Number, default: 0}
});

module.exports = mongoose.model('User', userSchema);