const Portfolio = require('../models/Portfolio')

module.exports = {
  async index(req, res) {
    const portfolios = await Portfolio.find({}).sort('-createdAt')

    return res.json(portfolios)
  },
  async store(req, res) {
    const portfolio = await Portfolio.create(req.body)

    req.io.emit('portfolio', portfolio)

    return res.json(portfolio)
  }
}
