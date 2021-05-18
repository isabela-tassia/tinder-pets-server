require("dotenv").config();
const express = require("express");

// 1. Instance a new webserver

const app = express();

// 2. Configure which routes we'll listen to on the web server, and what we're going to respond to their acquisitions

const db = require("./config/config.db")
db();

app.use(express.json());

const userRouter = require("./routes/user.routes");
app.use("/", userRouter);

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);