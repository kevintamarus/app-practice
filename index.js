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

// app.get('/', (req,res)=>{
//   console.log('get request');
//   res.sendFile(__dirname + '/client/static');
// })
app.get('/match', function(req, res) {
  
  Match.findOne({})
  .then(function(data) {
    console.log('this is the data ', data);
    res.send(data);
  })
  .catch(function(reason) {
    console.log('did not retrieve data');
    res.send(reason);
  })
})

app.post('/', function(req, res) {
  let match = new Match({
    date: 'july28',
    white: 'Kevin',
    black: 'Tamarus',
    result: 'Draw'
  });
  match.save(function(err) {
    if(err) { return handleError(err) }
  })
  res.send('Post received');
})

app.listen(PORT, function(err) {
  if(err) {
    console.log('cannot connect to server, ', err);
  } else {
    console.log('listening on port ', PORT);
  }
})