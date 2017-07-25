const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/queries/users')

// passport.use(new LocalStrategy(
//   (username, password, done) => {
//     User.getUserByUsername(username)
//       .then( user => {
//         if (!user) return done(null, false, {message: 'Incorrect username.'})
//         if (password !== "tomato") return done(null, false, {message: 'Incorrect password.'})
//         return done(null, user)
//       })
//       .catch( error => done(error))
//   }
// ))

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username)
      .then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user[0].password != password ) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
     .catch( error => done(error))
  }
));
passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = { passport }
