var express = require("express");
var router = express.Router();
const userCtrl = require("../controllers/user.controller");

/* GET users listing. */
router.route("/api/users").get(userCtrl.list).post(userCtrl.create);
router.route("/api/users/:topn").get(userCtrl.listTopN)

module.exports = router;
