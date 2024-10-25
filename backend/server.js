const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware
app.use(cors()); // To handle requests from different origins
app.use(express.json()); // To parse incoming JSON requests

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/events", eventRoutes); // Event management routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
