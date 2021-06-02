const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Administrador = sequelize.define(
    "Administrador",
    {
      admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      salt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "administradores",
      timestamps: false,
      hooks: {
        beforeValidate: async (user, options) => {
          const salt = await bcrypt.genSalt(10);
          user.admin_password = await bcrypt.hash(user.admin_password, salt);
          user.salt = salt;
        },
      },
      sequelize,
    }
  );

  return Administrador;
};
