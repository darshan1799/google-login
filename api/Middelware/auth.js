const jwt = require("jsonwebtoken");
const userModel = require("../Model/userSchema");

const auth = async (req, res, next) => {
  try {
    const Token = req.cookies.token;
    const verify = await jwt.verify(Token, process.env.JWT_KEY);
    const user = await userModel.findOne({ email: verify?.email });
    if (!user) {
      return res.status(401).json({ msg: "Unauthorized Access" });
    } else {
      req.email = verify.email;
      next();
    }
  } catch (e) {
    return res.status(401).json({ msg: "Unauthorized Access" });
  }
};
module.exports = auth;
