const { query } = require('../config_db')

const createUser = (user) => {
  const{ email, username, password } = user
  query("INSERT INTO users VALUES (DEFAULT, $1, $2, $3)", [email, username, password])
}

const getUserById = (id) =>
  query("Select * FROM users WHERE id = $1", [id])

module.exports = {
  createUser,
  getUserById
}
