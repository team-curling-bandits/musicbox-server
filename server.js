require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const client = require('./db-client');

app.get('/api/users', (req, res, next) => {

  client.query(`
    SELECT  
      u.id,
      song_id
    FROM users u
    JOIN savedsongs s
    ON u.id = s.user_id   
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.get('/api/savedsongs', (req, res, next) => {
  client.query(`
  SELECT * FROM savedsongs;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.get('/api/users/:id', (req, res, next) => {
  const userPromise = client.query(`
  
  SELECT id, name, email, password
  FROM users
  WHERE users.id = $1;
  `,
  [req.params.id]);

  const savedSongsPromise = client.query(`
  
  SELECT id, user_id, song_id, rating, comments
  FROM savedsongs
  WHERE user_id = $1;
  `,
  [req.params.id]);

  Promise.all([userPromise, savedSongsPromise])
    .then(results => {
      const userResult = results[0];
      const savedSongsResult = results[1];

      if(userResult.rows.length === 0) {
        res.sendStatus(404);
        return;
      }
      const user = userResult.rows[0];
      const savedsongs = savedSongsResult.rows;
      user.savedsongs = savedsongs;

      res.send(user);
    });
});


app.listen(PORT, () => console.log('server running...'));