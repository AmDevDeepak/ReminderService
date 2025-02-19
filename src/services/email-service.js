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

const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "CREATE_TICKET":
      await createNotification(data);
      break;
    case "SEND_BASIC_MAIL":
      sendBasicEmail(data);
      break;
    default:
      console.log("No valid event found");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendigeEmail,
  createNotification,
  updateTicket,
  subscribeEvents,
};
