import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <nav>
            <h2>Customer Support CRM</h2>

            <button onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}

export default Navbar;