const mongoose = require('mongoose')

const Fdata = mongoose.model('Fdata', {
  id: Number,
  discount: Number,
  cover: String,
  name: String,
  price: Number,
})

module.exports = Fdata