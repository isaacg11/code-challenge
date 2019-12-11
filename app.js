const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

// connect to db
mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// db models
require('./models/user');

// API config
const users = require('./api/users');

// request config
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// API routes
app.use('/api/v1/users', users);

// server config
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`SERVER RUNNING ON PORT ${port}`);

module.exports = app;

