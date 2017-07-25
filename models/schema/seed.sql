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
