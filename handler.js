const { car } = require('./src/cars/factories/car.factory');
const serverless = require("serverless-http");
const express = require("express");
const { mongoConnect, mongoDisconnect } = require("./src/db/mongo.connection");
const app = express();

app.get("/", car.getAll.bind(car));
app.get("/:id", car.getById.bind(car));
app.post("/", car.create.bind(car));
app.put("/:id", car.update.bind(car));
app.delete("/:id", car.delete.bind(car));

const dbAndApp = () => {
  mongoConnect();
  return app;
}

module.exports.handler = serverless(dbAndApp(), { callbackWaitsForEmptyEventLoop: false });