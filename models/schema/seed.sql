 -- Hashed passwords are obtained through ./create_hash.js
 -- Ensure the original passwords are referenced at the end of each VALUES line

INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (email, username, password)
VALUES
  ('jhallman5@gmail.com', 'jhallman5', '$2a$12$WA.H4mN3N3tpHbdF.eVvh.J02GUQRoZ9YMthrObiwoChoV9A3rR9e'), --password: tomato
  ('steven3@yahoo.com', 'steven4', '$2a$12$EURZ3DJphoWsM4ORhokHW.QQKwrJywUkSZhWRFATurQeSFFH.cIG.'), --password: orange
  ('lisa@hotmail.com', 'lisa3', '$2a$12$svU811CLIJYvGTR21exMc.xqBTQKvAgaK7viIDApndifq4SW9MBuW') --password: banana
;

INSERT INTO
  reviews (album_id, user_id, content, created_on)
VALUES
  (2, 1, 'I did not get a seat at the table.', date '2017-07-24'),
  (4, 3, 'I really enjoy Radiohead.', date '2009-01-21'),
  (3, 3, 'Oh Lorde.', date '2014-03-17'),
  (1, 2, 'MALIBU!!! HECK YEA!', date ' 2015-04-20'),
  (3 , 2, 'I have reviewed the wrong album!', date '1999-12-19'),
  (4, 1, 'more like over the rainbows.', date '1998-02-15')
;
