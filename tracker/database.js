const pg = require('pg');

// Database Connection for Production


// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

// let connection = mysql.createConnection(config);

// Database Connection for Development

//const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const connectionString = 'postgres://postgres:test@35.196.221.18:5432/bact-database-test:us-east1:ogrady-bacteria-2018';
/*var connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
  
};

  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });

  module.exports = connection;*/

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'SELECT * FROM bacteria');
//query.on('end', () => { client.end(); });
