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
import {
  useParams,
  useNavigate,
  Link
} from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

const TicketDetails = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);

  const fetchTicket = async () => {
    try {
      const response = await api.get(
        `/tickets/${ticketId}`
      );

      setTicket(response.data.ticket);

    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to fetch ticket details"
      );
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ticket?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/tickets/${ticket.ticketId}`
      );

      toast.success(
        "Ticket deleted successfully"
      );

      navigate("/tickets");

    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Failed to delete ticket"
      );
    }
  };

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
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="w-full bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="border-b pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {ticket.subject}
          </h1>

          <p className="text-gray-500">
            Ticket Details and Customer Information
          </p>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">
              Ticket ID
            </p>

            <p className="text-lg font-semibold">
              {ticket.ticketId}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">
              Customer Name
            </p>

            <p className="text-lg font-semibold">
              {ticket.customerName}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">
              Customer Email
            </p>

            <p className="text-lg font-semibold">
              {ticket.customerEmail}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">
              Priority
            </p>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
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

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">
              Status
            </p>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
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

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">
              Created At
            </p>

            <p className="text-lg font-semibold">
              {new Date(
                ticket.createdAt
              ).toLocaleString()}
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Description
          </h2>

          <div className="bg-gray-50 p-6 rounded-xl text-gray-700 leading-relaxed">
            {ticket.description}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Notes
          </h2>

          {ticket.notes.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-6 text-gray-500">
              No notes available.
            </div>
          ) : (
            <div className="space-y-4">
              {ticket.notes.map(
                (note, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-500"
                  >
                    <p>{note.text}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">

          <Link
            to={`/tickets/update/${ticket.ticketId}`}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Update Ticket
          </Link>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Delete Ticket
          </button>

        </div>

      </div>
    </div>
  );
};

export default TicketDetails;