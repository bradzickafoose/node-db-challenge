
exports.up = function (knex) {
    return knex.schema
        .createTable('resources', table => {
            // creates a primary key called `resource_id`
            table.increments('resource_id').unsigned().notNullable()
            // creates a integer for `project_id`
            table.integer('project_id', 100)
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            // creates a text field called `resource_name` which is both required and unique
            table.text('resource_name', 250).unique().notNullable()
            // creates a string field called `resource_desc`
            table.string('resource_desc', 2500)
        })
};

exports.down = function (knex) {
    // drops the entire table like it's hot
    return knex.schema.dropTableIfExists('resources')
};
