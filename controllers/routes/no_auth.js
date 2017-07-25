const router = require('express').Router()
const Albums = require('../../models/queries/albums')
const { passport } = require('../../config/passport')

router.get('/', (request, response) => {
  Albums.getAlbums()
    .then( albums => response.render('home', { albums: albums }))
    .catch( error => response.status(500).render('error', { error: error }))
})

router.get('/sign_in', (request, response) =>
  response.render('sign_in')
)

router.post('/sign_in', (request, response, next) => {
  passport.authenticate('local', { successRedirect:'/', failureRedirect: '/sign_up'})(request, response, next)
})

router.get('/sign_up', (request, response) =>
  response.render('sign_up')
)

router.post('/sign_up', (request, response) => {
  const user = request.body
  User.createUser(user)
    .then( userId => response.redirect(`/user/${userId[0].id}`) )
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports = { router }
