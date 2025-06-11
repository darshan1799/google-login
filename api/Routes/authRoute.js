const express = require("express");
const { authController } = require("../Controller/authController");
const route = express.Router();

route.post("/login", authController);

module.exports = route;
