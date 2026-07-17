// import { useNavigate } from "react-router-dom";

// function Navbar() {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");

//         navigate("/login");
//     };

//     return (
//         <nav>
//             <h2>Customer Support CRM</h2>

//             <button onClick={handleLogout}>
//                 Logout
//             </button>
//         </nav>
//     );
// }

// export default Navbar;

import { useNavigate, Link } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <nav className="bg-white shadow-md px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="/dashboard"
                    className="text-2xl font-bold text-blue-600"
                >
                    Customer Support CRM
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">

                    <Link
                        to="/dashboard"
                        className="text-gray-700 hover:text-blue-600 font-medium transition"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/tickets"
                        className="text-gray-700 hover:text-blue-600 font-medium transition"
                    >
                        Tickets
                    </Link>

                    <Link
                        to="/tickets/new"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Create Ticket
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;