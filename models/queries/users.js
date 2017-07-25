const { query } = require('../config_db')

const createUser = (user) => {
  const{ email, username, password } = user
  return query("INSERT INTO users VALUES (DEFAULT, $1, $2, $3) RETURNING id", [email, username, password])
}

const getUserById = (id) =>
  query("Select * FROM users WHERE id = $1", [id])

const getUserByUsername = (username) =>
  query("Select * FROM users WHERE username = $1", [username])


module.exports = {
  createUser,
  getUserById,
  getUserByUsername
}