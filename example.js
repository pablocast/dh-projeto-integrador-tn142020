var models = require("./backend/models");

const Enrollment = models.Enrollment;

Enrollment.findOne({
  where: { inscricao_id: 1 },
  include: [
    {
      model: models.Curso,
      as: "Curso",
    },
  ],
}).then((enrollment) => console.log(enrollment.Curso.dataValues.curso_name));
