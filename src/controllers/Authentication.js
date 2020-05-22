const User = require("../models/User");
const bcrypt = require("bcryptjs");

const jwt = require("../config/jwt");

module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    try {
      if (!user) return res.status(404).send({ error: "User not found" });

      if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).send({ error: "Invalid password" });

      user.password = undefined;

      const token = await jwt.sign(user.id);

      return res.status(200).send({ user, token: token });
    } catch (error) {
      return res.status(400).send({ error: "Failed to query records" });
    }
  },
};
