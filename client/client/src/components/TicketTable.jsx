import { Link } from "react-router-dom";

const TicketTable = ({ tickets }) => {
  return (
    
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full">
        

        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left">Ticket ID</th>
            <th className="px-6 py-4 text-left">Customer</th>
            <th className="px-6 py-4 text-left">Subject</th>
            <th className="px-6 py-4 text-left">Priority</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {tickets.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-8 text-gray-500"
              >
                No tickets found
              </td>
            </tr>
          ) : (
            tickets.map((ticket) => (
              <tr
                key={ticket._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  {ticket.ticketId}
                </td>

                <td className="px-6 py-4">
                  {ticket.customerName}
                </td>

                <td className="px-6 py-4">
                  {ticket.subject}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ticket.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : ticket.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ticket.status === "Open"
                        ? "bg-blue-100 text-blue-700"
                        : ticket.status === "In Progress"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <Link
                    to={`/tickets/${ticket.ticketId}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default TicketTable;