const express = require("express");

const healthcheckRoutes = require("./routes/healthcheck.route");

const app = express();

app.use(express.json());

app.use("/", healthcheckRoutes);

module.exports = app;
