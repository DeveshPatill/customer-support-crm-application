// import { useEffect, useState } from "react";
// import api from "../services/api";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const response = await api.get("/tickets");
//       setTickets(response.data.tickets);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const totalTickets = tickets.length;

//   const openTickets = tickets.filter(
//     (ticket) => ticket.status === "Open"
//   ).length;

//   const inProgressTickets = tickets.filter(
//     (ticket) => ticket.status === "In Progress"
//   ).length;

//   const closedTickets = tickets.filter(
//     (ticket) => ticket.status === "Closed"
//   ).length;

//   const recentTickets = tickets.slice(0, 5);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <h2>Total Tickets: {totalTickets}</h2>
//       <h2>Open Tickets: {openTickets}</h2>
//       <h2>In Progress: {inProgressTickets}</h2>
//       <h2>Closed Tickets: {closedTickets}</h2>

//       <hr />

//       <Link to="/tickets/new">
//         Create Ticket
//       </Link>

//       <br />
//       <br />

//       <Link to="/tickets">
//         View All Tickets
//       </Link>

//       <hr />

//       <h2>Recent Tickets</h2>

//       {recentTickets.map((ticket) => (
//         <div key={ticket._id}>
//           <h3>{ticket.subject}</h3>

//           <p>{ticket.customerName}</p>

//           <p>{ticket.status}</p>

//           <Link to={`/tickets/${ticket.ticketId}`}>
//             View Details
//           </Link>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;

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

  const recentTickets = tickets.slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="w-full">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Welcome to your Customer Support CRM
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">Total Tickets</p>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              {totalTickets}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">Open Tickets</p>
            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              {openTickets}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">In Progress</p>
            <h2 className="text-4xl font-bold text-orange-500 mt-2">
              {inProgressTickets}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-500">Closed Tickets</p>
            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {closedTickets}
            </h2>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 mt-8">
          <Link
            to="/tickets/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Ticket
          </Link>

          <Link
            to="/tickets"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            View All Tickets
          </Link>
        </div>

        {/* Recent Tickets */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
          <h2 className="text-2xl font-bold mb-20">
            Recent Tickets
          </h2>

          {recentTickets.length === 0 ? (
            <p className="text-gray-500">
              No tickets available.
            </p>
          ) : (
            <div className="space-y-4">
              {recentTickets.map((ticket) => (
                <div
                  key={ticket._id}
                  className="border rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {ticket.subject}
                      </h3>

                      <p className="text-gray-600 mt-1">
                        Customer: {ticket.customerName}
                      </p>

                      <p className="text-gray-600">
                        Ticket ID: {ticket.ticketId}
                      </p>
                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          ticket.status === "Open"
                            ? "bg-blue-100 text-blue-700"
                            : ticket.status === "In Progress"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {ticket.status}
                      </span>

                      <Link
                        to={`/tickets/${ticket.ticketId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details →
                      </Link>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;