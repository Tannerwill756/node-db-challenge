const express = require("express");

const Project = require("./project-model");

const router = express.Router();

// GET LIST OF RESOURCES
router.get("/resources", (req, res) => {
  Project.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving resources" });
    });
});

// POST A RESOURCE
router.post("/resources", (req, res) => {
  Project.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

// GET A LIST OF PROJECTS
router.get("/", (req, res) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving projects" });
    });
});

// POST A PROJECT
router.post("/", (req, res) => {
  Project.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

// GET A LIST OF TASKS RELATED TO A PROJECT
router.get("/tasks_projects", (req, res) => {
  Project.getTaskswithProject()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving tasks" });
    });
});

// GET A LIST OF ALL TASKS
router.get("/tasks", (req, res) => {
  Project.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "uh oh issue retrieving tasks" });
    });
});

//POST A TASK
router.post("/tasks", (req, res) => {
  Project.addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

// GET PROJECT BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Project.getProjectById(id)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get that project" });
    });
});

//GET TASKS FOR SPECIFIC PROJECT
router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Project.getProjectTasks(id)
    .then((tasks) => {
      res.status(201).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks for that project" });
    });
});

//POST TASK FOR A SPECIFIC PROJECT
// router.post("/:id/tasks", (req, res) => {
//   const task = req.body;
//   const { id } = req.params;

//   Project.getProjectById(id)
//     .then((project) => {
//       Project.postTaskToProject(task, id).then((task) => {
//         res.status(201).json(task);
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to create new task" });
//     });
// });
module.exports = router;
