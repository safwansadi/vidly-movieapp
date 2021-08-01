const dotenv = require("dotenv");
dotenv.config();

module.exports = function () {
  if (!process.env.JWTSECRET) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
};
