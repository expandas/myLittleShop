const {Sequelize} = require("sequelize")

if (process.env.NODE_ENV === 'production' ) {
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
  const devConfig = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  module.exports = new Sequelize(devConfig)
}




