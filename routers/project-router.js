const express = require('express')

const db = require('../models/project-model')

const router = express.Router()

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
        .catch(err => {
            res.status(400).json({ errorMessage: `Unable to get projects` })
        })
})

module.exports = router;