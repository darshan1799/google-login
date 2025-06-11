const userModel = require("../Model/userSchema");
const jwt = require("jsonwebtoken");

const authController = async (req, res) => {
  try {
    const { email, phoneNumber, name, photoURL: photoUrl } = req.body;
    console.log(req.body);
    let user = await userModel.findOne({ email });
    if (!user) {
      user = userModel.create({
        name,
        email,
        phoneNumber,
        photoUrl,
      });
    }
    const { _id } = user;

    const token = jwt.sign({ _id, email }, process.env.JWT_KEY);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000 * 2,
      secure: true,
      sameSite: "None",
    });
    res.status(200).json({ msg: "login sucessfully!" });
  } catch (e) {
    res.status(500).json({ msg: "Internal Server Error!", err: e.message });
  }
};

module.exports = { authController };
