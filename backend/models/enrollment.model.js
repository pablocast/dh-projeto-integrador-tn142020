module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define(
    "Enrollment",
    {
      inscricao_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      curso_id: {
        type: DataTypes.INTEGER,
        primaryKey: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      enrolled: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      aula_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "inscricoes",
      timestamps: false,
    }
  );

  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.Curso, { as: "Curso", foreignKey: "curso_id" });
  };

  return Enrollment;
};
