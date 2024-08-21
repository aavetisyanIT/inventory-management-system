const { verify } = require("jsonwebtoken");
require("dotenv").config();

const Users = require("../models/Users");

function requireAuth(req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    return res.redirect("/login");
  }

  verify(token, process.env.JWT_SECRET, err => {
    if (err) {
      return res.redirect("/login");
    }
    next();
  });
}

const populateUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    res.locals.user = null;
    return next();
  }

  verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      res.locals.user = null;
      return next();
    }
    try {
      const loggedInUser = await Users.findById(decodedToken.id);
      res.locals.user = loggedInUser;
      return next();
    } catch (err) {
      console.log("Error finding a user", err);
      res.locals.user = null;
      return next();
    }
  });
};

module.exports = { requireAuth, populateUser };
