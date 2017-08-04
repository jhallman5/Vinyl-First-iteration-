const router = require('express').Router()
const { UsersORM } = require('../../ORM/bookshelf')

router.get('/profile', (request, response) => {
  const { user } = request.session.passport
  response.redirect(`/users/${user}`)
})

router.get('/:userId', (request, response) => {
  UsersORM.forge({id: request.params.userId})
  .fetch({withRelated: ['reviews']})
  .then( user => {
    response.render('user_profile', { user: user, reviews: user.relations.reviews.models, session: request.session.passport })
  })
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports = { router }
