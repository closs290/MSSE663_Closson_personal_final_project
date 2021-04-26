import mongoose = require('mongoose');
import express = require('express');
// import path = require('path');
import bodyParser = require('body-parser');
import cors = require('cors');

import { databaseName } from './environment';
import { ilgRoutes } from './routes/ilg.routes';

const app = express();

// Set port number
const port = process.env.PORT || 3000;

// Connecting to database
mongoose.connect(databaseName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// If there is a connection error with db
db.on('error', console.error.bind(console, 'connection error:'));

// If DB is opened successfully
db.once('open', () => {
  console.log('Connection Successful!');
});

// CORS Middleware
// TODO: Add 4404, 8080 and other ports that I test on. 
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/ILGs', ilgRoutes);

// Start Server
app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
