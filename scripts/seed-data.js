const client = require('../db-client');
const users = require('./user-data.json');
const savedsongs = require('./savedsongs.json');

Promise.all(
  users.map(user => {
    return client.query(`
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3);
    `,
    [user.name, user.email, user.password]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      savedsongs.map(savedsong => {
        return client.query(`
          INSERT INTO savedsongs (
            user_id,
            song_id,
            artist,
            title,
            url,
            rating
          )
          VALUES ($1, $2, $3, $4, $5, $6)
        `,
        [savedsong.user_id, savedsong.song_id, savedsong.artist, savedsong.title, savedsong.url, savedsong.rating]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());
