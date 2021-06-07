const Sequelize = require("sequelize"),
  { Usuario } = require("../models"),
  { Administrador } = require("../models"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  config = require("../config/database.js");
expressJwt = require("express-jwt");

const signin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const typeuser = req.body.typeuser;

    let user =
      typeuser === "user"
        ? await Usuario.findOne({ where: { email: email } })
        : await Administrador.findOne({ where: { email: email } });

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

    let user_id = typeuser === "user" ? user.user_id : user.admin_id;

    const token = jwt.sign(
      {
        _id: user_id,
      },
      config.jwtSecret
    );

    res.cookie("t", token, {
      expire: new Date() + 9999,
    });

    return res.json({
      token,
      user: {
        _id: user_id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status("401").json({
      error: "Não pôde ser logado",
    });
  }
};

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "Usuario deslogado",
  });
};

const hasAuthorization = (req, res, next) => {
  const authorized = req.token == process.env.jwtSecret;
  if (!authorized) {
    return res.status("403").json({
      error: "Não permitido",
    });
  }
  next();
};

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: "auth",
  algorithms: ["HS256"],
});

module.exports = {
  signin,
  signout,
  hasAuthorization,
  requireSignin,
};
