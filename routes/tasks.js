const express = require('express');
const tasksController = require('../controller/tasks.controller')
 
const routes = express.Router();

routes.get('/', tasksController.get);

module.exports = routes;