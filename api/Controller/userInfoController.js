const userModel = require("../Model/userSchema");
const jwt = require("jsonwebtoken");

const userInfoController = async (req, res) => {
  try {
    const data = await userModel.findOne({ email: req.email });
    return res.status(200).json({ user: data });
  } catch (e) {
    return res.status(500).json({ msg: "Internal server Error!" });
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // only if using HTTPS
    });
    res.status(200).json({ msg: "Logout successfully!" });
  } catch (e) {
    return res.status(500).json({ msg: "Internal server Error !" });
  }
};

module.exports = { userInfoController, logOut };
