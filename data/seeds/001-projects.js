
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Lambda School Career Endorsement', project_desc: 'Polish resume, LinkedIn, Github, and Portfolio Website while completing Pramp interviews and skilled inc interview' },
        { project_name: 'Before leaving USA again', project_desc: 'A collection of tasks to complete before leaving the states to travel abroad again' },
        { project_name: 'Organize File System', project_desc: 'Clean up hard disk, organize files, and prepare photos for long-term storage' }
      ]);
    });
};
