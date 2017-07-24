const { query } = require('../database')

const createUser = (user) => {
  const{ email, username, password } = user
  query("INSERT INTO users VALUES (DEFAULT, $1, $2, $3)", [email, username, password])
}

module.exports = {
  createUser
}
