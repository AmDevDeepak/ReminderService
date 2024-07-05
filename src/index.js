const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const cron = require("node-cron");
//const { sendBasicEmail } = require("./services/email-service");
//const db = require("./models/index");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log("Server started sucessfully...");
    // sendBasicEmail(
    //   "support@admin.com",
    //   "am.deepakkumarchauhan@gmail.com",
    //   "This is a testing email from our team.",
    //   "Hey, I hope you like the service of reminders. lots of love."
    // );
    cron.schedule("*/2 * * * * ", () => {
      console.log("Running a task every 2 minutes.");
    });
  });
};

setupAndStartServer();
