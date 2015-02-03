'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var locationSchema = new Schema({
  name: String,
  contact : {
    name: String,
    email: String,
    phone: String
  },
  description: String,
  images: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  karma: { type: Number, default: 0}
});

module.exports = mongoose.model('Location', locationSchema);