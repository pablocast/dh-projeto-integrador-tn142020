import express from "express";
import userCtrl from "../controllers/user.controller";
import companyCtrl from "../controllers/company.controller";
import courseCtrl from "../controllers/course.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list);

router.route("/api/companies").get(companyCtrl.list);

router.route("/api/courses").get(courseCtrl.list);

export default router;


