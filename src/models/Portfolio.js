const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
  client: String,
  title: String,
  tools: [String],
  category: String,
  description: String,
  imageUrl: String,
  imageAlt: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('Portfolio', PortfolioSchema)