import Navbar from "../components/Navbar";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <Navbar />

            <h1>Welcome {user?.name}</h1>
            <p>{user?.email}</p>
        </>
    );
}

export default Dashboard;