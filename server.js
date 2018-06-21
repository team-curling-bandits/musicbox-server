require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

const client = require('./db-client');
const auth = (req, res, next) => {
  const id = req.get('Authorization');
  if(!id || isNaN(id)) {
    next('No Authentication');
    return;
  }

  req.userId = +id;
  next();
};

app.get('/api/users', (req, res, next) => {

  client.query(`
    SELECT  
      u.id,
      u.name,
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

app.get('/api/savedsongs/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  client.query(`
  SELECT * FROM savedsongs
  WHERE user_id=$1
  ORDER BY id ASC;
  `, [id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.get('/api/users/:id', auth, (req, res, next) => {
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
    })
    .catch(next);
});

app.post('/api/auth/signup', (req, res, next) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  if(!email || !password) {
    next('email and password are required');
  }

  client.query(`
    select count(*)
    from users
    where email = $1
  `,
  [email])
    .then(results => {
      if(results.rows[0].count > 0) {
        throw new Error('Email already exists');
      }

      return client.query(`
        insert into users (email, password, name)
        values ($1, $2, $3)
        returning id, email, name
      `,
      [email, password, body.name]);
    })
    .then(results => {
      const row = results.rows[0];
      res.send({ 
        id: row.id,
        email: row.email,
        name: row.name
      });
    })
    .catch(next);

});

app.post('/api/savedsongs', (req, res) => {
  const body = req.body;
  // const songId = body.song_id;

  client.query(`
    insert into savedsongs (user_id, song_id, artist, title, url)
    values ($1, $2, $3, $4, $5)
    returning *;
  `,
  [body.userId, body.id, body.artist, body.title, body.url]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.post('/api/auth/signin', (req, res, next) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  if(!email || !password) {
    next('email and password are required');
  }

  client.query(`
    select id, email, password
    from users
    where email = $1
  `,
  [email]
  )
    .then(results => {
      const row = results.rows[0];
      if(!row || row.password !== password) {
        throw new Error('Invalid email or password');
      }
      res.send({ 
        id: row.id,
        email: row.email,
        name: row.name
      });
    })
    .catch(next);

});
app.delete('/api/savedsongs/:id', (req, res, next) => {
  client.query(`
    DELETE FROM savedsongs
    WHERE id=$1
  `,
  [req.params.id]
  )
    .then(() => {
      res.send({ removed: true });
    })
    .catch(next);
});

// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('***SERVER ERROR***\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

app.listen(PORT, () => console.log('server running...'));