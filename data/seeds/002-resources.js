
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Myself', resource_desc: 'Some tasks only need me' },
        { resource_name: 'Hammer', resource_desc: 'Some tasks need a hammer' },
        { resource_name: 'T.L.C.', resource_desc: 'Some tasks just need a little tender, loving care' },
        { resource_name: 'Bottle of Whisky', resource_desc: 'Some tasks need a bottle of sipping whisky' }
      ]);
    });
};
