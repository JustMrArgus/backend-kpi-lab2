const express = require("express");

const healthcheckRoutes = require("./routes/healthcheck.route");
const userRoutes = require("./routes/user.route");
const categoryRoutes = require("./routes/category.route");
const recordRoutes = require("./routes/record.route");

const app = express();

app.use(express.json());

app.use("/healthcheck", healthcheckRoutes);

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

module.exports = app;
