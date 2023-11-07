const express = require("express");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();
const userController = require("../controllers/user.js");

router.get("/users", userController.getUsers);

module.exports = router;