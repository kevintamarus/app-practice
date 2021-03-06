const mongoose = require('mongoose');
const {Schema} = mongoose;

const matchSchema = new Schema({
  number: Number,
  date: String,
  white: String,
  black: String,
  result: String
})

const Match = mongoose.model('matches', matchSchema);

module.exports = Match;
