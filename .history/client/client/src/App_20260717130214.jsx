// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
// import Tickets from "./pages/Tickets";
// import CreateTicket from "./pages/CreateTicket";
// import TicketDetails from "./pages/TicketDetails";
// import { Toaster } from "react-hot-toast";
// import toast from "react-hot-toast";
// toast.success("Success");
// toast.error("Error");
// import Register from "./pages/Register";

// function App() {
//   return (
//     <BrowserRouter>
//      <Toaster position="top-right" />
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/tickets" element={<Tickets />} />
//         <Route path="/tickets/new" element={<CreateTicket />} />
//         <Route path="/tickets/:id" element={<TicketDetails />} />
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import UpdateTicket from "./pages/UpdateTicket";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { Toaster } from "react-hot-toast";

function AppContent() {
  const location = useLocation();

  const showNavbar = !["/", "/login", "/register"].includes(
    location.pathname
  );

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tickets"
          element={
            <ProtectedRoute>
              <Tickets />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tickets/new"
          element={
            <ProtectedRoute>
              <CreateTicket />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tickets/:ticketId"
          element={
            <ProtectedRoute>
              <TicketDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tickets/update/:ticketId"
          element={
            <ProtectedRoute>
              <UpdateTicket />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;