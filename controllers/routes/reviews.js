const router = require('express').Router()
const Albums = require('../../models/queries/albums')

// const Reviews = require('../../models/queries/albums')
// const {} = require('../helper_functions')

router.get('/:albumId/new_review', (request, response, next) => {
    Albums.getAlbumsByID(request.params.albumId)
      .then( album => response.render('new_review', {album: album[0], session: request.session.passport}))
})


router.post('/:albumId/new_review', (request, response, next) => {
  const { content } = request.body
  const { user } = request.session.passport
  const { albumId } = request.params
  console.log( "=-=-=-> content", content, user, albumId )
  response.render('new_review', {session: request.session.passport})
})
module.exports= { router }
