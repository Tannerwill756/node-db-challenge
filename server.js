const express = require("express");

const projectRouter = require("./project/project-router");

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);

module.exports = server;
