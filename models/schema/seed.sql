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
  users (email, username, password, profile_picture_url)
VALUES
  ('jhallman5@gmail.com', 'jhallman5', '$2a$12$WA.H4mN3N3tpHbdF.eVvh.J02GUQRoZ9YMthrObiwoChoV9A3rR9e', 'https://ucarecdn.com/ba0b5e29-e1a9-43b4-8114-e25e600a0703/16665938_10211049896457736_1946023234875043586_o.jpg' ), --password: tomato
  ('lisa@hotmail.com', 'lisa3', '$2a$12$svU811CLIJYvGTR21exMc.xqBTQKvAgaK7viIDApndifq4SW9MBuW', 'https://ucarecdn.com/54bd3908-68bb-44f5-b59a-56ad997c3944/cake.png') --password: banana
;

INSERT INTO
  users (email, username, password)
VALUES
  ('steven3@yahoo.com', 'steven4', '$2a$12$EURZ3DJphoWsM4ORhokHW.QQKwrJywUkSZhWRFATurQeSFFH.cIG.') --password: orange
;

INSERT INTO
  reviews (album_id, user_id, content, created_on)
VALUES
  (2, 1, 'I did not get a seat at the table.', date '2017-07-24'),
  (4, 3, 'I really enjoy Radiohead.', date '2009-01-21'),
  (3, 3, 'Oh Lorde.', date '2014-03-17'),
  (1, 2, 'MALIBU!!! HECK YEA!', date ' 2015-04-20'),
  (3 , 2, 'I have reviewed the wrong album!', date '1999-12-19'),
  (4, 1, 'more like over the rainbows.', date '1998-02-15'),
  (2, 1, 'I FINALLY got a seat at the table.', date '2017-07-25'),
  (3, 1, 'I need to be a more active user.', date '2014-07-25'),
  (3, 1, 'I AM a more active user.', date '2014-08-21'),
  (3, 1, 'SEED DATA FTW.', date '2014-08-29')
;
