var express = require("express");
var router = express.Router();
const courseCtrl = require("../controllers/course.controller");

/* GET users listing. */
router.route("/api/courses").get(courseCtrl.list).post(courseCtrl.create);

module.exports = router;
