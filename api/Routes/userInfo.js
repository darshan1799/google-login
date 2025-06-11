const express = require("express");
const {
  userInfoController,
  logOut,
} = require("../Controller/userInfoController");
const auth = require("../Middelware/auth");
const route = express.Router();

route.get("/info", auth, userInfoController);
route.get("/logout", auth, logOut);

module.exports = route;
