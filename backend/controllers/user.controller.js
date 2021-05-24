const Sequelize = require("sequelize"),
  { Usuario } = require("../models");
errorHandler = require("./../helpers/dbErrorHandler");

const create = async (req, res) => {
  const {
    name,
    username,
    email,
    password,
    address,
    website,
    phone,
    company,
    about,
    photo,
  } = req.body;

  try {
    await Usuario.create({
      name,
      username,
      email,
      password,
      address,
      website,
      phone,
      company,
      about,
      photo,
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

const list = async (req, res) => {
  try {
    let users = await Usuario.findAll({
      attributes: [
        "name",
        "username",
        "email",
        "address",
        "website",
        "phone",
        "company",
        "about",
        "photo",
      ],
    });
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  create,
  list,
};
