import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CreateTicket() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        customerName: "",
        customerEmail: "",
        subject: "",
        description: "",
        priority: "Medium"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/tickets", formData);

            alert("Ticket created successfully");

            navigate("/tickets");

        } catch (error) {
            console.log(error.response?.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="customerName"
                placeholder="Customer Name"
                onChange={handleChange}
            />

            <input
                name="customerEmail"
                placeholder="Customer Email"
                onChange={handleChange}
            />

            <input
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
            />

            <select
                name="priority"
                onChange={handleChange}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <button type="submit">
                Create Ticket
            </button>
        </form>
    );
}

export default CreateTicket;