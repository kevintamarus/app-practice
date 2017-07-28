//this might need to be changed

var mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 'password',
  database: 'my_db'
});

connection.connect()

connection.query('SELECT FILL_ME_IN', function(err, row) {
  if (err) {
  } else {
    connection.end()
  }
})

module.exports = dbConnection;