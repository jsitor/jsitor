const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const projectRoutes = require('./routes/project-routes');
const profileRoutes = require('./routes/profile-routes');
const keys = require('./config/keys');
const authCheck = require('./auth-check');
const { GUEST }= require('./consts');

require('./config/passport-setup');

const app = express();

// set view engine
app.set('view engine', 'ejs');

app.use(cors());

// set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', authCheck, profileRoutes);
app.use('/projects', projectRoutes);

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
