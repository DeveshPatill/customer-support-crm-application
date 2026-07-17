import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Tickets from "./pages/Tickets";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
toast.success("Success");
toast.error("Error");
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
     <Toaster position="top-right" />
      <Navbar />

      <Routes>
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
  path="/tickets/:id"
  element={
    <ProtectedRoute>
      <TicketDetails />
    </ProtectedRoute>
  }
/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;