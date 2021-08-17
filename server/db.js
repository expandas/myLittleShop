const {Sequelize} = require("sequelize")

const prodConfig = {
  connectionString: process.env.DATABASE_URL,
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  }
}

const devConfig = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

module.exports = new Sequelize(
  process.env.NODE_ENV === 'production' ?
    prodConfig :
    devConfig
)

