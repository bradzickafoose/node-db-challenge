
exports.up = function (knex) {
    return knex.schema
        .createTable('project-resources', table => {
            // creates a primary key
            table.increments()
            // creates a integer called `project_id`
            table.integer('project_id', 100)
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            table.integer('resource_id', 100)
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    // drops the entire table like it's hot
    return knex.schema.dropTableIfExists('project-resources')
};
