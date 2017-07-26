const router = require('express').Router()
const Albums = require('../../models/queries/albums')
// const {} = require('../helper_functions')

router.get('/:albumTitle/new_review', (request, response, next) => {

    response.render('new_review', {album: request.params.albumTitle, session: request.session.passport})
})


router.post('/:albumTitle/new_review', (request, response, next) => {
  const { content } = request.body
  const { user } = request.session.passport
  const { albumTitle } = request.params
  console.log( "=-=-=-> content", content, user, albumTitle )
  response.render('new_review', {session: request.session.passport})
})
module.exports= { router }
