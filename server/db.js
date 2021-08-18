const {Sequelize} = require("sequelize")

const prodConfig = process.env.DATABASE_URL
// dialect: 'postgres',
// protocol: 'postgres',
// dialectOptions: {
// ssl: {
//   rejectUnauthorized: false
// }
// }


const devConfig = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

module.exports = new Sequelize(prodConfig,
  {
    dialect: "postgres",
    protocol: "postgres",
    port: 5432,
  }
)

