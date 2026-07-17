const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require("./routes/authRoutes");

//ticket routes
const ticketRoutes = require("./routes/ticketRoutes");

app.use("/api/tickets", ticketRoutes);


//customer routes con
const customerRoutes = require("./routes/customerRoutes");



app.use("/api/customers", customerRoutes);

//mongodb conn
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

// Middleware
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);


// Test route
app.get("/", (req, res) => {
    res.send("Server is running");
});


// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});