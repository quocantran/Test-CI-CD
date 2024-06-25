"use strict";

module.exports = class UserService {
  static getAllUsers = (req, res) => {
    return res.status(200).json({
      message: "Get all users",
    });
  };
};
