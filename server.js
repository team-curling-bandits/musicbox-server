require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// const client = require('./db-client');

app.listen(PORT, () => console.log('server running...'));