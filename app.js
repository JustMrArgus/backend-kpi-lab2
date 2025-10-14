const express = require("express");

const healthcheckRoutes = require("./routes/healthcheck.route");
const userRoutes = require("./routes/user.route");

const app = express();

app.use(express.json());

app.use("/healthcheck", healthcheckRoutes);
app.use("/users", userRoutes);

module.exports = app;
