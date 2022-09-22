const { car } = require('./src/cars/factories/car.factory');
const mongoose = require('mongoose');
require('dotenv').config();
const serverless = require("serverless-http");
const express = require("express");
//const { mongoConnect, mongoDisconnect } = require("./src/db/mongo.connection");
const app = express();

app.get("/", car.getAll.bind(car));
app.get("/:id", car.getById.bind(car));
app.post("/", car.create.bind(car));
app.put("/:id", car.update.bind(car));
app.delete("/:id", car.delete.bind(car));

let cachedDb = null;
const uri = process.env.MONGO;

module.exports.handler = serverless(
  app,
  {
    request: async (request, event, context) => {
      context.callbackWaitsForEmptyEventLoop = false;

      if (cachedDb === null) {
        cachedDb = mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true, serverSelectionTimeoutMS: 5000
        });
      }

      await cachedDb;
    },
  }
);