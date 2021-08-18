require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT || 3030

const sequelize = require("./db")
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(fileUpload({}))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  router.get('/*', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    )
  })
  router.use(express.static(path.resolve("../client/build")))

  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    );
  })
}

if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(201).json({});
  });
}

app.use('/', router)
app.use(errorHandler) //Обработка ошибок, последний mw!

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT)
  } catch (error) {
    console.log(error)
  }
}

start()
