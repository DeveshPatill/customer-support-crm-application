// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../services/api";

// const TicketDetails = () => {
//   const { ticketId } = useParams();

//   const [ticket, setTicket] = useState(null);

//   const fetchTicket = async () => {
//     try {
//       const response = await api.get(
//         `/tickets/${ticketId}`
//       );

//       setTicket(response.data.ticket);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTicket();
//   }, []);

//   if (!ticket) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       <h1>{ticket.subject}</h1>

//       <p>
//         <strong>Ticket ID:</strong>
//         {" "}
//         {ticket.ticketId}
//       </p>

//       <p>
//         <strong>Customer:</strong>
//         {" "}
//         {ticket.customerName}
//       </p>

//       <p>
//         <strong>Email:</strong>
//         {" "}
//         {ticket.customerEmail}
//       </p>

//       <p>
//         <strong>Status:</strong>
//         {" "}
//         {ticket.status}
//       </p>

//       <p>
//         <strong>Priority:</strong>
//         {" "}
//         {ticket.priority}
//       </p>

//       <h3>Description</h3>

//       <p>{ticket.description}</p>

//       <h3>Notes</h3>

//       {ticket.notes.length === 0 ? (
//         <p>No notes available.</p>
//       ) : (
//         ticket.notes.map((note, index) => (
//           <div key={index}>
//             <p>{note.text}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TicketDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

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
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-600">
          Loading Ticket...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="w-full">

        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {ticket.subject}
          </h1>

          <p className="text-gray-500">
            Ticket Details and Customer Information
          </p>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm">Ticket ID</p>
            <p className="text-lg font-semibold">
              {ticket.ticketId}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm">Customer Name</p>
            <p className="text-lg font-semibold">
              {ticket.customerName}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm">Customer Email</p>
            <p className="text-lg font-semibold">
              {ticket.customerEmail}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm">Priority</p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                ticket.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : ticket.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {ticket.priority}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm">Status</p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                ticket.status === "Open"
                  ? "bg-blue-100 text-blue-700"
                  : ticket.status === "In Progress"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {ticket.status}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-sm">Created On</p>
            <p className="text-lg font-semibold">
              {new Date(ticket.createdAt).toLocaleString()}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Description
          </h2>

          <div className="bg-gray-50 rounded-xl p-5 text-gray-700 leading-relaxed">
            {ticket.description}
          </div>
        </div>

        {/* Notes */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Notes
          </h2>

          {ticket.notes.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-5 text-gray-500">
              No notes available.
            </div>
          ) : (
            <div className="space-y-4">
              {ticket.notes.map((note, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-500"
                >
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TicketDetails;