const express = require('express');
const infoController = require('../controller/info.controller')

const routes = express.Router();
 
routes.get('/', infoController.get);

module.exports = routes;