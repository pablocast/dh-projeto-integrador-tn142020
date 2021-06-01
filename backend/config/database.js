const config = {
  username: "root",
  password: "YES",
  database: "projeto_integrador_t4",
  host: "localhost",
  dialect: "mysql",
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
};

module.exports = config;
