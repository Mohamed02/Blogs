const passport = require('passport');
const dotenv=require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys= require('../config/keys');
const User = mongoose.model('User');

// Load environment-specific variables based on NODE_ENV
const environment = process.env.NODE_ENV;
const envFile = `.env.${environment}`;
dotenv.config({ path: envFile });

const hostURI= process.env.CLIENT_URI;

passport.use(
    new GoogleStrategy(
      {
        callbackURL: `${hostURI}/auth/google/callback`,
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("2. Access Token Retrieved accessToken: ",accessToken);
          const existingUser = await User.findOne({ googleId: profile.id });
          if (existingUser) {
            return done(null, existingUser);
          }
          const user = await new User({
            googleId: profile.id,
            displayName: profile.displayName
          }).save();
          done(null, user);
        } catch (err) {
          done(err, null);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    console.log("3. Serializing User Detail user: ",user);
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log('4. DeSerializing user data',id);
    User.findById(id).then(user => {
      done(null, user);
    });
  });