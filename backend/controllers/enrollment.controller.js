const Sequelize = require("sequelize"),
  { Enrollment, Curso, Lesson } = require("../models");
errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  let newEnrollment = {
    curso_id: req.course.curso_id,
    student_id: req.auth._id,
  };
  newEnrollment.aula_status = req.course.Lessons.map((lesson, index) => {
    const lesson_name = lesson.dataValues.aula_title;
    return { lesson: lesson_name, complete: false };
  });
  newEnrollment.aula_status = JSON.stringify(newEnrollment.aula_status);
  try {
    let enrollment = await Enrollment.create(newEnrollment);
    return res.status(200).json(enrollment);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const findEnrollment = async (req, res, next) => {
  try {
    let enrollments = await Enrollment.findOne({
      where: { curso_id: req.course.curso_id, student_id: req.auth._id },
    });
    if (!enrollments) {
      next();
    } else {
      res.json(enrollments[0]);
    }
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const enrollmentByID = async (req, res, next, id) => {
  try {
    let enrollment = await Enrollment.findOne({
      where: { inscricao_id: id },
      include: [
        {
          model: Lesson,
          as: "Lessons",
        },
        {
          model: Curso,
          as: "Curso",
        },
      ],
    });
    if (!enrollment)
      return res.status("400").json({
        error: "Enrollment not found",
      });
    req.enrollment = {
      curso: enrollment.Curso.dataValues,
      aula_status: enrollment.dataValues.aula_status,
      aula_info: enrollment.Lessons,
    };
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve enrollment",
    });
  }
};

const listEnrolled = async (req, res) => {
  try {
    let enrollments = await Enrollment.findAll({
      where: { student_id: req.auth._id },
      include: [
        {
          model: Curso,
          as: "Curso",
        },
      ],
    });
    res.json(enrollments);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const read = (req, res) => {
  return res.json(req.enrollment);
};

const complete = async (req, res) => {
  let updatedData = {};
  updatedData["lessonStatus.$.complete"] = req.body.complete;
  updatedData.updated = Date.now();
  if (req.body.courseCompleted)
    updatedData.completed = req.body.courseCompleted;

  try {
    let enrollment = await Enrollment.updateOne(
      { "lessonStatus._id": req.body.lessonStatusId },
      { $set: updatedData }
    );
    res.json(enrollment);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let enrollment = req.enrollment;
    let deletedEnrollment = await enrollment.remove();
    res.json(deletedEnrollment);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

module.exports = {
  create,
  findEnrollment,
  enrollmentByID,
  listEnrolled,
  read,
  complete,
  remove,
};
