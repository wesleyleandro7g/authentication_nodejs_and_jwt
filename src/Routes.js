const router = require("express").Router;

const authMidlleware = require("./middlewares/auth");

const app = router();

const UserController = require("./controllers/UserController");
const Authentication = require("./controllers/Authentication");

app.post("/user/register", UserController.create);
app.get("/authentication", Authentication.authenticate);

app.use(authMidlleware);

app.get("/user", UserController.list);

module.exports = app;
