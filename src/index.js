const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const { createChannel } = require("./utils/messageQueue");

const ticketController = require("./controllers/ticket-controller");
const jobs = require("./utils/job");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //const channel = await createChannel();

  app.post("/api/v1/tickets", ticketController.create);
  app.listen(PORT, () => {
    console.log("Server started sucessfully...");
    //jobs();
  });
};

setupAndStartServer();
