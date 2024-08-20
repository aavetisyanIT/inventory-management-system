const Users = require("../models/Users");
const jwt = require("jsonwebtoken");

require("dotenv").config();

function handleErrors(err) {
  console.log("AAA handleErrors err:", err);
  const errors = { email: "", password: "" };

  if (err.message === "invalid email") {
    errors.email = "that is invalid email";
  }
  if (err.message === "invalid password") {
    errors.password = "that is invalid password";
  }

  if (err.code === 11000) {
    errors.email = "This email already registered";
    return errors;
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(errObj => {
      const { properties } = errObj;
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

const maxAge = 3 * 24 * 60 * 60;
function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
}

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.error("AAA", err.message);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await Users.create({ email, password });
    const token = createToken(newUser._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: newUser._id });
  } catch (err) {
    console.log("User create error", err);
    const errors = handleErrors(err);
    res.status(404).json({ errors });
  }
};
