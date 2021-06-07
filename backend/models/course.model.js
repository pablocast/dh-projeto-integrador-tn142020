module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define(
    "Curso",
    {
      curso_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      curso_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      curso_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      curso_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      curso_duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      curso_language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      curso_skills: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "descricoes",
      timestamps: false,
    }
  );

  Curso.associate = (models) => {
    Curso.hasMany(models.Enrollment, {
      as: "Enrollments",
      foreignKey: "curso_id",
    });
  };

  return Curso;
};
