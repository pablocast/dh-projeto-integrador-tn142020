var express = require("express");
var router = express.Router();
const enrollmentCtrl = require("../controllers/enrollment.controller");
const courseCtrl = require("../controllers/course.controller");
const authCtrl = require("../controllers/auth.controller");

router
  .route("/api/enrollment/enrolled")
  .get(authCtrl.requireSignin, enrollmentCtrl.listEnrolled);

router
  .route("/api/enrollment/new/:courseId")
  .post(
    authCtrl.requireSignin,
    enrollmentCtrl.findEnrollment,
    enrollmentCtrl.create
  );

router
  .route("/api/enrollment/complete/:enrollmentId")
  .put(authCtrl.requireSignin, enrollmentCtrl.complete);

router
  .route("/api/enrollment/:enrollmentId")
  .get(authCtrl.requireSignin, enrollmentCtrl.read)
  .delete(authCtrl.requireSignin, enrollmentCtrl.remove);

router.route("/api/enrollment/:courseId").post(courseCtrl.courseByIDs);

router.param("courseId", courseCtrl.courseByID);
router.param("enrollmentId", enrollmentCtrl.enrollmentByID);

module.exports = router;
