const mongoose = require('mongoose')

const Categories = mongoose.model('Categories', {
  cateImg: String,
  cateName: String,
})

module.exports = Categories