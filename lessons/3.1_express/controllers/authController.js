const UserModel = require("../db/models/User.js");

const login = async (req, res) => {
  const { password, email } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) return res.status(400).json("Invalid Credentials");

  if (user.password !== password)
    return res.status(400).json("Invalid Credentials");

  res.json({ id: user._id, name: user.name, email: user.email });
};

module.exports = { login };
