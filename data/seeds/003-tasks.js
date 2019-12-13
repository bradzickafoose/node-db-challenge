
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_desc: 'Complete 3 Pramp interviews and 1 Skilled Inc interview', task_notes: 'Needed to complete Careers endorsement', project_id: '1' },
        { task_desc: 'Get International Driving Permit', task_notes: 'Cost is $20 from AAA', project_id: '2' },
        { task_desc: 'Move long-term storage folder to cloud hosting', task_notes: 'Archive photos, videos, and notes.', project_id: '3' }
      ]);
    });
};
