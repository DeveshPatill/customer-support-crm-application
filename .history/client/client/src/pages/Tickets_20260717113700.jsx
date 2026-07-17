import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const fetchTickets = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `/tickets?search=${search}&status=${status}`
      );

      setTickets(response.data.tickets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [search, status]);

  if (loading) {
    return <h2>Loading tickets...</h2>;
  }

  return (
    <div>
      <h1>All Tickets</h1>

      <Link to="/tickets/new">
        Create Ticket
      </Link>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search tickets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>

      <hr />

      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket._id}>
            <h3>{ticket.subject}</h3>

            <p>
              <strong>Ticket ID:</strong> {ticket.ticketId}
            </p>

            <p>
              <strong>Customer:</strong> {ticket.customerName}
            </p>

            <p>
              <strong>Email:</strong> {ticket.customerEmail}
            </p>

            <p>
              <strong>Status:</strong> {ticket.status}
            </p>

            <p>
              <strong>Priority:</strong> {ticket.priority}
            </p>

            <Link to={`/tickets/${ticket.ticketId}`}>
              View Details
            </Link>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Tickets;