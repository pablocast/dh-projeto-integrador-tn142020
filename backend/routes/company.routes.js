var express = require("express");
var router = express.Router();
const companyCtrl = require("../controllers/company.controller");

/* GET users listing. */
router.route("/api/companies").get(companyCtrl.list).post(companyCtrl.create);

module.exports = router;
