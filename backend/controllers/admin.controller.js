const Sequelize = require("sequelize"),
  { Administrador } = require("../models");
errorHandler = require("./../helpers/dbErrorHandler");

const create = async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    await Administrador.create({
      name,
      username,
      email,
      password,
    });
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  create,
};
