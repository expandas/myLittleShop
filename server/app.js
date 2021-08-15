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
app.use('/api', router)
app.use(errorHandler)


app.use(errorHandler) //Обработка ошибок, последний mw!

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('DB started')
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(new Error(error))
  }
}

start()