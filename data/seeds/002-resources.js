
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_id: 1, resource_name: 'Myself', resource_desc: 'Some tasks only need me', project_id: 1 },
        { resource_id: 2, resource_name: 'Hammer', resource_desc: 'Some tasks need a hammer', project_id: 2 },
        { resource_id: 3, resource_name: 'T.L.C.', resource_desc: 'Some tasks just need a little tender, loving care', project_id: 1 },
        { resource_id: 4, resource_name: 'Bottle of Whisky', resource_desc: 'Some tasks need a bottle of sipping whisky', project_id: 2 }
      ]);
    });
};
