import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    subject: "",
    description: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/tickets", formData);

      toast.success(response.data.message);

      setFormData({
        customerName: "",
        customerEmail: "",
        subject: "",
        description: "",
        priority: "Medium",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create ticket"
      );
    }
  };

  return (
    <div>
      <h1>Create Ticket</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="customerEmail"
          placeholder="Customer Email"
          value={formData.customerEmail}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br /><br />

        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;