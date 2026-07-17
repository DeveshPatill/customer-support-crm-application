// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";

// function CreateTicket() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         customerName: "",
//         customerEmail: "",
//         subject: "",
//         description: "",
//         priority: "Medium"
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await api.post("/tickets", formData);

//             alert("Ticket created successfully");

//             navigate("/tickets");

//         } catch (error) {
//             console.log(error.response?.data);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="customerName"
//                 placeholder="Customer Name"
//                 onChange={handleChange}
//             />

//             <input
//                 name="customerEmail"
//                 placeholder="Customer Email"
//                 onChange={handleChange}
//             />

//             <input
//                 name="subject"
//                 placeholder="Subject"
//                 onChange={handleChange}
//             />

//             <textarea
//                 name="description"
//                 placeholder="Description"
//                 onChange={handleChange}
//             />

//             <select
//                 name="priority"
//                 onChange={handleChange}
//             >
//                 <option>Low</option>
//                 <option>Medium</option>
//                 <option>High</option>
//             </select>

//             <button type="submit">
//                 Create Ticket
//             </button>
//         </form>
//     );
// }

// export default CreateTicket;

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
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="w-full">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Create New Ticket
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Submit a customer support request
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Customer Name
                        </label>

                        <input
                            type="text"
                            name="customerName"
                            placeholder="Enter customer name"
                            value={formData.customerName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Customer Email
                        </label>

                        <input
                            type="email"
                            name="customerEmail"
                            placeholder="Enter customer email"
                            value={formData.customerEmail}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Subject
                        </label>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter ticket subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Description
                        </label>

                        <textarea
                            name="description"
                            placeholder="Describe the issue..."
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Priority
                        </label>

                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Create Ticket
                    </button>
                </form>

            </div>
        </div>
    );
}

export default CreateTicket;