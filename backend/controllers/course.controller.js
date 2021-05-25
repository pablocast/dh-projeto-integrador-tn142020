const Sequelize = require("sequelize"),
  { Curso } = require("../models");
errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  const {
    curso_name,
    curso_description,
    curso_image,
    curso_duration,
    curso_language,
    curso_skills,
  } = req.body;
  try {
    await Curso.create({
      curso_name,
      curso_description,
      curso_image,
      curso_duration,
      curso_language,
      curso_skills,
    });
    return res.status(200).json({
      message: "Successfully added a course!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  try {
    let cursos = await Curso.findAll({
      attributes: [
        ["curso_id", "id"],
        "curso_name",
        "curso_description",
        "curso_image",
        "curso_duration",
        "curso_language",
        "curso_skills",
      ],
    });
    res.json(cursos);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const destroy = async (req, res) => {
  const id  = req.params.courseId;
  if (Number.isNaN(id)) return res.status(400).end();

  Curso.destroy({
    where: { curso_id : id }
  }).then(() => {
    res.status(204).end();
  });
};


module.exports = {
  create,
  list,
  destroy
};
