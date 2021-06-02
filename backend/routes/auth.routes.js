var express = require("express");
var router = express.Router();
const authCtrl = require("../controllers/auth.controller");
const adminCtrl = require("../controllers/admin.controller");

router.route("/auth/signin").post(authCtrl.signin);

router.route("/auth/signout").get(authCtrl.signout);

router.route("/auth/admin").post(authCtrl.hasAuthorization, adminCtrl.create);

module.exports = router;
