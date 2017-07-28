const express = require('express');
const bodyParser = require('body-parser')
//var db = require('./db');

//middleware
//var parser = require('body parser');

//connecting mongoDB
const MongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys');
const mongoLink = keys.mongoURI;

var db;

MongoClient.connect(mongoLink, function(err, database) {
  if(err) { console.log(err); }
  db = database;
});

const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
 let data = db.collection('matches').find()
 console.log(data.data);
 res.send(data.data);
})
  // .then(function(data) {
  //   res.send(data);
  //   console.log(data);
  //   })
  // .catch(err => console.log(err));
  //res.send(data);

app.post('/', function(req, res) {
  db.collection('matches').save({
    date: 'july28',
    white: 'Kevin',
    black: 'Tamarus',
    result: 'Draw'
  }, function(err, result) {
    if (err) { console.log(err);}
    console.log('post is stored in database');
  })
  res.send('Post received');
  res.end();
})

app.listen(PORT, function(err) {
  if(err) {
    console.log('cannot connect to server, ', err);
  } else {
    console.log('listening on port ', PORT);
  }
})