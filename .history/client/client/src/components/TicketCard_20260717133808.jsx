import { Link } from "react-router-dom";
import { FaTicketAlt, FaUser, FaCalendarAlt } from "react-icons/fa";


const TicketCard = ({ ticket }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {ticket.subject}
          </h3>

          <p className="text-gray-600">
            <span className="font-semibold">
              <FaTicketAlt />
              Ticket ID:
            </span>{" "}
            {ticket.ticketId}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">
              <FaUser />
              Customer:
            </span>{" "}
            {ticket.customerName}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">
              Email:
            </span>{" "}
            {ticket.customerEmail}
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-right">

          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
              ticket.status === "Open"
                ? "bg-blue-100 text-blue-700"
                : ticket.status === "In Progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {ticket.status}
          </span>

          <br />

          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
              ticket.priority === "High"
                ? "bg-red-100 text-red-700"
                : ticket.priority === "Medium"
                ? "bg-orange-100 text-orange-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {ticket.priority}
          </span>

          <br />

          <Link
            to={`/tickets/${ticket.ticketId}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default TicketCard;