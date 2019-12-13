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

}

function addTask(id, task) {

}