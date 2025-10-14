const express = require("express");

const app = express();

app.use(express.json());

app.get("/healthcheck", (req, res) => {
  res.status(200).json({
    status: "ok",
    date: new Date().toISOString(),
  });
});

module.exports = app;
