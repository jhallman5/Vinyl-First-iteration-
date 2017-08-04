
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {album_id: 2, user_id: 1 , content: 'I did not get a seat at the table.' , created_on: '2017-07-24'},
        {album_id: 4, user_id: 3, content: 'I really enjoy Radiohead.' ,created_on: '2009-01-21' },
        {album_id: 3, user_id: 3, content:'Oh Lorde.' ,created_on: '2014-03-17' },
        {album_id: 1, user_id: 2, content: 'MALIBU!!! HECK YEA!' ,created_on: ' 2015-04-20' },
        {album_id: 3, user_id: 2, content: 'I have reviewed the wrong album!' ,created_on: '1999-12-19'},
        {album_id: 4, user_id: 1, content: 'more like over the rainbows.' ,created_on: '1998-02-15' },
        {album_id: 2, user_id: 1, content: 'I FINALLY got a seat at the table.',created_on: '2017-07-25' },
        {album_id: 3, user_id: 1, content: 'I need to be a more active user.' ,created_on: '2014-07-25'},
        {album_id: 3, user_id: 1, content: 'I AM a more active user.',created_on: '2014-08-21' },
        {album_id: 3, user_id: 1, content: 'SEED DATA FTW.' ,created_on:'2014-08-29' }
      ]);
    });
};
