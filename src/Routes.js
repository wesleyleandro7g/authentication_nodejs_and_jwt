const router = require("express").Router;

const authMidlleware = require("./middlewares/auth");

const app = router();

const UserController = require("./controllers/UserController");
const Authentication = require("./controllers/Authentication");
const ProjectController = require("./controllers/ProjectController");

//### Rotas de cadastro e autenticação
app.post("/user/register", UserController.create);
app.get("/authentication", Authentication.authenticate);

//### Midlleware de autenticação com o token JWT
app.use(authMidlleware);

//### Rotas para operações com usuários
app.get("/user", UserController.list);

//### Rotas para operações com projetos
app.get("/project", ProjectController.listAll);
app.get("/project/:projectId", ProjectController.show);
app.put("/project/:projectId", ProjectController.update);
app.delete("/project/:projectId", ProjectController.delete);
app.post("/project", ProjectController.create);

module.exports = app;
