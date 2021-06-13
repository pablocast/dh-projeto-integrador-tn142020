const Sequelize = require("sequelize"),
  { Lesson } = require("../models");
errorHandler = require("../helpers/dbErrorHandler");

const create = async (req, res) => {
  console.log(req.params.courseId);
  console.log(req);
  const curso_id = req.params.courseId;
  const { lessons } = req.body;

  let lessonsAppended = lessons.map((lesson) => {
    return { ...lesson, curso_id };
  });

  try {
    await Lesson.bulkCreate(lessonsAppended);
    return res.status(200).json({
      message: "Successfully added lessons!",
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
