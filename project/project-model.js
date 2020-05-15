const db = require("../data/db-config");

module.exports = {
  getResources,
  addResource,
  getProjects,
  addProject,
  getTasks,
  getTaskswithProject,
  addTask,
  getProjectById,
  getProjectTasks,
  //   postTaskToProject,
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

function getTaskswithProject() {
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

function getTasks() {
  return db("tasks");
}

function addTask(task) {
  return db("tasks").insert(task, "id");
}

// -------------------- extra stuff

function getProjectById(id) {
  return db("projects").where({ id: id }).first();
}

function getProjectTasks(id) {
  return db("tasks")
    .select(
      "tasks.description AS taskDescription",
      "tasks.notes AS taskNotes",
      "projects.id AS project_id"
    )
    .join("projects", "tasks.project_id", "=", "projects.id")
    .where("tasks.project_id", id);
}

// function postTaskToProject(task, project_id) {
//   console.log("post task!!", task);
//   const newtask = {
//     project_id: project_id,
//     Description: task.taskDescription,
//     notes: task.taskNotes,
//   };
//   return db("tasks")
//     .insert(newtask, "id")
//     .then((project_id) => {
//       return getProjectTasks(newtask.project_id);
//     });
// }
