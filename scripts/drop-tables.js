const client = require('../db-client');
client.query(`
  DROP TABLE IF EXISTS savedsongs;
  DROP TABLE IF EXISTS users;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });