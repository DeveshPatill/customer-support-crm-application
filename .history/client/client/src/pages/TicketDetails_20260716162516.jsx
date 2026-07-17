import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const TicketDetails = () => {
  const { ticketId } = useParams();

  const [ticket, setTicket] = useState(null);

  const fetchTicket = async () => {
    try {
      const response = await api.get(`/tickets/${ticketId}`);
      setTicket(response.data.ticket);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  if (!ticket) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{ticket.subject}</h1>

      <p>Ticket ID: {ticket.ticketId}</p>
      <p>Customer: {ticket.customerName}</p>
      <p>Email: {ticket.customerEmail}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>

      <h3>Description</h3>
      <p>{ticket.description}</p>

      <h3>Notes</h3>

      {ticket.notes.map((note, index) => (
        <div key={index}>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketDetails;