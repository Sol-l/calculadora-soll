const express = require("express");
const router = express.Router();
var calcularController = require("../controller/calcularController");

router.get("/calc", calcularController.abreCalc);
router.post("/calc", calcularController.calc);

module.exports = router;