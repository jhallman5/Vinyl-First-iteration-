const router = require('express').Router()
const User = require('../../models/queries/users')
const Albums = require('../../models/queries/albums')
const { logInCheck, hashPassword } = require('../helper_functions')
const { passport } = require('../../auth/passport')

router.get('/', (request, response, next) =>
  Albums.getAllAlbumsAndAllReviews()
    .then( content => response.render('home', { albums: content.albums, reviews: content.reviews, session: request.session.passport }))
    .catch( error => response.status(500).render('error', { error: error }))
)

router.get('/sign_in', logInCheck, (request, response, next) =>
  response.render('sign_in')
)

router.post('/sign_in', logInCheck, (request, response, next) => {
  User.getUserByUsername( request.body.username )
    .then( user => {
      (user[0])
      ? passport.authenticate('local', { successRedirect: `/user/${user[0].id}`,
                                                    failureRedirect: '/sign_in' })(request, response, next)
      : response.redirect('/sign_up')
    })
    .catch( error => response.status(500).render('error', { error: error }))
})

router.get('/sign_up', logInCheck, (request, response, next) =>
  response.render('sign_up')
)

router.post('/sign_up', (request, response, next) => {
  const user = request.body
  hashPassword(user.password)
    .then(hash => {
      user.password = hash
      User.createUser(user)
        .then( newUser => {
          response.redirect(`/user/${newUser[0].id}`) })
        .catch( error => response.status(500).render('error', { error: error }))
    })
})

router.get('/log_out', (request, response, next) =>{
  request.session.destroy( () => { response.redirect('/')} )
})

module.exports = { router }
