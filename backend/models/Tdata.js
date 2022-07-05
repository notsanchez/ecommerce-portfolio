const mongoose = require('mongoose')

const Tdata = mongoose.model('Tdata', {
  cover: String,
  para: String,
  desc: String,
})

module.exports = Tdata