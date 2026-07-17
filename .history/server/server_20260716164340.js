const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");


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