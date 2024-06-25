"use strict";

const UserService = require("../services/user.service");

class UserController {
  getAllUsers = async (req, res) => {
    return UserService.getAllUsers(req, res);
  };
}

module.exports = new UserController();
