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
      s.song_id
    FROM users u
    JOIN savedsongs s
    ON u.id = s.user_id   
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});


app.listen(PORT, () => console.log('server running...'));