const db = require("../data/db-config");

module.exports = {
  getResources,
  addResource,
  getProjects,
  addProject,
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
