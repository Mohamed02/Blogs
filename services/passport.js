const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys= require('../config/keys');
const User = mongoose.model('User');
passport.use(
    new GoogleStrategy(
      {
        callbackURL: '/auth/google/callback',
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