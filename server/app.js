require("dotenv").config()
const express = require("express")
const app = express()
const sequelize = require("./db")
const cors = require('cors')

const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 3030

app.use(cors())
app.use(express.json())
app.use('/api', router)

//Обработка ошибок, последний!
app.use(errorHandler)


const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		console.log('DB started')
		app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
	} catch (error) {
		console.log(new Error(error))
	}
}

start()