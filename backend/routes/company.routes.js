var express = require("express");
var router = express.Router();
const companyCtrl = require("../controllers/company.controller");

/* GET users listing. */
router.route("/api/companies").get(companyCtrl.list).post(companyCtrl.create);

router.route("/api/companies/:companyId").delete(companyCtrl.destroy);

module.exports = router;
