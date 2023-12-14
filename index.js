const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./models/User');
require('./models/Blog');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
app.use(passport.initialize());
app.use(passport.session());
console.log('process.env.NODE_ENV: ',process.env.NODE_ENV);

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);
app.listen(5000, ()=>{
    console.log('listenting on port 5000')
})