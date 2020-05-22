const jwt = require("jsonwebtoken");

const authConfig = require("./authConfig");

module.exports = {
  async sign(payload) {
    const token = await jwt.sign({ payload }, authConfig.secret, {
      expiresIn: 300, // expires in 5min
    });

    return token;
  },
};
