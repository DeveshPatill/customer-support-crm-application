import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    try {
      const response = await api.get("/tickets");
      setTickets(response.data.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>All Tickets</h1>

      <Link to="/tickets/new">
        Create Ticket
      </Link>

      <hr />

      {tickets.map((ticket) => (
        <div key={ticket._id}>
          <h3>{ticket.subject}</h3>

          <p>{ticket.customerName}</p>

          <p>{ticket.status}</p>

          <p>{ticket.priority}</p>

          <Link to={`/tickets/${ticket.ticketId}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Tickets;