const { Op } = require("sequelize");
const { NotificationTicket } = require("../models/index");

class TicketRepository {
  async getAll() {
    try {
      const tickets = NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const ticket = NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async get(filter) {
    try {
      const ticket = NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },async get(filter) {
          try {
            const ticket = await NotificationTicket.findOne({
              where: {
                status: filter.status,
                notificationTime: {
                  [Op.lte]: new Date(),
                },
              },
            });
            return ticket;
          } catch (error) {
            throw error;
          }
        }
      });
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if (data.status) 
        ticket.status = data.status; 
      await ticket.save();
      return ticket;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketRepository;
