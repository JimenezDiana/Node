const express = require("express");
const cors = require("cors");
const userRouters = require("./routers/user.routers");
const errorHandling = require("./error/errorHandling");

const app = express();
app.set("port", process.env.PORT || 5001);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouters);
app.use(function (_, res, _) {
  res
    .status(404)
    .json({ error: true, codigo: 404, menssage: "Endpoint doesnt found" });
});

app.use(errorHandling);

module.exports = app;
