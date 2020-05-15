const db = require("../data/db-config");

module.exports = {
  getResources,
  addResource,
  getProjects,
  addProject,
  getTasks,
};

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources").insert(resource, "id");
}

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects").insert(project, "id");
}

function getTasks() {
  return db("tasks")
    .select(
      "tasks.description AS taskDescription",
      "tasks.notes AS taskNotes",
      "projects.name AS projectName",
      "projects.description AS projectDescription"
    )
    .join("projects", "tasks.project_id", "=", "projects.id");
}

/* 
SELECT tasks.description AS taskDescription,
       tasks.notes AS taskNotes,
       projects.name AS projectName,
       projects.description AS projectDescription
  FROM tasks
       INNER JOIN
       projects
 WHERE tasks.project_id = projects.id;

*/
