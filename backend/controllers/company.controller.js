const Sequelize = require("sequelize"),
  { Empresa } = require("../models");
errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  const {
    employee_name,
    company_name,
    company_phone,
    company_email,
    company_city,
    company_country,
    company_num_devs,
    password
  } = req.body;

  try {
    await Empresa.create({
      employee_name,
      company_name,
      company_phone,
      company_email,
      company_city,
      company_country,
      company_num_devs,
      password
    });
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err) + "/" + `${req.body}`,
    });
  }
};

module.exports = {
  create,
};
