// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import toast from "react-hot-toast";

// function Login() {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
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
//             const response = await api.post(
//                 "/auth/login",
//                 formData
//             );
//             console.log(response.data);
//             localStorage.setItem(
//                 "token",
//                 response.data.token
//             );
//             console.log("Stored token:", localStorage.getItem("token"));
//             localStorage.setItem(
//                 "user",
//                 JSON.stringify(response.data.user)
//             );

//             toast.success("Login successful");

//             navigate("/dashboard");

//         } catch (error) {

//             toast.error(
//                 error.response?.data?.message ||
//                 "Login failed"
//             );
//         }
//     };

//     return (
//         <div>
//             <h1>Login</h1>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                 />

//                 <br /><br />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                 />

//                 <br /><br />

//                 <button type="submit">
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
            const response = await api.post(
                "/auth/login",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            toast.success("Login successful");

            navigate("/dashboard");

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-35">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
                    Customer Support CRM
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-700 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>

                    <p className="text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Login;