const mongoose = require('mongoose')

const Sdata = mongoose.model('Sdata', {
  id: Number,
  title: String,
  desc: String,
  cover: String,
})

module.exports = Sdata