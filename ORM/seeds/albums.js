
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {title: 'Malibu', artist: 'Anderson .Paak'},
        {title: 'A Seat at the Table', artist:'Solange Knowles'},
        {title: 'Melodrama', artist:'Lorde'},
        {title: 'In Rainbows', artist:'Radiohead'}
      ]);
    });
};
