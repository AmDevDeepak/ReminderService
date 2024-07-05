const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ticketController = require("./controllers/ticket-controller");
const jobs = require("./utils/job");
const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", ticketController.create);
  app.listen(PORT, () => {
    console.log("Server started sucessfully...");
    jobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "am.deepakkumarchauhan@gmail.com",
    //   "This is a testing email from our team.",
    //   "Hey, I hope you like the service of reminders. lots of love."
    // );
  });
};

setupAndStartServer();
