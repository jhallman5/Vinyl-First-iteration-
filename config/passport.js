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

// passport.use('local', new LocalStrategy({
//   session: true
//   },
//   function(username, password, done) {
//     console.log( "=-=-=-> username", username )
//     console.log( "=-=-=-> password", password )
//     User.getUserByUsername(username)
//       .then(user => {
//           if (!user) {
//             return done(null, false, { message: 'Incorrect username.' });
//           }
//           if (user[0].password != password ) {
//             return done(null, false, { message: 'Incorrect password.' });
//           }
//       console.log( "=-=-=-> user", user[0] )
//       return done(null, user[0]);
//     })
//      .catch( error => {
//         console.log( "(>'')> INSIDE PASSPORT" )
//        done(error)
//      })
//   }
// ));

passport.use( 'local', new LocalStrategy(
  function(username, password, done) {
    console.log( "(>'')>  inside passport" )
    User.findOne( username , function(err, user) {
      console.log( "=-=-=-> err", err )
      console.log( "=-=-=-> user", user )
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
      return done(null, user);
    });
  }
));
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findUserByIdCB(id, (err, user) => {
    done(err, user)
  });
})


module.exports = passport
