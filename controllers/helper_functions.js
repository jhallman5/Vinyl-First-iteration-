const bcrypt = require('bcrypt')

const hashPassword = (password) =>
  bcrypt.hash(password, 12 )
    .then( hash => hash)
    .catch( error => console.log('bcrypt error ---> ', error ))

module.exports = { hashPassword }
