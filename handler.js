const { car } = require('../serverless-crud/src/cars/factories/car.factory');
const serverless = require("serverless-http");
const express = require("express");
const { mongoConnect } = require("./src/db/mongo.connection");
const app = express();

mongoConnect();

app.get("/", car.getAll.bind(car));
app.get("/:id", car.getById.bind(car));
app.post("/", car.create.bind(car));
app.put("/:id", car.update.bind(car));
app.delete("/:id", car.delete.bind(car));

module.exports.handler = serverless(app);