import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

function UpdateTicket() {
  const { ticketId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    status: "",
    note: ""
  });

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const response = await api.get(
        `/tickets/${ticketId}`
      );

      setFormData({
        status: response.data.ticket.status,
        note: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(
        `/tickets/${ticketId}`,
        formData
      );

      toast.success(
        "Ticket updated successfully"
      );

      navigate(`/tickets/${ticketId}`);

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to update ticket"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Update Ticket
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="Open">Open</option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Closed">
                Closed
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Add Note
            </label>

            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              rows="5"
            />
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Update Ticket
          </button>

        </form>

      </div>
    </div>
  );
}

export default UpdateTicket;