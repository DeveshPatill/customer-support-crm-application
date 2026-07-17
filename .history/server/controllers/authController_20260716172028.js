const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
  name,
  email,
  password: hashedPassword
});


const token = jwt.sign(
  {
    id: user._id
  },
  process.env.JWT_SECRET || "crmsecretkey",
  {
    expiresIn: "7d"
  }
);


console.log("Generated Token:", token);
console.log("Using Secret:", process.env.JWT_SECRET);


res.status(201).json({
  success: true,
  message: "Registration successful",
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email
  }
});