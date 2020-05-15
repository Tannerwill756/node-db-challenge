exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "set up, install all dependencies",
          notes: "blah blah",
          completed: true,
          project_id: 1,
        },
        {
          id: 2,
          description: "pass sprint, complete mvp",
          notes: "",
          completed: false,
          project_id: 1,
        },
        {
          id: 3,
          description: "Plan out state management",
          notes: "I dont know here to start",
          completed: false,
          project_id: 2,
        },
      ]);
    });
};
