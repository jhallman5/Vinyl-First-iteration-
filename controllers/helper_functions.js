const bcrypt = require('bcrypt')
const {getUserByEmail} = require('../models/queries/users')

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
          username: review.username,
          content: review.content,
          created_on: review.created_on
        }
      })
    }
}

const processUserWithReviews = (queryResults) => {
  return {
    id: queryResults[0].user_id,
    username: queryResults[0].username,
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

const loginCheck = (request, response, next) =>
  request.session.passport
    ? response.redirect(`users/${request.session.passport.user}`)
    : next()

const sessionChecker = (request, response, next) =>
  request.session.passport
    ? next()
    : response.redirect('/sign_in')


const checkIfEmailExists = (request,response, next) => {
  getUserByEmail(request.body.email)
  .then( result => {
    if(!result.length) {
      next()
    } else{
      throw new Error('Email already in use')
    }
  })
  .catch( error => response.redirect('/'))
}

module.exports = {
  hashPassword,
  processAlbumsWithReviews,
  processUserWithReviews,
  loginCheck,
  sessionChecker,
  checkIfEmailExists
}
