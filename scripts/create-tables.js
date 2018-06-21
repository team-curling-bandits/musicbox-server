const client = require('../db-client');

client.query(`
   CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(256) NOT NULL,
       email VARCHAR(256) NOT NULL,
       password VARCHAR(256) NOT NULL
   );
   CREATE TABLE IF NOT EXISTS savedsongs (
       id SERIAL PRIMARY KEY,
       user_id INTEGER NOT NULL REFERENCES users(id),
       song_id VARCHAR(256) NOT NULL,
       artist VARCHAR(256) NOT NULL,
       title VARCHAR(256) NOT NULL,
       url VARCHAR(256) NOT NULL,
       rating INTEGER
   );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });