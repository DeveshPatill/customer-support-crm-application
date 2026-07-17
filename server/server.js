require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();




// ================= MIDDLEWARE =================
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ================= DATABASE CONNECTION =================
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});


// ================= ROUTES =================
app.use("/api/auth", authRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/tickets", ticketRoutes);


// ================= TEST ROUTE =================
app.get("/", (req, res) => {
    res.send("Server is running");
});

//debugging
app.get("/debug", (req,res)=>{
    res.json({
        message:"Render is using latest code"
    });
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});