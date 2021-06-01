const Sequelize = require("sequelize"),
  { Usuario } = require("../models"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  config = require("../config/database.js");

const signin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    let user = await Usuario.findOne({ where: { username: username } });
    const match = await bcrypt.compare(password, user.password);

    if (!user)
      return res.status("401").json({
        error: "Usuario não encontrado",
      });

    if (!match) {
      return res.status("401").send({
        error: "Usuario ou senha errados",
      });
    }

    const token = jwt.sign(
      {
        _id: user.user_id,
      },
      config.jwtSecret
    );

    res.cookie("t", token, {
      expire: new Date() + 9999,
    });

    return res.json({
      token,
      user: {
        _id: user.user_id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status("401").json({
      error: "Não conseguiu logar",
    });
  }
};

module.exports = {
  signin,
};
