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
       song_id INTEGER NOT NULL,
       rating INTEGER,
       comments VARCHAR(1024)
   );
`)
.then(
    () => console.log('create tables complete'),
    err => console.log(err)
)
.then(() => {
    client.end();
});