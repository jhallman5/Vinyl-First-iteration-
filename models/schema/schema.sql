DROP TABLE IF EXISTS albums ;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reviews;

CREATE TABLE albums (
  id SERIAL,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  member_since date DEFAULT CURRENT_DATE
);

CREATE TABLE reviews (
  id SERIAL,
  album_id INTEGER,
  user_id INTEGER,
  content TEXT,
  created_on date DEFAULT CURRENT_DATE
);
