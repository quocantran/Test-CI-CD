const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/user", userController.getAllUsers);

module.exports = router;
