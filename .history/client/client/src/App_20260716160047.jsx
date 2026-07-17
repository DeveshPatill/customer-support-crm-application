import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;