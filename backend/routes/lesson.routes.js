var express = require("express");
var router = express.Router();
const authCtrl = require("../controllers/auth.controller");
const lessonCtrl = require("../controllers/lesson.controller");

router.route("/api/lesson/new/:courseId").post(lessonCtrl.create);

module.exports = router;
