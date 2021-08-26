const {Sequelize} = require("sequelize")

if (process.env.NODE_ENV === 'production') {
  const prodConfig = process.env.DATABASE_URL
  module.exports = new Sequelize(prodConfig,
    {
      dialect: "postgres",
      protocol: "postgres",
      port: 5432,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }
  )
} else {
  module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    }
  )
}




