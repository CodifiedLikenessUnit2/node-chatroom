const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '35.196.221.18',
  database: 'sample_bact',
  password: 'test',
  port: 5432,
})


pool.query('SELECT users.group_id, to_char(AVG (sample.x), ''99999999999999999D99'') AS average INTO results FROM sample natural join users WHERE sample.location_id = ''1'' GROUP BY users.group_id ORDER BY group_id', (err, res) => {
  console.log(err, res.rows)
  pool.end()
})

//float team_zero, team_one;
/*
pool.query('SELECT AVG(x) FROM sample natural join users where group_id = 0', (err, res) => {
  //float team_zero = res.rows
  //console.log(team_zero)
  console.log(err, res.rows)
  pool.end()
})
;*/

//SELECT users.group_id, to_char(AVG (sample.x), '99999999999999999D99') AS average INTO results FROM sample natural join users WHERE sample.location_id = '1' GROUP BY users.group_id ORDER BY group_id;

//SELECT sample.x, users.group_id, to_char(AVG (x), '99999999999999999D99') AS average INTO result FROM sample natural join users WHERE sample.location_id = '1' GROUP BY sample.x, users.group_id ORDER BY group_id;

//testing multiple queries
//const { Pool } = require('client')
//const pool = new Pool()
/*
pool.connect()
  .then(client => {
    return client.query('SELECT AVG(x) FROM sample natural join users where group_id = 0', [1])
      .then(res => {
        client.release()
        console.log(res.rows)
      })
      .catch(e => {
        client.release()
        console.log(err.stack)
      })
  })*/