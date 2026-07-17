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