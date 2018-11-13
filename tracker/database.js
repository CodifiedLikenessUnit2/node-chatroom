const pg = require('pg');

// Database Connection for Production

 let config = {
     user: process.env.SQL_USER,
     database: process.env.SQL_DATABASE,
     password: process.env.SQL_PASSWORD,
 }

 if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
 }

// let connection = mysql.createConnection(config);

//var connection = “postgres://postgres:test@35.196.221.18/sample_bact”;
 /*let connection = {
     user: process.env.DB_USER,
     database: process.env.DB_DATABASE,
     password: process.env.DB_PASS
 };
var client = new pg.Client(connection);
//client.connect();

  client.connect(function(err) {
    if (err) {
      //console.error('Error connecting: ' + err.stack);
      //return;
		process.on('uncaughtException', function (err) {
			console.log(err);
		}); 
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });*/

  module.exports = connection;