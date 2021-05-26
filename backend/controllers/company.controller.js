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
    password,
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

const list = async (req, res) => {
  try {
    let empresas = await Empresa.findAll({
      attributes: [
        ["company_id", "id"],
        "employee_name",
        "company_name",
        "company_phone",
        "company_email",
        "company_city",
        "company_country",
        "company_num_devs",
      ],
    });
    var range = empresas.length;
    res.set({
      "Content-Range": range,
    });
    res.json(empresas);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const destroy = async (req, res) => {
  const id = req.params.companyId;
  if (Number.isNaN(id)) return res.status(400).end();

  Empresa.destroy({
    where: { company_id: id },
  }).then(() => {
    res.status(204).end();
  });
};

module.exports = {
  create,
  list,
  destroy,
};
