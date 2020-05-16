const express = require('express')

const db = require('../models/project-model')

const router = express.Router()

// Retrieve a list of resources
router.get('/resources', (req, res) => {
  db.getResources()
      .then(resource => res.status(200).json(resource))
      .catch(() => res.status(400).json({
        errorMessage: "Unable to retrieve resources"
      }))
})

// Add a resource
router.post('/resources', (req, res) => {
  const newResource = req.body

  db.addResource(newResource)
    .then(resource => res.status(200).json(resource))
    .catch(() => res.status(400).json({
      errorMessage: "Unable to add resource"
    }))
})

// Retrieve a list of projects
router.get('/', (req, res) => {
  db.getProjects()
    .then(project => {
      res
        .status(200)
        .json(project.map(newProject => {
            if (newProject.completed === 0) {
                return {
                    ...newProject,
                    completed: false
                }
            } else {
                return {
                    ...newProject,
                    completed: true
                }
            }
        }))
    })
    .catch(() => res.status(400).json({
      errorMessage: "Unable to retrieve projects"
    })
  })
})

// Add a project
router.post('/', (req, res) => {
  const newProject = req.body
  db.addProject(newProject)
    .then(project => res.status(200).json(project))
    .catch(() => res.status(400).json({
      errorMessage: "Unable to add project"
    }))
})

// Retrieve a list of tasks
router.get('/:id/tasks', (req, res) => {
  db.getTasks(req.params.id)
    .then(task => {
      res
        .status(200)
        .json(task.map(newTask => {
            if (newTask.completed === 0) {
                return {
                    ...newTask,
                    completed: false
                }
            } else {
                return {
                    ...newTask,
                    completed: true
                }
            }
        }))
    })
    .catch(() => res.status(400).json({
      errorMessage: "Unable to retrieve tasks"
    }))
})

// Add a task
router.post('/:id/tasks', (req, res) => {
  const newTask = req.body
  const { id } = req.params

  db.addTask(id, newTask)
    .then(task => res.status(200).json(task))
    .catch(() => res.status(400).json({
      errorMessage: "Unable to add task"
    }))
})

module.exports = router;