exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "laptop", description: "very slow and old" },
        { id: 2, name: "calculator", description: "good for math things" },
        { id: 3, name: "printer", description: "it works i think" },
      ]);
    });
};
