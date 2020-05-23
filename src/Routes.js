const router = require("express").Router;

const authMidlleware = require("./middlewares/auth");

const app = router();

const UserController = require("./controllers/UserController");
const Authentication = require("./controllers/Authentication");
const ProjectController = require("./controllers/ProjectController");
const TaskController = require("./controllers/TaskController");

//### Rotas de cadastro e autenticação
app.post("/user/register", UserController.create);
app.get("/authentication", Authentication.authenticate);

//### Midlleware de autenticação com o token JWT
app.use(authMidlleware);

//### Rotas para operações com usuários
app.get("/user", UserController.list);

//### Rotas para operações com projetos
app.post("/project", ProjectController.create);
app.get("/project", ProjectController.listAll);
app.get("/project/:projectId", ProjectController.show);
app.put("/project/:projectId", ProjectController.update);
app.delete("/project/:projectId", ProjectController.delete);

//### Rotas para operações com tasks
app.post("/:projectId/task/new", TaskController.create);
app.get("/task", TaskController.list);

module.exports = app;
