const router = require('express').Router()
const { AlbumsORM, ReviewsORM } = require('../../ORM/bookshelf')

router.get('/:albumId/new_review', (request, response) => {
    AlbumsORM.forge({id: request.params.albumId})
      .fetch()
      .then( album => response.render('new_review', {album: album, session: request.session.passport}))
      .catch( error => response.status(500).render('error', { error: error }))
})

router.post('/:albumId/new_review', (request, response) => {
  const { content } = request.body
  const { user } = request.session.passport
  const { albumId } = request.params
  ReviewsORM.forge({album_id: albumId, user_id: user, content: content })
    .save()
    .then( () => response.redirect(`/albums/${albumId}`))
    .catch( error => response.status(500).render('error', { error: error }))
})

router.post('/:reviewId/delete', (request, response) => {
  ReviewsORM.forge({id: request.params.reviewId})
    .destroy()
    .then( () => response.redirect('/users/profile'))
    .catch( error => response.status(500).render('error', { error: error }))
})

module.exports= { router }
