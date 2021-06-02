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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
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
          user.password = await bcrypt.hash(user.password, salt);
          user.salt = salt;
        },
      },
      sequelize,
    }
  );

  return Administrador;
};
