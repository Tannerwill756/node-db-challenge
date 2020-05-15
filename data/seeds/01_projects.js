exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Sprint Challange",
          description: "Seeds are fun",
          completed: false,
        },
        { id: 2, name: "Create Facebook", description: "", completed: true },
        {
          id: 3,
          name: "Cure COVID",
          description: "this will be tough",
          completed: false,
        },
      ]);
    });
};
