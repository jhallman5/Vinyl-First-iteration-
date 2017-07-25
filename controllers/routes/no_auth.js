const router = require('express').Router()
const User = require('../../models/queries/users')
const Albums = require('../../models/queries/albums')
const Helper = require('../helper_functions')
const { passport } = require('../../auth/passport')


router.get('/', (request, response, next) =>
  Albums.getAlbums()
    .then( albums => response.render('home', { albums: albums }))
    .catch( error => response.status(500).render('error', { error: error }))
)

router.get('/sign_in', (request, response, next) =>
  response.render('sign_in')
)

router.post('/sign_in', (request, response, next) => {
  const profileId = 1
  passport.authenticate('local', { successRedirect: `/user/${profileId}`,
                                   failureRedirect: '/sign_up'
  })(request, response, next)

})

router.get('/sign_up', (request, response, next) =>
  response.render('sign_up')
)

router.post('/sign_up', (request, response, next) => {
  const user = request.body
  Helper.hashPassword(user.password)
    .then(hash => {
      user.password = hash
      User.createUser(user)
        .then( newUser => {
          response.redirect(`/user/${newUser[0].id}`) })
        .catch( error => response.status(500).render('error', { error: error }))
    })
})

module.exports = { router }
