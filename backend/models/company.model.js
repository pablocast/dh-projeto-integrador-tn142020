module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    "Empresa",
    {
      company_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employee_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_num_devs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      }
    },
    {
      tableName: "empresas",
      timestamps: false,
    }
  );

  return Empresa;
};
