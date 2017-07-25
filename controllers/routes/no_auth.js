const router = require('express').Router()
const User = require('../../models/queries/users')
const Albums = require('../../models/queries/albums')
const passport  = require('../../config/passport')


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
  User.createUser(user)
    .then( userId => response.redirect(`/user/${userId[0].id}`) )
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports = { router }
