const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "wfnpzbqr",
  process.env.DB_USER || "wfnpzbqr",
  process.env.DB_PASSWORD || "hALj5TcckVdV29V8g30hiKumtCN7-AJc",
  {
    host: process.env.DB_HOST || "tantor.db.elephantsql.com",
    port: parseInt(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      idle: 30000
    },
    define: {
      timestamps: false
    }
  }
);

module.exports = sequelize;
