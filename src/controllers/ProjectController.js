const Project = require("../models/Project");
const Task = require("../models/Task");

module.exports = {
  //### Controller de criação de projeto
  async create(req, res) {
    const { title, description, tasks } = req.body;

    try {
      const project = await Project.create({
        title,
        description,
        user: req.userId,
      });

      //   await Promise.all(
      //     tasks.map(async (task) => {
      //       const projectTask = new Task({ ...task, project: project._id });

      //       await projectTask.save();

      //       project.task.push(projectTask);
      //     })
      //   );

      //   await project.save();

      return res.send({ project });
    } catch (error) {
      console.log(error);
      return res.send({ error });
    }
  },
  //### Controller de listagem de todos todos os projetos de um usário
  async listAll(req, res) {
    try {
      const project = await Project.find().populate(["tasks", "user"]);

      return res.send({ project });
    } catch (error) {
      return res.send({ error });
    }
  },
  //### Controller de listagem de um projeto específico de um usuário
  async show(req, res) {
    try {
      const project = await Project.findById(req.params.projectId).populate([
        "tasks",
        "user",
      ]);

      return res.send({ project });
    } catch (error) {
      return res.send({ error });
    }
  },
  //### Controller de alteração de projetos
  async update(req, res) {
    const { title, description } = req.body;

    try {
      const project = await Project.findByIdAndUpdate(
        req.params.projectId,
        {
          title,
          description,
        },
        { new: true }
      );

      return res.status(200).send({ project });
    } catch (error) {
      return res.send({ error });
    }
  },
  //### Controller de remoção de projetos
  async delete(req, res) {
    try {
      await Project.findByIdAndRemove(req.params.projectId);

      return res.status(200).send("Project removed");
    } catch (error) {
      return res.send({ error });
    }
  },
};
