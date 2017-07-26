const router = require('express').Router()
const User = require('../../models/queries/users')
const { processUserWithReviews } = require('../helper_functions')

router.get('/profile', (request, response, next) => {
  const { user } = request.session.passport
  response.redirect(`/users/${user}`)
})

router.get('/:userId', (request, response, next) => {
  User.getUserAndReviewsByUserId(request.params.userId)
    .then( user => response.render('user_profile', { user: processUserWithReviews(user), session: request.session.passport }))
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports = { router }
