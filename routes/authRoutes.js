const passport = require('passport');
const dotenv=require('dotenv');

// Load environment-specific variables based on NODE_ENV
const environment = process.env.NODE_ENV;
const envFile = `.env.${environment}`;
dotenv.config({ path: envFile });

const hostURI= process.env.CLIENT_URI;

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log("1. Redriected to callback path after authentication");
      res.redirect(`${hostURI}/blogs`);
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log('***current user id is ',req.user);
    res.send(req.user);
  });
};
