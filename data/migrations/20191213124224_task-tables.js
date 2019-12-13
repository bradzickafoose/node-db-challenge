
exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', table => {
            // creates a primary key called `task_id`
            table.increments('task_id').unsigned().notNullable()
            // creates a text field called `task_desc` which is required
            table.string('task_desc', 2500).notNullable()
            // creates a string field called `task_notes`
            table.string('task_notes', 2500)
            // creates a integer called `project_id`
            table.integer('project_id', 100)
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            // creates a boolean that indicates if the task has been completed. Defaults to 'false'
            table.boolean('completed').notNullable().defaultTo(false)
        })
};

exports.down = function (knex) {
    // drops the entire table like it's hot
    return knex.schema.dropTableIfExists('tasks')
};
