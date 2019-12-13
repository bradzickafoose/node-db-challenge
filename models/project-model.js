const db = require('../data/db-config')

module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks,
    addTask
}

function getResources() {
    return db('resources')
}

function addResource(resource) {
    return db
        .insert(resource)
        .into('resources')
}

function getProjects() {
    return db('projects')
}

function addProject(project) {
    return db
        .insert(project)
        .into('projects')
}

function getTasks(id) {
    return db
        .select('T.*', 'P.project_name', 'P.project_desc')
        .from('tasks as T')
        .join('projects as P', function () {
            this.on('P.Id ', '=', 'T.project_id')
        })
        .where({ 'P.Id': id })
}

function addTask(id, task) {
    return db
        .insert(task)
        .into('tasks')
        .where({ 'project_id': id })
}