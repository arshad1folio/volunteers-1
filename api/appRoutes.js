const router = require('express').Router;

const routes = new router();

routes.get('/route1', require('./../services/module1').module1);

module.exports = routes;