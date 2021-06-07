const Sequelize = require("sequelize"),
  { Enrollment, Curso } = require("../models");
errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  /* TO DO MODIFY THIS OBJECT AND PARAMETERS THAT ARE PASSED */
  let newEnrollment = {
    curso_id: req.course,
    student_id: req.auth,
  };
  newEnrollment.lessonStatus = req.course.lessons.map((lesson) => {
    return { lesson: lesson, complete: false };
  });

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
      where: { curso_id: req.course._id, student_id: req.auth._id },
    });
    if (enrollments.length == 0) {
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
    let enrollment = await Enrollment.findById(id);
    if (!enrollment)
      return res.status("400").json({
        error: "Enrollment not found",
      });
    req.enrollment = { ...enrollment.student_id, ...enrollment.inscricao_id };
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

module.exports = {
  create,
  findEnrollment,
  enrollmentByID,
  listEnrolled,
};
