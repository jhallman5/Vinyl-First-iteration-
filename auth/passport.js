const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/queries/users')
const bcrypt = require('bcrypt')

passport.use('local', new LocalStrategy(
  (username, password, done) =>
    User.getUserByUsername(username)
      .then( user => {
        if (!user) return done(null, false, {message: 'Incorrect username.'})
        bcrypt.compare(password, user[0].password)
          .then( (result) => {
            if(!result) return done(null, false, {message: 'Incorrect password.'})
            return done(null, user[0])
          })
          .catch( error => done(error))
      })
      .catch( error => done(error))
))

passport.serializeUser((user, done) =>
  done(null, user.id)
)

passport.deserializeUser((id, done) =>
  User.getUserById(id)
    .then( user => done(null, user))
    .catch( error => done(error, null))
)

module.exports = { passport }
