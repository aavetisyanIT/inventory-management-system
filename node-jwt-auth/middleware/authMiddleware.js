const jwt = require("jsonwebtoken");
require("dotenv").config();

async function requireAuth(req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    return res.redirect("/login");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.log("AAA token error: ", err);
      return res.redirect("/login");
    }
    console.log("AAA decodedToken", decodedToken);
    next();
  });
}

module.exports = { requireAuth };
