// import { useEffect, useState } from "react";
// import api from "../services/api";
// import { Link } from "react-router-dom";

// const Tickets = () => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("");

//   const fetchTickets = async () => {
//     try {
//       setLoading(true);

//       const response = await api.get(
//         `/tickets?search=${search}&status=${status}`
//       );

//       setTickets(response.data.tickets);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTickets();
//   }, [search, status]);

//   if (loading) {
//     return <h2>Loading tickets...</h2>;
//   }

//   return (
//     <div>
//       <h1>All Tickets</h1>

//       <Link to="/tickets/new">
//         Create Ticket
//       </Link>

//       <br />
//       <br />

//       <input
//         type="text"
//         placeholder="Search tickets..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <option value="">All Status</option>
//         <option value="Open">Open</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Closed">Closed</option>
//       </select>

//       <hr />

//       {tickets.length === 0 ? (
//         <p>No tickets found.</p>
//       ) : (
//         tickets.map((ticket) => (
//           <div key={ticket._id}>
//             <h3>{ticket.subject}</h3>

//             <p>
//               <strong>Ticket ID:</strong> {ticket.ticketId}
//             </p>

//             <p>
//               <strong>Customer:</strong> {ticket.customerName}
//             </p>

//             <p>
//               <strong>Email:</strong> {ticket.customerEmail}
//             </p>

//             <p>
//               <strong>Status:</strong> {ticket.status}
//             </p>

//             <p>
//               <strong>Priority:</strong> {ticket.priority}
//             </p>

//             <Link to={`/tickets/${ticket.ticketId}`}>
//               View Details
//             </Link>

//             <hr />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Tickets;

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
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading tickets...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Support Tickets
          </h1>

          <Link
            to="/tickets/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            + Create Ticket
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Tickets */}
        {tickets.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <p className="text-gray-500 text-xl">
              No tickets found.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {ticket.subject}
                    </h3>

                    <p className="text-gray-600">
                      <span className="font-semibold">Ticket ID:</span>{" "}
                      {ticket.ticketId}
                    </p>

                    <p className="text-gray-600">
                      <span className="font-semibold">Customer:</span>{" "}
                      {ticket.customerName}
                    </p>

                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span>{" "}
                      {ticket.customerEmail}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 text-right">
                    <p className="mb-2">
                      <span className="font-semibold">Status:</span>{" "}
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                        {ticket.status}
                      </span>
                    </p>

                    <p className="mb-4">
                      <span className="font-semibold">Priority:</span>{" "}
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm">
                        {ticket.priority}
                      </span>
                    </p>

                    <Link
                      to={`/tickets/${ticket.ticketId}`}
                      className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Tickets;