const Sequelize = require("sequelize"),
  { Curso, Lesson } = require("../models");
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
    curso = await Curso.create({
      curso_name,
      curso_description,
      curso_image,
      curso_duration,
      curso_language,
      curso_skills,
    });
    return res.status(200).json({
      message: "Successfully added a course!",
      curso_id: curso.curso_id,
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
    var range = cursos.length;
    res.set({
      "Content-Range": range,
    });
    res.json(cursos);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const destroy = async (req, res) => {
  const id = req.params.courseId;
  if (Number.isNaN(id)) return res.status(400).end();

  Curso.destroy({
    where: { curso_id: id },
  }).then(() => {
    res.status(204).end();
  });
};

const courseByID = async (req, res, next, id) => {
  try {
    let curso = await Curso.findOne({
      where: { curso_id: id },
      include: [
        {
          model: Lesson,
          as: "Lessons",
        },
      ],
    });
    if (!curso)
      return res.status("400").json({
        error: "Curso não encontrado",
      });
    req.course = curso.dataValues;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve course",
    });
  }
};

const courseByIDs = async (req, res) => {
  const { id } = req.body;
  try {
    let curso = await Curso.findById(id);
    if (!curso) return res.status("400").js;
    on({
      error: "Course not found",
    });
    res.json(curso);
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve course",
    });
  }
};

module.exports = {
  create,
  list,
  destroy,
  courseByID,
  courseByIDs
};
