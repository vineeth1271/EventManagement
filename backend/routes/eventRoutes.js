const express = require("express");
const { createEvent, getEvents } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Event routes
router.post("/", protect, createEvent); // Only authenticated users can create events
router.get("/", getEvents); // Anyone can view events

module.exports = router;
