const bcrypt = require('bcrypt')

const hashPassword = (password) =>
  bcrypt.hash(password, 12 )
    .then( hash => hash)
    .catch( error => console.log('bcrypt error ---> ', error ))

const processAlbumsWithReviews = ( queryResults ) => {
  return {
      id: queryResults[0].album_id,
      title: queryResults[0].title,
      artist: queryResults[0].artist,
      reviews: queryResults.map( review => {
        return {
          id: review.id,
          user_id: review.user_id,
          content: review.content,
          created_on: review.created_on
        }
      })
    }
}

const processUserWithReviews = (queryResults) => {
  return {
    id: queryResults[0].user_id,
    email: queryResults[0].email,
    member_since: queryResults[0].member_since,
    reviews: queryResults.map( review => {
      return {
        id: review.id,
        album_id: review.album_id,
        content: review.content,
        created_on: review.created_on
      }
    })
  }
}

const logInCheck = (request, response, next) =>
  request.session.passport
    ? response.redirect(`users/${request.session.passport.user}`)
    : next()

const sessionChecker = (request, response, next) =>
  request.session.passport
    ? next()
    : response.redirect('/sign_in')

module.exports = {
  hashPassword,
  processAlbumsWithReviews,
  processUserWithReviews,
  logInCheck,
  sessionChecker
}
