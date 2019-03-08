const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
  client: String,
  title: String,
  date: String,
  tools: [String],
  category: String,
  description: String,
  imageUrl: String,
  imageAlt: String,
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)