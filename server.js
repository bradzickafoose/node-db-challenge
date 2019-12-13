const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./routers/project-router')
const server = express();

server.use(helmet())
server.use(express.json());

server.use('/api/projects', projectRouter)

server.get('/', (req, res) => res.json({ message: 'API is online' }));

module.exports = server;