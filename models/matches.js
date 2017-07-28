const mongoose = require('mongoose');
const {Schema} = mongoose;

const matchSchema = new Schema({
  date: String,
  white: String,
  black: String,
  result: String
})

mongoose.model('matches', matchSchema);