const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: "User already exits" });

      const user = User.create(req.body);

      user.password = undefined;

      return res.status(200).send({ user });
    } catch (error) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },
  async list(req, res) {
    try {
      const user = await User.find();

      return res.status(200).send({ user });
    } catch (error) {
      return res.status(400).send({ error: "Failed to query records" });
    }
  },
};
