const error = require('./middleware/error');

const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();


// varible to save api routes word routes
const words = require('./routes/api/words');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

if (!config.get('jwtPrivateKey')){
    console.log('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}

// mongoDB Setup and Connection
const dbRoute = 'mongodb://localhost/kamus-aceh-prod';

mongoose.connect( dbRoute, { useNewUrlParser: true } );

let db = mongoose.connection;

db.once('open', () => console.log('Connected to MongoDB'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));

// pass route file for the specific url
app.use('/api/words', words);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.use(error); 

// set port and launch node into a port
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});