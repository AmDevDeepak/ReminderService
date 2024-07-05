const sender = require("../config/emailConfig");

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        sender.sendMail({
          from: mailFrom,
          to: mailTo,
          subject: mailSubject,
          text: mailBody,
        });
    } catch (error) {
       console.log("Error sending basic email", error); 
    }
};

module.exports = {
  sendBasicEmail,
}; 
