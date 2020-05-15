const express = require("express");

const Project = require("./project-model");

const router = express.Router();

router.get("/resources", (req, res) => {
  Project.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving resources" });
    });
});

router.post("/resources", (req, res) => {
  Project.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.get("/", (req, res) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving projects" });
    });
});

module.exports = router;
