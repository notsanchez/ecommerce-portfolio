const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')

const Categories = require('./models/Categories')
const Sdata = require('./models/Sdata')
const Fdata = require('./models/Fdata')
const Tdata = require('./models/Tdata')

app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb'}));

app.use(cors())

app.use(
  express.urlencoded({
    extended: true,
  }),
)


app.use(express.json())

// Categorias Endpoint

app.get('/categories', async (req, res) => {
  try {
    const categorie = await Categories.find()

    res.status(200).json(categorie)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Slides Endpoint

app.get('/Sdata', async (req, res) => {
    try {
      const sdata = await Sdata.find()
  
      res.status(200).json(sdata)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

//Ofertas Endpoint

app.get('/Fdata', async (req, res) => {
    try {
      const fdata = await Fdata.find()
  
      res.status(200).json(fdata)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

app.post('/Fdata', async (req, res) => {
    const { id, discount, cover, name, price } = req.body
  
    const fdata = {
      id,
      discount,
      cover,
      name,
      price,
    }
  
    try {
      await Fdata.create(fdata)
  
      res.status(201).json({ message: 'Produto inserido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

// Melhores Produtos Endpoint

app.get('/Tdata', async (req, res) => {
    try {
      const tdata = await Tdata.find()
  
      res.status(200).json(tdata)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

mongoose
  .connect(
    process.end.MONGODBKEY,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(8000)
  })
  .catch((err) => console.log(err))
