const express = require('express');
const router = express.Router();
var opeController = require('../controller/opeController');

router.get("/opera", opeController.abreAdd);
router.post("/opera", opeController.add);

module.exports = router;
