import express from "express";
import courseCtrl from "../controllers/course.controller";

const router = express.Router();

router.route("/api/courses").get(courseCtrl.list);

export default router;
