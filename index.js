const express = require('express');
const bodyParser = require('body-parser')
//var db = require('./db');
const path = require('path');
//middleware
//var parser = require('body parser');

//connecting mongoose
const mongoose = require('mongoose');
const keys = require('./config/keys');
const Match = require('./models/matches');


const mongoLink = keys.mongoURI;

mongoose.connect(mongoLink);

const app = express();
const PORT = 3000;
app.use(express.static(__dirname + '/client/static'));
app.use(bodyParser.json());

app.get('/match', function(req, res) {
  
  Match.findOne({})
  .then(function(data) {
    console.log('this is the data ', data);
    res.send(JSON.stringify(data));
  })
  .catch(function(reason) {
    console.log('did not retrieve data');
    res.send(reason);
  })
})

app.post('/match', function(req, res) {
  let match = new Match({
    number: req.body.number,
    date: req.body.date,
    white: req.body.white,
    black: req.body.black,
    result: req.body.result
  });
  match.save(function(err) {
    if(err) { return handleError(err) }
  })
  res.send('POST received');
})

app.listen(PORT, function(err) {
  if(err) {
    console.log('cannot connect to server, ', err);
  } else {
    console.log('listening on port ', PORT);
  }
})