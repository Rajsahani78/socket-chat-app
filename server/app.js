const express = require("express");
const cors = require("cors");
const mainRoute = require("./src/routes");
const errorMiddleware = require("./src/middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Routes
app.use("/v1/api", mainRoute)

app.use(errorMiddleware)

module.exports = app;