const express = require('express')

const routes = express.Router()

const PortfolioController = require('./controllers/PortfolioController')

routes.get('/', PortfolioController.index)
routes.post('/', PortfolioController.store)

module.exports = routes