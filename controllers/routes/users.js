const router = require('express').Router()
const User = require('../../models/queries/users')

router.get('/:userId', (request, response, next) => {
  User.getUserById(request.params.userId)
    .then( data => response.render('user_profile', { data: data[0] }))
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports = { router }
