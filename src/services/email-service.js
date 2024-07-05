const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");
const ticketRepository = new TicketRepository();
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

const fetchPendigeEmail = async (timestamp) => {
  try {
    const response = await ticketRepository.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const reponse = await ticketRepository.update(ticketId, data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendigeEmail,
  createNotification,
  updateTicket
};
