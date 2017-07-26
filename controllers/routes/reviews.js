const router = require('express').Router()
const Albums = require('../../models/queries/albums')
const Reviews = require('../../models/queries/reviews')

router.get('/:albumId/new_review', (request, response, next) => {
    Albums.getAlbumsByID(request.params.albumId)
      .then( album => response.render('new_review', {album: album[0], session: request.session.passport}))
})

router.post('/:albumId/new_review', (request, response, next) => {
  const { content } = request.body
  const { user } = request.session.passport
  const { albumId } = request.params
  Reviews.createReview(albumId, user, content)
    .then( () => response.redirect(`/albums/${albumId}`))
})

router.post('/:reviewId/delete', (request, response, next) => {
  Reviews.deleteReview(request.params.reviewId)
    .then( () => response.redirect('/users/profile'))
})

module.exports= { router }
