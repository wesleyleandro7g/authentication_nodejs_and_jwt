const Project = require("../models/Project");

module.exports = {
  async create(req, res) {
    try {
      const project = await Project.create({ ...req.body, user: req.userId });

      return res.send({ project });
    } catch (error) {
      return res.send({ error });
    }
  },
  async listAll(req, res) {
    try {
      const project = await Project.find();

      return res.send({ project });
    } catch (error) {
      return res.send({ error });
    }
  },
  async show(req, res) {
    try {
      const project = await Project.findById(req.headers._id);

      return res.send({ project });
    } catch (error) {
      return res.send({ error });
    }
  },
};
