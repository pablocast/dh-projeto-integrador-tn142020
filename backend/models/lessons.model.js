module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define(
    "Lesson",
    {
      curso_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      aula_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      aula_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aula_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aula_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "aulas",
      timestamps: false,
    }
  );

  Lesson.associate = (models) => {
    Lesson.belongsTo(models.Curso, { as: "Curso", foreignKey: "curso_id" });
  };

  return Lesson;
};
