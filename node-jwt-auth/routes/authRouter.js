const { Router } = require("express");
const {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
} = require("../controllers/authControllers");

const routes = Router();

routes.get("/signup", signup_get);
routes.post("/signup", signup_post);
routes.get("/login", login_get);
routes.post("/login", login_post);
routes.get("/logout", logout_get);

module.exports = routes;
