var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var groupSchema = new Schema({
  title:  String,
  description: String,
  users: [{ body: String, date: Date }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  dates: { type: Number, default: 0},
  karma: { type: Number, default: 0}
});

module.exports = mongoose.model('Group', groupSchema);