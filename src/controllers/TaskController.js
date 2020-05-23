const Task = require("../models/Task");

module.exports = {
  async create(req, res) {
    try {
      const task = await Task.create({
        ...req.body,
        project: req.params.projectId,
        assignedTo: req.userId,
      });

      return res.status(200).send({ task });
    } catch (error) {
      return res.send({ error });
    }
  },

  async list(req, res) {
    const tasks = await Task.find();

    return res.send({ tasks });
  },
};
