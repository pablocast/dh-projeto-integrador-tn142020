var express = require("express");
var router = express.Router();
const userCtrl = require("../controllers/user.controller");

/* GET users listing. */
router.route("/api/users").post(userCtrl.create);

module.exports = router;
