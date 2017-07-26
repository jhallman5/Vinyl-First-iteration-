const { query } = require('../config_db')

const createUser = (user) => {
  const{ email, username, password } = user
  return query("INSERT INTO users VALUES (DEFAULT, $1, $2, $3) RETURNING *", [email, username, password])
}

const getUserById = (id) =>
  query("Select * FROM users WHERE id = $1", [id])

const getUserByUsername = (username) =>
  query("Select * FROM users WHERE username = $1", [username])

const getUserAndReviewsByUserId = (userId) =>
    query("Select * FROM users u LEFT JOIN reviews r ON u.id = r.user_id WHERE u.id = $1 ORDER BY created_on DESC", [userId])

const getUserByEmail = (email) =>
  query("Select * FROM users WHERE email = $1", [email])

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  getUserAndReviewsByUserId,
  getUserByEmail
}
