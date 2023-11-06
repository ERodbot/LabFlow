const express = require("express");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();
const labController = require("../controllers/lab.js");

router.get("/labsDetails", labController.labsDetails);

module.exports = router;