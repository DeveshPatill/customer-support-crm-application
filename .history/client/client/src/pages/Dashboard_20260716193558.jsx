function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (
        <div>
            <h1>
                Welcome {user?.name}
            </h1>

            <p>{user?.email}</p>
        </div>
    );
}

export default Dashboard;