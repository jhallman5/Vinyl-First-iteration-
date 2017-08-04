
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'jhallman5@gmail.com', username:'jhallman5', password: '$2a$12$WA.H4mN3N3tpHbdF.eVvh.J02GUQRoZ9YMthrObiwoChoV9A3rR9e' }, //password: tomato
        {email: 'steven3@yahoo.com', username: 'steven4', password: '$2a$12$EURZ3DJphoWsM4ORhokHW.QQKwrJywUkSZhWRFATurQeSFFH.cIG.'}, //password: orange
        {email: 'lisa@hotmail.com', username: 'lisa3', password: '$2a$12$svU811CLIJYvGTR21exMc.xqBTQKvAgaK7viIDApndifq4SW9MBuW'}
      ]);
    });
};
