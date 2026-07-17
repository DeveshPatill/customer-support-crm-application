import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await api.get("/tickets");
      setTickets(response.data.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const closedTickets = tickets.filter(
    (ticket) => ticket.status === "Closed"
  ).length;

  const recentTickets = tickets.slice(0, 5);

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Total Tickets: {totalTickets}</h2>
      <h2>Open Tickets: {openTickets}</h2>
      <h2>In Progress: {inProgressTickets}</h2>
      <h2>Closed Tickets: {closedTickets}</h2>

      <hr />

      <Link to="/tickets/new">
        Create Ticket
      </Link>

      <br />
      <br />

      <Link to="/tickets">
        View All Tickets
      </Link>

      <hr />

      <h2>Recent Tickets</h2>

      {recentTickets.map((ticket) => (
        <div key={ticket._id}>
          <h3>{ticket.subject}</h3>

          <p>{ticket.customerName}</p>

          <p>{ticket.status}</p>

          <Link to={`/tickets/${ticket.ticketId}`}>
            View Details
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;