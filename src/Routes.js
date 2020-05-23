const router = require("express").Router;

const authMidlleware = require("./middlewares/auth");

const app = router();

const UserController = require("./controllers/UserController");
const Authentication = require("./controllers/Authentication");
const ProjectController = require("./controllers/ProjectController");

app.post("/user/register", UserController.create);
app.get("/authentication", Authentication.authenticate);

app.use(authMidlleware);

app.get("/user", UserController.list);
app.get("/project", ProjectController.listAll);
app.get("/project/:_id", ProjectController.show);
app.post("/project", ProjectController.create);

module.exports = app;
