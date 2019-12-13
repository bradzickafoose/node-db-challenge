
exports.up = function (knex) {
    return knex.schema.createTable('projects', table => {
        // creates a primary key called `id`
        table.increments()
        // creates a text field called `project_name` which is both required and unique
        table.text('project_name', 250).unique().notNullable()
        // creates a string field called `project_desc`
        table.string('project_desc', 2500)
        // creates a boolean property called `completed` that defaults to false
        table.boolean('completed').notNullable().defaultTo(false)
    })
};

exports.down = function (knex) {
    // drops the entire table like it's hot
    return knex.schema.dropTableIfExists('projects')
};
