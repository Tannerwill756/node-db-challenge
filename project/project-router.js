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

router.post("/", (req, res) => {
  Project.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.get("/tasks_projects", (req, res) => {
  Project.getTaskswithProject()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving tasks" });
    });
});

router.get("/tasks", (req, res) => {
  Project.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving tasks" });
    });
});

router.post("/tasks", (req, res) => {
  Project.addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});
module.exports = router;
